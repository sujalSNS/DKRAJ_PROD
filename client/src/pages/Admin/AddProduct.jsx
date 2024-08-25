import { HiBars3BottomLeft } from "react-icons/hi2";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { addProduct } from "../../actions/productActions";
import { UnAuthorized } from '../../components/Global/UnAuthorized';
import { NotAdmin } from "../../components/Global/NotAdmin";

const genders = [
    { label: "Men", value: "men" },
    { label: "Women", value: "women" },
    { label: "Kids", value: "kids" }
];

const categories = [
    { label: "Rings", value: "rings" },
    { label: "Earrings", value: "earrings" },
    { label: "Bracelets", value: "bracelets" },
    { label: "Bangles", value: "bangles" },
    { label: "Mangalsutras", value: "mangalsutras" },
    { label: "Nose Pins", value: "nosePins" },
    { label: "Head Jewelleries", value: "headJewelleries" },
    { label: "Pendant Sets", value: "pendantSets" },
    { label: "Wedding Sets", value: "weddingSets" },
    { label: "Pendants", value: "pendants" },
    { label: "Anklets", value: "anklets" },
    { label: "Toe Rings", value: "toeRings" },
    { label: "Home Decors", value: "homeDecors" },
];

export const AddProduct = ({ toggleDrawer }) => {
    const { loading } = useSelector(state => state.product);
    const { isLogin, user } = useSelector(state => state.user);

    const dispatch = useDispatch();
    const formRef = useRef();

    const [productData, setProductData] = useState({
        title: '',
        desc: '',
        imgs: [],
        totalPrice: '',
        sellingPrice: '',
        category: '',
        gender: '',
        stock: '',
        availableState: true,
        madeToOrder: false,
        popular: false,
        labor: '',
        packaging: '',
        countryTax: '',
        country: '',
        active: 'active',
        size: [],
        purity: [],
        weight: [],
    });

    // Function to handle file input change
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        if (files.length < 1 || files.length > 3) {
            toast.error('Please select between 1 to 3 images.');
            return;
        }

        const convertToBase64 = (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });
        };

        Promise.all(files.map(convertToBase64))
            .then((base64Array) => {
                if ([...productData.imgs, ...base64Array].length > 3) {
                    toast.error('Please select between 1 to 3 images.');
                    return;
                }
                setProductData(prevState => ({
                    ...prevState,
                    imgs: [...prevState.imgs, ...base64Array]
                }));
            })
            .catch((error) => {
                console.error('Error converting files:', error);
                toast.error('Error converting files to base64.');
            });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProductData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    const handleInputChange = (setter) => (e) => {
        const { name, value } = e.target;
        const values = value.split(',').map((val) => val.trim());
        setter((prevState) => ({
            ...prevState,
            [name]: values,
        }));
    };

    const removeImage = (indexToRemove) => {
        setProductData(prevState => ({
            ...prevState,
            imgs: prevState.imgs.filter((_, index) => index !== indexToRemove)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!productData.category) {
            toast.error("Please select category!");
            return;
        }
        if (!productData.gender) {
            toast.error("Please select gender!");
            return;
        }
        if (productData.imgs.length === 0) {
            toast.error("Please select product images!");
            return;
        }

        const product = { ...productData };
        product.img1 = productData.imgs[0];
        product.img2 = productData.imgs[1] ?? "";
        product.img3 = productData.imgs[2] ?? "";

        delete product.imgs;

        dispatch(addProduct(product, setProductData, formRef));
    };

    return (
        <>
            <div id="drawer-container" className="min-h-screen relative z-0 md:pt-28 pt-20 bg-gray-100">
                {isLogin ? user.isAdmin ? <>
                    <button className='pl-1 pt-3 fixed'>
                        <HiBars3BottomLeft onClick={toggleDrawer(true)} size={35} />
                    </button>

                    <div className="px-4 md:px-12 pt-5 pb-12 flex flex-col items-center">
                        <div className="md:w-2/4">
                            <h2 className="text-3xl font-bold mb-4 text-center">Add Product</h2>
                            <form ref={formRef} onSubmit={handleSubmit} className="max-w-lg mx-auto">
                                <div className="mb-4">
                                    <label htmlFor="title" className="text-lg font-medium text-gray-700">Title:</label>
                                    <input type="text" id="title" name="title" value={productData.title} onChange={handleChange} required
                                        className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="desc" className="text-lg font-medium text-gray-700">Description:</label>
                                    <textarea id="desc" name="desc" value={productData.desc} onChange={handleChange} required
                                        className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                    ></textarea>
                                </div>
                                <div className="mb-4 flex flex-col">
                                    <label htmlFor="img" className="text-lg font-medium text-gray-700">Images:</label>

                                    <label htmlFor="img" className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1 cursor-pointer bg-white">
                                        <span className="bg-gray-100 px-3 py-1 text-">
                                            {productData.imgs.length > 0 ?
                                                productData.imgs.length === 1 ? `${productData.imgs.length} Image Selected` : `${productData.imgs.length} Images Selected` : "Select images"}
                                        </span>
                                    </label>

                                    <input type="file" id="img" accept="image/*" name="file" multiple onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <div className="flex items-center gap-3">
                                        {productData.imgs.map((img, index) => (
                                            <div key={index} className="relative">
                                                <img src={img} alt={`Uploaded ${index + 1}`} className="mt-2 h-20 w-20 object-contain" />
                                                <button
                                                    type="button"
                                                    className="absolute top-1 -right-1 bg-red-500 text-white rounded-full p-1"
                                                    onClick={() => removeImage(index)}
                                                >
                                                    <RxCross2 size={14} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="totalPrice" className="text-lg font-medium text-gray-700">Total Price:</label>
                                    <input type="number" id="totalPrice" name="totalPrice" value={productData.totalPrice} onChange={handleChange} required
                                        className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="sellingPrice" className="text-lg font-medium text-gray-700">Selling Price:</label>
                                    <input type="number" id="sellingPrice" name="sellingPrice" value={productData.sellingPrice} onChange={handleChange} required
                                        className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="category" className="text-lg font-medium text-gray-700">Category:</label>
                                    <select id="category" name="category" value={productData.category} onChange={handleChange} required
                                        className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                    >
                                        <option value="">Select a category</option>
                                        {categories.map((cat) => (
                                            <option key={cat.value} value={cat.value}>{cat.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="gender" className="text-lg font-medium text-gray-700">Gender:</label>
                                    <select id="gender" name="gender" value={productData.gender} onChange={handleChange} required
                                        className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                    >
                                        <option value="">Select a gender</option>
                                        {genders.map((gen) => (
                                            <option key={gen.value} value={gen.value}>{gen.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="stock" className="text-lg font-medium text-gray-700">Stock:</label>
                                    <input type="number" id="stock" name="stock" value={productData.stock} onChange={handleChange} required
                                        className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="availableState" className="flex items-center">
                                        <input type="checkbox" id="availableState" name="availableState" checked={productData.availableState} onChange={handleChange}
                                            className="mr-2"
                                        />
                                        Available
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="madeToOrder" className="flex items-center">
                                        <input type="checkbox" id="madeToOrder" name="madeToOrder" checked={productData.madeToOrder} onChange={handleChange}
                                            className="mr-2"
                                        />
                                        Made to Order
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="popular" className="flex items-center">
                                        <input type="checkbox" id="popular" name="popular" checked={productData.popular} onChange={handleChange}
                                            className="mr-2"
                                        />
                                        Popular
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="labor" className="text-lg font-medium text-gray-700">Labor Cost:</label>
                                    <input type="number" id="labor" name="labor" value={productData.labor} onChange={handleChange}
                                        className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="packaging" className="text-lg font-medium text-gray-700">Packaging Cost:</label>
                                    <input type="number" id="packaging" name="packaging" value={productData.packaging} onChange={handleChange}
                                        className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="countryTax" className="text-lg font-medium text-gray-700">Country Tax:</label>
                                    <input type="number" id="countryTax" name="countryTax" value={productData.countryTax} onChange={handleChange}
                                        className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="country" className="text-lg font-medium text-gray-700">Country:</label>
                                    <input type="text" id="country" name="country" value={productData.country} onChange={handleChange}
                                        className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="size" className="text-lg font-medium text-gray-700">Size:</label>
                                    <input
                                        type="text"
                                        id="size"
                                        name="size"
                                        value={productData.size ? productData.size.join(', ') : ''}
                                        onChange={handleInputChange(setProductData)}
                                        placeholder="Enter sizes separated by comma"
                                        className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="purity" className="text-lg font-medium text-gray-700">Purity:</label>
                                    <input
                                        type="text"
                                        id="purity"
                                        name="purity"
                                        value={productData.purity ? productData.purity.join(', ') : ''}
                                        onChange={handleInputChange(setProductData)}
                                        placeholder="Enter purities separated by comma"
                                        className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="weight" className="text-lg font-medium text-gray-700">Weight:</label>
                                    <input
                                        type="text"
                                        id="weight"
                                        name="weight"
                                        value={productData.weight ? productData.weight.join(', ') : ''}
                                        onChange={handleInputChange(setProductData)}
                                        placeholder="Enter weights separated by comma"
                                        className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {loading ? <CgSpinnerTwoAlt size={20} className="animate-spin" /> : 'Add Product'}
                                </button>
                            </form>
                        </div>
                    </div>
                </> : <NotAdmin /> : <UnAuthorized />}
            </div>
        </>
    );
};
