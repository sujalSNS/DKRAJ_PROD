import React from 'react';
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";



export const Wishlist = () => {
  const cartProducts = [
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 3,
    },
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 5
    },
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 7
    },
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 3,
    },
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 5
    },
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 7
    },
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 3,
    },
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 5
    },
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 7
    },
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 3,
    },
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 5
    },
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 7
    },
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 3,
    },
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 5
    },
    {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12,
      gram: 7
    },
    // Other cart products...
  ];

  const products = [
    {
      productID: "411018RINGAA001EA001",
      title: "Elegant Diamond Ring",
      img: "/assets/images/goldRing.jpg",
      price: 52576,
      gram: 3,
    },
    {
      productID: "411018RINGAA001EA001",
      title: "Elegant Diamond Ring",
      img: "/assets/images/goldRing.jpg",
      price: 52576,
      gram: 4,
    }
    // Other products...
  ];

  const handleCartItemRemove = (e) => {
    e.preventDefault();
    console.log(e);
  };
  ;

  return (
    <div className='min-h-screen md:pt-28 pt-24'>
      <div className='md:mt-12 mb-24 flex flex-col justify-center items-center'>
        <p className='text-center md:text-4xl text-2xl font-semibold mb-3'>Your Wishlist</p>
        <div className="min-h-44 flex md:flex-row gap-5 w-full md:px-10 px-5 py-5 flex-col md:justify-between justify-center">


          {/* <div className='md:mx-44 w-full flex flex-col item justify-center gap-3'>
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
                      <p className="mr-2">Gram: {product.gram}</p>
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
          </div> */}

          <div className=' w-full   flex md:flex-wrap md:flex-row flex-col items-center justify-center gap-10 mb-12'>
            {cartProducts.map((product) => (
              <div key={product.productID} className="flex flex-col px-3 pt-1 pb-2 bg-white border shadow-md rounded-lg">
                <div className="w-full translate-x-2">
                  <button onClick={handleCartItemRemove} className='flex justify-end w-full mb-1 '>
                    <RxCross2 size={20} />
                  </button>
                </div>
                <div className='w-full flex justify-center'>
                  <div className="md:w-52 md:h-52 w-52 h-52 overflow-hidden ">
                    <img className="w-full h-full object-cover" src={product.img} alt={product.title} />
                  </div>
                </div>
                <div className="ml-4 flex-1 mt-2">
                  <div className="flex flex-col justify-center mb-2">
                    <div>
                      <h2 className="md:text-lg text-base font-semibold ">{product.title}</h2>
                      <p className="text-gray-500">₹{product.price}</p>
                    </div>
                  </div>
                  <div>
                    <button className='bg-black mt-2 text-sm border border-black text-white hover:text-black hover:bg-white px-12 py-2'>
                      Move to Bag
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>


          <div className='md:hidden flex border-t border-gray-400'></div>

        </div>
        {cartProducts.length === 0 ? (
          <>
            <p>Your bag is currently empty.</p>
            <Link to="/shop" className='bg-black mt-4 text-sm border border-black text-white hover:text-black hover:bg-white px-12 py-2'>Continue Shopping</Link>
          </>
        ) : <Link to="/shop" className='bg-black mt-4 text-sm border border-black text-white hover:text-black hover:bg-white px-12 py-2'>Continue Shopping</Link>}
        {/* <div className='w-full md:px-12 px-4 pt-12 pb-20'>
          <p className='text-left text-3xl font-semibold'>Shop more</p>
          <div className='flex items-center gap-5'>
            {products.map((product) => (
              <Link to={`/shop/product/${product.productID}`} key={product.id} className="md:w-[16em] w-[10em] rounded shadow-gray-300 overflow-hidden shadow-lg my-5">
                <img className="w-full" src={product.img} alt={product.title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-base mb-2">{product.title}</div>
                  <p className="text-gray-700 text-base">₹{product.price}</p>
                </div>
              </Link>
            ))}

          </div>
        </div> */}
      </div>
    </div>
  );
};

