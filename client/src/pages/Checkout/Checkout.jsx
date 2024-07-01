import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { MdEdit, MdDelete } from "react-icons/md";
import { Modal, Box, Button, Checkbox } from '@mui/material';
import { RxCross2 } from "react-icons/rx";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // Adjust width to your preference
  maxWidth: 500,
  bgcolor: 'background.paper',
  boxShadow: 24
};

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Checkout = () => {
  const [openViewAddress, setOpenViewAddress] = useState(false);
  const [openEditAddress, setOpenEditAddress] = useState(false);
  const [openAddAddress, setOpenAddAddress] = useState(false);

  const handleOpenViewAddress = () => setOpenViewAddress(true);
  const handleCloseViewAddress = () => setOpenViewAddress(false);

  const handleOpenEditAddress = () => setOpenEditAddress(true);
  const handleCloseEditAddress = () => setOpenEditAddress(false);

  const handleOpenAddAddress = () => setOpenAddAddress(true);
  const handleCloseAddAddress = () => setOpenAddAddress(false);


  const checkoutProducts = [
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

  return (
    <>
      <div className='min-h-screen md:pt-32 pt-24'>
        <div className='flex md:justify-between justify-center md:flex-row flex-col gap-4'>
          <div className='md:w-4/6 w-full  mb-12 md:pr-4'>
            <div className='mb-3'>
              <div className='bg-gray-500 py-2 px-4 text-white'>
                SELECT DELIVERY ADDRESS
              </div>
              <div className='py-2 px-4'>
                <div className='flex mb-3 items-center bg-gray-300 md:w-1/2'>
                  <Checkbox {...label} />
                  <button onClick={handleOpenViewAddress} className='font-semibold px-2 py-2 w-3/4 text-left'>Home Address</button>
                  <span className='w-1/4 flex items-center gap-7 justify-center px-3 py-2'>
                    <button onClick={handleOpenEditAddress}><MdEdit size={21} /></button>
                    <button><MdDelete size={21} /></button>
                  </span>
                </div>
                <div className='flex mb-3 items-center bg-gray-300 md:w-1/2'>
                  <Checkbox {...label} />
                  <button onClick={handleOpenViewAddress} className='font-semibold px-2 py-2 w-3/4 text-left'>Work Address</button>
                  <span className='w-1/4 flex items-center gap-7 justify-center px-3 py-2'>
                    <button onClick={handleOpenEditAddress}><MdEdit size={21} /></button>
                    <button><MdDelete size={21} /></button>
                  </span>
                </div>
                <button onClick={handleOpenAddAddress} className='flex bg-black mt-4 text-sm border border-black text-white hover:text-black hover:bg-white px-4 py-2 items-center justify-center gap-2'>
                  <IoMdAdd size={20} /> <span>Add a new address</span>
                </button>
              </div>
            </div>

            <div className='mb-3'>
              <div className='bg-gray-500 py-2 px-4 text-white'>
                CONFIRM ORDER
              </div>
              <div className='flex flex-col justify-center gap-3 px-3 py-1'>
                {checkoutProducts.map((product) => (
                  <div key={product.productID} className="flex p-4 bg-white border shadow-md rounded-lg">
                    <div className="md:w-24 w-24 md:h-24 h-24 overflow-hidden">
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

                  </div>
                ))}
              </div>
            </div>
            <div className='mb-3'>
              <div className='bg-gray-500 py-2 px-4 text-white'>
                PAYMENT OPTIONS
              </div>
              <div className='px-3'>
                <div className='flex items-center gap-2 '>
                  <Checkbox {...label} />
                  <p>Credit / Debit / ATM Card</p>
                </div>



              </div>
              <div className="mt-3 px-3">
                <button className="px-12 text-white py-2 font-medium bg-blue-500 ">PAY ₹2,443</button>

              </div>

            </div>

          </div>
          <div className="md:w-2/6 w-full md:fixed right-2 ">
            <div className=' h-64 bg-gray-200 md:p-8 p-5 md:mx-0 '>
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
            </div>
          </div>
        </div>
      </div>

      {/* View Address Modal */}
      <Modal
        open={openViewAddress}
        onClose={handleCloseViewAddress}
        disableScrollLock
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bg-gray-300 text-black rounded-sm shadow-lg">
            <div className='border-b border-gray-600 flex justify-between'>
              <p className='font-bold text-xl pt-3 pb-2 pl-6 pr-2'>Home</p>
              <button className='flex justify-center items-center px-3' onClick={handleCloseViewAddress}>
                <RxCross2 size={20} />
              </button>
            </div>
            <div className="space-y-2 pt-3 p-6">
              <p>
                <span className="font-semibold">Name:</span> Sam Altman
              </p>
              <p>
                <span className="font-semibold">Mobile no:</span> 6783459027
              </p>
              <p>
                <span className="font-semibold">Address:</span> Ny street, nj apartments
              </p>
              <p>
                <span className="font-semibold">Pincode:</span> 112233
              </p>
              <p>
                <span className="font-semibold">City:</span> New York
              </p>
              <p>
                <span className="font-semibold">Country:</span> California
              </p>
              <p>
                <span className="font-semibold">State:</span> USA
              </p>
              <p>
                <span className="font-semibold">Landmark:</span> New joe's house
              </p>
            </div>
          </div>
        </Box>
      </Modal>

      {/* Edit Address Modal */}
      <Modal
        open={openEditAddress}
        onClose={handleCloseEditAddress}
        disableScrollLock
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bg-gray-300 text-black rounded-sm shadow-lg">
            <div className='border-b border-gray-600 flex justify-between'>
              <p className='font-bold text-xl pt-3 pb-2 pl-6 pr-2'>Edit Address</p>
              <button className='flex justify-center items-center px-3' onClick={handleCloseEditAddress}>
                <RxCross2 size={20} />
              </button>
            </div>
            <div className="space-y-2 pt-3 p-6 max-h-[80vh] overflow-y-auto">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" defaultValue="Sam Altman" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">Mobile no</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="text" defaultValue="6783459027" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" defaultValue="Ny street, nj apartments" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pincode">Pincode</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pincode" type="text" defaultValue="112233" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">City</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" defaultValue="New York" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">Country</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text" defaultValue="California" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">State</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="state" type="text" defaultValue="USA" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="landmark">Landmark</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="landmark" type="text" defaultValue="New joe's house" />
                </div>
                <button type="submit" className=" rounded-sm bg-blue-600 px-6 py-2 font-normal text-white">Save</button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>

      {/* Add Address Modal */}
      <Modal
        open={openAddAddress}
        onClose={handleCloseAddAddress}
        disableScrollLock
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bg-gray-300 text-black rounded-sm shadow-lg">
            <div className='border-b border-gray-600 flex justify-between'>
              <p className='font-bold text-xl pt-3 pb-2 pl-6 pr-2'>Add New Address</p>
              <button className='flex justify-center items-center px-3' onClick={handleCloseAddAddress}>
                <RxCross2 size={20} />
              </button>
            </div>
            <div className="space-y-2 pt-3 p-6 max-h-[80vh] overflow-y-auto">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">Mobile no</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="text" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pincode">Pincode</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pincode" type="text" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">City</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">Country</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">State</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="state" type="text" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="landmark">Landmark</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="landmark" type="text" />
                </div>
                <button type="submit" className=" rounded-sm bg-blue-600 px-6 py-2 font-normal text-white">Add</button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;
