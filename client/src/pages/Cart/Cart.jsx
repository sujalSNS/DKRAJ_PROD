import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <FaChevronRight size={15} />
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <FaChevronLeft size={15} />
        </div>
    );
};


export const Cart = () => {

    const navigate = useNavigate()

    const cartProducts = [
        {
            productID: "411018PNDTAA005EA005",
            title: "Delicate Diamond Pendant",
            img: "/assets/images/pendant.jpg",
            size: "Small",
            price: 17500,
            qty: 12
        },
        {
            productID: "411018PNDTAA005EA005",
            title: "Delicate Diamond Pendant",
            img: "/assets/images/pendant.jpg",
            size: "Small",
            price: 17500,
            qty: 12
        },
        {
            productID: "411018PNDTAA005EA005",
            title: "Delicate Diamond Pendant",
            img: "/assets/images/pendant.jpg",
            size: "Small",
            price: 17500,
            qty: 12
        },
        // Other cart products...
    ];

    const products = [
        {
            productID: "411018RINGAA001EA001",
            title: "Elegant Diamond Ring",
            img: "/assets/images/goldRing.jpg",
            price: 52576,
        },
        {
            productID: "411018RINGAA001EA001",
            title: "Elegant Diamond Ring",
            img: "/assets/images/goldRing.jpg",
            price: 52576,
        }
        // Other products...
    ];

    const handleCartItemRemove = (e) => {
        e.preventDefault();
    };


    const handleCheckout = (e) => {
        e.preventDefault();

        navigate("/checkout")

    }



    return (
        <div className='min-h-screen md:pt-28 pt-24'>
            <div className='md:mt-12 mb-24 flex flex-col justify-center items-center'>
                <p className='text-center md:text-4xl text-2xl font-semibold'>Your Bag</p>
                <div className="min-h-44 flex md:flex-row gap-5 w-full md:px-10 px-5 py-5 flex-col md:justify-between justify-center">
                    <div className='md:w-4/6 w-full flex flex-col justify-center gap-3'>
                        {cartProducts.map((product) => (
                            <div key={product.productID} className="flex p-4 bg-white border shadow-md rounded-lg">
                                <div className="md:w-28 w-24 md:h-28 h-24 overflow-hidden">
                                    <img className="w-full h-full object-cover" src={product.img} alt={product.title} />
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="flex flex-col justify-center mb-2">
                                        <div>
                                            <h2 className="md:text-lg text-base font-semibold">{product.title}</h2>
                                            <p className="text-gray-500">₹{product.price}</p>
                                        </div>
                                        <div className="flex mt-1 items-center">
                                            <p className="mr-2">Size: {product.size}</p>
                                            <p className="mr-2">Qty: {product.qty}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={handleCartItemRemove} className=''>
                                        <RxCross2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='md:hidden flex border-t border-gray-400'></div>
                    <div className='md:w-2/6 w-full h-80 bg-gray-100 md:p-8 p-5'>
                        <p className='text-black font-medium'>Order Summary</p>
                        <div className='grid grid-cols-2 text-sm gap-3 py-4'>
                            <div>Subtotal</div>
                            <div className='text-right '>₹0.00</div>
                            <div>Shipping Fee</div>
                            <div className='text-right '>₹0.00</div>
                            <div>Shipping Fee</div>
                            <div className='text-right '>₹0.00</div>
                        </div>
                        <div className='grid grid-cols-2 text-sm gap-3 border-t border-black py-4'>
                            <div>Estimated Total</div>
                            <div className='text-right '>₹0.00</div>
                        </div>
                        <div>
                            <button onClick={handleCheckout} type='submit' className='bg-black w-full mt-4 text-sm border border-black text-white hover:text-black hover:bg-white px-3 py-2'>CHECKOUT</button>
                        </div>
                    </div>
                </div>
                {cartProducts.length === 0 && (
                    <>
                        <p>Your bag is currently empty.</p>
                        <Link to="/shop" className='bg-black mt-4 text-sm border border-black text-white hover:text-black hover:bg-white px-12 py-2'>Continue Shopping</Link>
                    </>
                )}
                <div className='w-full md:px-12 px-4 pt-12 pb-20'>
                    <p className='text-left text-3xl font-semibold'>Shop more</p>
                    <div className='flex items-center gap-5'>
                        {products.map((product) => (
                            <Link to={`/shop/product/${product.productID}`} className="md:w-[16em] w-[10em] rounded shadow-gray-300 overflow-hidden shadow-lg my-5">
                                <img className="w-full" src={product.img} alt={product.title} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-base mb-2">{product.title}</div>
                                    <p className="text-gray-700 text-base">₹{product.price}</p>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};


