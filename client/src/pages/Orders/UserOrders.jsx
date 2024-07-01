import React from 'react';
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";



const order = {
  address: "nyasd,asd as,dsad",
  city: "Mumbai",
  state: "Maharashtra",
  country: "India",
  pinCode: 334455,
  phoneNo: 1321321313,
  user: "sam altman",
  order: {
    productID: "411018PNDTAA005EA005",
    title: "Delicate Diamond Pendant",
    img: "/assets/images/pendant.jpg",
    size: "Small",
    price: 17500,
    qty: 12
  },
  paymentInfo: {
    id: "1231312312313",
    status: "Success"
  },
  paidAt: "01/02/2024",
  itemPrice: 1231312,
  taxPrice: 213,
  shippingPrice: 213,
  totalPrice: 123123,
  orderStatus: "Processing",
  deliveredAt: "01/02/2024",
  createdAt: "01/02/2024"
}

const orders = [

  {
    id: "13213213123",
    address: "nyasd,asd as,dsad",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pinCode: 334455,
    phoneNo: 1321321313,
    user: "sam altman",
    order: {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12
    },
    paymentInfo: {
      id: "1231312312313",
      status: "Success"
    },
    paidAt: "01/02/2024",
    itemPrice: 1231312,
    taxPrice: 213,
    shippingPrice: 213,
    totalPrice: 123123,
    orderStatus: "Processing",
    deliveredAt: "01/02/2024",
    createdAt: "01/02/2024"
  },
  {
    id: "13213213124",
    address: "nyasd,asd as,dsad",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pinCode: 334455,
    phoneNo: 1321321313,
    user: "sam altman",
    order: {
      productID: "411018PNDTAA005EA005",
      title: "Delicate Diamond Pendant",
      img: "/assets/images/pendant.jpg",
      size: "Small",
      price: 17500,
      qty: 12
    },
    paymentInfo: {
      id: "1231312312313",
      status: "Success"
    },
    paidAt: "01/02/2024",
    itemPrice: 1231312,
    taxPrice: 213,
    shippingPrice: 213,
    totalPrice: 123123,
    orderStatus: "Delivered",
    deliveredAt: "01/02/2024",
    createdAt: "01/02/2024"
  }

];


export const UserOrders = () => {


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
      gram: 3,
    }
  ];

  const handleCartItemRemove = (e) => {
    e.preventDefault();
    console.log(e);
  };
  ;

  return (
    <div className='min-h-screen md:pt-32 pt-28'>
      <div className='md:mt-12 mb-24 flex flex-col justify-center items-center'>
        <p className='text-center text-4xl font-semibold'>Your Orders</p>
        <div className="min-h-44 flex md:flex-row gap-5 w-full md:px-10 px-5 py-5 flex-col md:justify-between justify-center">
          <div className='md:mx-44 w-full flex flex-col item justify-center gap-3'>



            {
              orders.map((order) => (
                <Link to={`/order/${order.id}`} key={order.id} className="flex md:flex-row flex-col p-4 md:gap-4 gap-2 justify-between bg-white border shadow-md rounded-lg">

                  <div className='flex gap-3 items-center '>
                    <div className='w-28 h-28 overflow-hidden'>
                      <img className="w-full h-full object-cover" src={order.order.img} alt="" />
                    </div>

                    <div>
                      <div className="flex flex-col justify-center mb-2">
                        <div>
                          <h2 className="md:text-lg text-base font-semibold">{order.order.title}</h2>
                          <p className="text-gray-500">₹{order.order.price}</p>
                        </div>
                        <div className="flex flex-col   mt-1 ">
                          <p className="mr-2">Size: {order.order.size}</p>
                          <p className="mr-2">Qty: {order.order.qty}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <p> ₹{order.order.price}</p>
                  </div>

                  <div className='flex gap-1 md:text-xl text-base items-center'>
                    <p className={`${order.orderStatus === "Processing" ? "text-blue-600" : "text-green-600"}`}><GoDotFill /></p> <span>{order.orderStatus}</span>
                  </div>

                </Link>
              ))
            }
          </div>
          <div className='md:hidden flex border-t border-gray-400'></div>

        </div>
        {orders.length === 0 ? (
          <>
            <p>Your don't have any order.</p>
            <Link to="/shop" className='bg-black mt-4 text-sm border border-black text-white hover:text-black hover:bg-white px-12 py-2'>Continue Shopping</Link>
          </>
        ) : <Link to="/shop" className='bg-black mt-4 text-sm border border-black text-white hover:text-black hover:bg-white px-12 py-2'>Continue Shopping</Link>}
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


