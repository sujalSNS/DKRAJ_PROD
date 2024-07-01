import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { ProductCarousal } from './ProductCarousal';
import { FaRegHeart, FaHeart } from "react-icons/fa";


export const Product = () => {
    const product = {
        productID: "411018RINGAA001EA001",
        title: "Elegant Diamond Ring",
        desc: "Elegant diamond ring set in 18 karat white gold. Perfect for engagements and special occasions. hese diamond-adorned stud earrings crafted in 18 karat white and rose gold",
        img: "/assets/images/goldRing.jpg",
        category: ["Jewelry", "Rings", "Diamonds"],
        purity: ["18K", "22K"],
        size: ["6", "7", "8"],
        gender: ["Women"],
        price: 52576,
        popular: true,
        state: true,
        madeToOrder: false,
        stock: 25,
        labor: 200,
        packaging: 30,
        grams: [3.5, 4.0, 4.5]
    };


    const [qty, setQty] = useState(1);

    const addToCart = () => {
        console.log("Added to cart:", product.title);
    };

    const formatPrice = (number) => {
        return new Intl.NumberFormat('en-IN').format(number);
    }

    const handleQtyIncre = () => {
        setQty((cur) => (
            cur + 1
        ))
    }
    const handleQtyDecre = () => {
        if (qty === 1) {
            return;
        }
        setQty((cur) => (
            cur - 1
        ))
    }

    const inWishList = true

    return (
        <div className="min-h-screen md:pt-32 pt-20">

            <div>
                <div className='grid md:grid-cols-2  grid-cols-1 md:gap-10 gap-3 mb-20'>
                    <div className='md:p-14 md:pt-8 md:px-20 pt-8 px-5 flex justify-center '>
                        {/* <img src={product.img} className='object-cover h-5/6 ' alt="" /> */}
                        <ProductCarousal />
                    </div>
                    <div className='md:pl-3 md:px-0 px-6 md:pt-8'>
                        <div className='flex justify-between'>
                            <p> {product.productID} </p>
                            {inWishList ? <button className='md:mr-20'>
                                <FaHeart size={20} />
                            </button> : <button className='md:mr-20'>
                                <FaRegHeart size={20} />
                            </button>
                            
                        }
                        </div>
                        <p className='font-semibold md:text-4xl text-3xl mt-1'> {product.title} </p>
                        <div className='border-b border-black my-5 md:mr-20 mr-5'></div>
                        <p> {product.desc} </p>
                        <div className='mt-2'>
                            <span className='text-sm font-medium'>Category: </span>
                            {product.category.map((e, index) => (
                                <span className='text-sm font-medium' key={index}>
                                    {e}{index !== product.category.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                        <div className='flex items-center gap-2 mt-3 mb-2'>
                            <p className='font-semibold text-xl'>Price:</p>
                            <p className='font-semibold text-2xl'>₹ {formatPrice(product.price)}</p>
                        </div>
                        <div className='mb-3'>
                            <p>Price Inclusive of all taxes.</p>
                        </div>
                        <div>
                            <span className='text-xl font-medium'>Gender: </span>
                            {product.gender.map((e, index) => (
                                <span className='text-xl font-medium' key={index}>
                                    {e}{index !== product.gender.length - 1 && ', '}
                                </span>
                            ))}
                        </div>

                        <div className='my-3 flex items-center gap-3'>

                            <span className='font-semibold text-lg'>Qty: </span>
                            <div className='flex items-center gap-3'>
                                <button onClick={handleQtyIncre} className='bg-gray-400 text-white p-3 rounded-full'>
                                    <FaPlus />
                                </button>

                                <span className='text-xl font-semibold w-6 text-center'>{qty}</span>
                                <button onClick={handleQtyDecre} className='bg-gray-400 text-white p-3 rounded-full'>
                                    <FaMinus />
                                </button>
                            </div>

                        </div>

                        <div className='my-3 flex w-full justify-start items-center gap-4'>
                            <div className=' md:w-1/5 w-2/6'>
                                <label htmlFor="size" className='font-medium text-lg'>Size:</label>
                                <select id="size" className="bg-gray-50 w-full border border-gray-700 text-gray-900  rounded-lg text-lg outline-none  pr-3 block p-2.5 ">
                                    <option className='text-lg' selected>{product.size[0]}</option>
                                    {
                                        product.size.slice(1).map((e) => ((
                                            <option className='text-lg py-3 ' value="US">{e}</option>
                                        )))
                                    }

                                </select>
                            </div>
                            <div className=' md:w-1/5 w-2/6'>
                                <label htmlFor="weight" className='font-medium text-lg'>Weight:</label>
                                <select id="weight" className="bg-gray-50 w-full border border-gray-700 text-gray-900  rounded-lg text-lg outline-none  pr-3 block p-2.5 ">
                                    <option className='text-lg' selected>{product.grams[0]}</option>
                                    {
                                        product.grams.slice(1).map((e) => ((
                                            <option className='text-lg py-3 ' value="US">{e}</option>
                                        )))
                                    }

                                </select>
                            </div>
                            <div className=' md:w-1/5 w-2/6'>
                                <label htmlFor="weight" className='font-medium text-lg'>Purity:</label>
                                <select id="weight" className="bg-gray-50 w-full border border-gray-700 text-gray-900  rounded-lg text-lg outline-none  pr-3 block p-2.5 ">
                                    <option className='text-lg' selected>{product.purity[0]}</option>
                                    {
                                        product.purity.slice(1).map((e) => ((
                                            <option className='text-lg py-3 ' value="US">{e}</option>
                                        )))
                                    }

                                </select>
                            </div>


                        </div>

                        <div className='mt-2 mb-6 flex md:flex-row flex-col items-center md:justify-start md:gap-10 gap-2 md:pr-12 '>
                            <button className='bg-black w-full mt-4 text-lg md:text-lg border border-black  text-white hover:text-black hover:bg-white px-3 py-2'>Add to Cart</button>
                            <button className='bg-gray-600 w-full mt-4 text-lg md:text-lg border border-gray-600  text-white hover:text-black hover:bg-white px-3 py-2'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

