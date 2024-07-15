import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";
import { getProductAdmin, updateProductAdmin } from "../../actions/productActions";
import { NotAdmin } from "../../components/Global/NotAdmin";
import { UnAuthorized } from '../../components/Global/UnAuthorized';

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

export const EditProduct = ({ toggleDrawer }) => {
    const { loading, productAdmin } = useSelector(state => state.product);
    const { isLogin, user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { productID } = useParams();

    // State to hold product data for the form
    const [productData, setProductData] = useState({
        title: '',
        desc: '',
        imgs: [],
        price: '',
        category: '',
        gender: '',
        stock: '',
        availableState: true,
        madeToOrder: false,
        popular: false,
        labor: '',
        packaging: ''
    });

    // Populate form fields with existing product data on component mount
    useEffect(() => {
        dispatch(getProductAdmin(productID)); // Fetch product details
    }, [dispatch, productID]);

    useEffect(() => {
        if (productAdmin) {
            // Initialize productData with productAdmin values
            setProductData({
                title: productAdmin.title,
                desc: productAdmin.desc,
                imgs: ["data:image/jpeg;base64," + productAdmin.img1], // Initialize imgs with img1
                price: productAdmin.price.toString(),
                category: productAdmin.category,
                gender: productAdmin.gender,
                stock: productAdmin.stock.toString(),
                availableState: productAdmin.availableState,
                madeToOrder: productAdmin.madeToOrder,
                popular: productAdmin.popular,
                labor: productAdmin.labor.toString(),
                packaging: productAdmin.packaging.toString()
            });
    
            // Append additional images if available
            if (productAdmin.img2) {
                setProductData(prevState => ({
                    ...prevState,
                    imgs: [...prevState.imgs, "data:image/jpeg;base64,"+productAdmin.img2]
                }));
            }
            if (productAdmin.img3) {
                setProductData(prevState => ({
                    ...prevState,
                    imgs: [...prevState.imgs, "data:image/jpeg;base64,"+productAdmin.img3]
                }));
            }
        }
    }, [productAdmin]);

    // Function to handle file input change
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length < 1 || files.length > 3) {
            toast.error('Please select between 1 to 3 images.');
            return;
        }

        const promises = files.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve(reader.result);
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        });

        Promise.all(promises).then((base64Array) => {
            if ([...productData.imgs, ...base64Array].length > 3) {
                toast.error('Please select between 1 to 3 images.');
                return;
            }
            setProductData(prevState => ({
                ...prevState,
                imgs: [...prevState.imgs, ...base64Array]
            }));
        }).catch((error) => {
            console.error('Error reading files:', error);
        });
    };

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to remove image from imgs array
    const removeImage = (indexToRemove) => {
        setProductData(prevState => ({
            ...prevState,
            imgs: prevState.imgs.filter((_, index) => index !== indexToRemove)
        }));
    };

   

    // Function to handle form submission
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

        // Prepare product object for submission
        const product = { ...productData };
        product.img1 = productData.imgs[0];
        product.img2 = productData.imgs[1] ?? "";
        product.img3 = productData.imgs[2] ?? "";
        delete product.imgs;

        // Dispatch updateProductAdmin action
        dispatch(updateProductAdmin(product, productID));
        console.log("update product",product)
    };

    return (
        <>
            <div id="drawer-container" className="min-h-screen relative z-0 md:pt-28 pt-20 bg-gray-100">
                {isLogin && user.isAdmin ? (
                    <>
                        <button className='pl-1 pt-3 fixed'>
                            <HiBars3BottomLeft onClick={toggleDrawer(true)} size={35} />
                        </button>

                        <div className="px-4 md:px-12 pt-5 pb-12 flex flex-col items-center">
                            <div className="md:w-2/4">
                                <h2 className="text-2xl font-bold mb-4 text-center">Update Product</h2>
                                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
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
                                        <label htmlFor="img" className="border py-2 w-full border-gray-400 px-2 focus:outline-none cursor-pointer focus:border-black mt-1 bg-white">
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
                                                        className="absolute top-1 -right-1 bg-red-500 text-white rounded-full   p-1"
                                                        onClick={() => removeImage(index)}
                                                    >
                                                        <RxCross2 size={14} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="price" className="text-lg font-medium text-gray-700">Price:</label>
                                        <input type="number" id="price" name="price" value={productData.price} onChange={handleChange} required
                                            className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="category" className="text-lg font-medium text-gray-700">Category:</label>
                                        <select value={productData.category} id="category" name="category" onChange={handleChange} className="border border-gray-300 text-gray-900 text-sm  block w-full p-2.5 focus:outline-none focus:border-black placeholder-gray-400 dark:text-white">
                                            <option disabled selected>Choose a Category</option>
                                            {categories.map((e) => (
                                                <option key={e.value} value={e.value}>{e.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="gender" className="text-lg font-medium text-gray-700">Gender:</label>
                                        <select value={productData.gender} id="gender" name="gender" onChange={handleChange} className="border border-gray-300 text-gray-900 text-sm  block w-full p-2.5 focus:outline-none focus:border-black placeholder-gray-400 dark:text-white">
                                            <option disabled selected>Choose a Gender</option>
                                            {genders.map((e) => (
                                                <option key={e.value} value={e.value}>{e.label}</option>
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
                                        <label htmlFor="labor" className="text-lg font-medium text-gray-700">Labor Cost:</label>
                                        <input type="number" id="labor" name="labor" value={productData.labor} onChange={handleChange} required
                                            className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="packaging" className="text-lg font-medium text-gray-700">Packaging Cost:</label>
                                        <input type="number" id="packaging" name="packaging" value={productData.packaging} onChange={handleChange} required
                                            className="border py-2 w-full border-gray-400 px-2 focus:outline-none focus:border-black mt-1"
                                        />
                                    </div>
                                    {loading ?
                                        <button disabled className='bg-white w-full mt-4 flex items-center justify-center text-sm border border-black text-black cursor-default px-3 py-2'>
                                            <CgSpinnerTwoAlt className='animate-spin my-0.5' size={24} />
                                        </button> :
                                        <button type="submit" className='bg-black w-full flex items-center justify-center mt-4 text-sm border border-black text-white hover:text-black hover:bg-white px-3 py-3'>Submit</button>
                                    }
                                </form>
                            </div>
                        </div>
                    </>
                ) : (
                    isLogin ? <NotAdmin /> : <UnAuthorized />
                )}
            </div>
        </>
    );
};
