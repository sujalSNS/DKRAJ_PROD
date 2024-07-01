import React from 'react'


const order = {
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
}


export const UserOrder = () => {
    return (
        <>


            <div className='min-h-screen md:pt-28 pt-16'>
                <div className='bg-gray-900 px-6 mt-2 text-white py-3'>
                    <p>Order ID: {order.id}</p>
                </div>


                <div className='flex md:flex-row flex-col md:gap-14 gap-2  pt-8 '>
                    <div className='px-6  mb-4'>
                        <p className='text-2xl pb-1 font-semibold'>Delivery Address</p>
                        <p>{order.address}</p>
                        <p>City - {order.city}</p>
                        <p>Pincode - {order.pinCode}</p>
                        <p>State - {order.state}</p>
                        <p>Country - {order.country}</p>
                        <p><span className='font-semibold'>Name</span> - {order.user}</p>
                        <p><span className='font-semibold'>Phone number</span> - {order.phoneNo}</p>
                    </div>
                    <div className='px-6 mb-4'>
                        <p className='text-2xl pb-1 font-semibold'>Payment Info</p>
                        <p>Tax Price: ₹{order.taxPrice}</p>
                        <p>Shipping Price: ₹{order.shippingPrice}</p>
                        <p>Total Price: ₹{order.totalPrice}</p>
                        <p>Status: <span className='text-green-600'>PAID</span> </p>
                        <p>Paid At: {order.paidAt} </p>
                    </div>
                    <div className='px-6 mb-4'>
                        <p className='text-2xl pb-1 font-semibold'>Order Status</p>
                        <p className={`${order.orderStatus === "Processing" ? "text-blue-600" : "text-green-600"} font-semibold text-xl`}>{order.orderStatus}</p>
                    </div>
                </div>
                <div className='border-b border-gray-600 py-3 md:w-3/5'></div>
                <div>
                    <div className='px-6 pt-3'>

                        <p className='font-semibold  text-2xl'>Order Iteams</p>

                        <div className='flex gap-5 mt-3 items-center shadow-md shadow-gray-500 rounded p-3 md:w-2/4'>
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
                    </div>
                </div>

                <div className='mt-12 px-6 mb-24'>
                    <button className='px-12 py-2 rounded text-white font-semibold bg-red-600'>Cancel Order</button>
                </div>

            </div>

        </>
    )
}
