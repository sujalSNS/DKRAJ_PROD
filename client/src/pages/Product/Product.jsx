import { useEffect, useState } from 'react';
import { FaPlus, FaMinus, FaRegHeart, FaHeart } from "react-icons/fa";
import { ProductCarousal } from './ProductCarousal';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/productActions';
import { Loader } from '../../components/Global/Loader';
import { useParams } from 'react-router';

export const Product = () => {
    const { loading, product, error } = useSelector(state => state.product);
    const dispatch = useDispatch();
    const { productID } = useParams();

    const [qty, setQty] = useState(1);
    const [inWishList, setInWishList] = useState(false); // Initialize wishlist status

    useEffect(() => {
        if (productID) {
            dispatch(getProduct(productID)); // Fetch product data using the productID from the URL
        }
    }, [dispatch, productID]);

    useEffect(() => {
    }, [product]);

    const addToCart = () => {
        console.log("Added to cart:", product?.title);
    };

    const formatPrice = (number) => {
        return new Intl.NumberFormat('en-IN').format(number);
    };

    const handleQtyIncre = () => {
        setQty(prevQty => prevQty + 1);
    };

    const handleQtyDecre = () => {
        setQty(prevQty => prevQty > 1 ? prevQty - 1 : 1);
    };

    // Ensure size, weight, and purity are arrays
    const sizes = product?.size ? JSON.parse(product.size) : ["Not Available"];
    const weights = product?.weight ? JSON.parse(product.weight) : ["Not Available"];
    const purities = product?.purity ? JSON.parse(product.purity) : ["Not Available"];

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen mt-36">
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center min-h-screen mt-36">
                <p className="text-red-500">Error: {error.message}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen md:pt-32 pt-20">
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-3 mb-20'>
                <div className='md:p-14 md:pt-8 md:px-20 pt-8 px-5 flex justify-center'>
                    {product?.img1 ? (
                        <ProductCarousal 
                            imgs={[
                                product.img1, 
                                product.img2 || '', 
                                product.img3 || ''
                            ]}
                        />
                    ) : (
                        <div className='w-full h-64 bg-gray-200 flex items-center justify-center'>
                            <p>No images available</p>
                        </div>
                    )}
                </div>
                <div className='md:pl-3 md:px-0 px-6 md:pt-8'>
                    <div className='flex justify-between'>
                        <p>{product?.productID}</p>
                        <button 
                            aria-label={inWishList ? "Remove from wishlist" : "Add to wishlist"}
                            className='md:mr-20'
                            onClick={() => setInWishList(!inWishList)}
                        >
                            {inWishList ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                        </button>
                    </div>
                    <p className='font-semibold md:text-4xl text-3xl mt-1'>{product?.title}</p>
                    <div className='border-b border-black my-5 md:mr-20 mr-5'></div>
                    <p>{product?.desc}</p>
                    <div className='mt-2'>
                        <span className='text-sm font-medium'>Category: </span>
                        <span className='text-sm font-medium'>{product?.category || 'N/A'}</span>
                    </div>
                    <div className='flex items-center gap-2 mt-3 mb-2'>
                        <p className='font-semibold text-xl'>Price:</p>
                        <p className='font-semibold text-2xl'>₹ {formatPrice(product?.totalPrice)}</p>
                    </div>
                    <div className='mb-3'>
                        <p>Price Inclusive of all taxes.</p>
                    </div>
                    <div>
                        <span className='text-xl font-medium'>Gender: </span>
                        <span className='text-xl font-medium'>{product?.gender || 'N/A'}</span>
                    </div>

                    <div className='my-3 flex items-center gap-3'>
                        <span className='font-semibold text-lg'>Qty: </span>
                        <div className='flex items-center gap-3'>
                            <button 
                                aria-label="Increase quantity"
                                onClick={handleQtyIncre} 
                                className='bg-gray-400 text-white p-3 rounded-full'
                            >
                                <FaPlus />
                            </button>
                            <span className='text-xl font-semibold w-6 text-center'>{qty}</span>
                            <button 
                                aria-label="Decrease quantity"
                                onClick={handleQtyDecre} 
                                className='bg-gray-400 text-white p-3 rounded-full'
                            >
                                <FaMinus />
                            </button>
                        </div>
                    </div>

                    <div className='my-3 flex w-full justify-start items-center gap-4'>
                        <div className='md:w-1/5 w-2/6'>
                            <label htmlFor="size" className='font-medium text-lg'>Size:</label>
                            <select id="size" className="bg-gray-50 w-full border border-gray-700 text-gray-900 rounded-lg text-lg outline-none pr-3 block p-2.5">
                                {sizes.map((size, index) => (
                                    <option key={index} className='text-lg'>{size}</option>
                                ))}
                            </select>
                        </div>
                        <div className='md:w-1/5 w-2/6'>
                            <label htmlFor="weight" className='font-medium text-lg'>Weight:</label>
                            <select id="weight" className="bg-gray-50 w-full border border-gray-700 text-gray-900 rounded-lg text-lg outline-none pr-3 block p-2.5">
                                {weights.map((weight, index) => (
                                    <option key={index} className='text-lg'>{weight}</option>
                                ))}
                            </select>
                        </div>
                        <div className='md:w-1/5 w-2/6'>
                            <label htmlFor="purity" className='font-medium text-lg'>Purity:</label>
                            <select id="purity" className="bg-gray-50 w-full border border-gray-700 text-gray-900 rounded-lg text-lg outline-none pr-3 block p-2.5">
                                {purities.map((purity, index) => (
                                    <option key={index} className='text-lg'>{purity}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='mt-2 mb-6 flex md:flex-row flex-col items-center md:justify-start md:gap-10 gap-2 md:pr-12'>
                        <button 
                            className='bg-black w-full mt-4 text-lg md:text-lg border border-black text-white hover:text-black hover:bg-white px-3 py-2'
                            onClick={addToCart}
                        >
                            Add to Cart
                        </button>
                        <button 
                            className='bg-gray-600 w-full mt-4 text-lg md:text-lg border border-gray-600 text-white hover:text-black hover:bg-white px-3 py-2'
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
