import React from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { MdEdit, MdDelete } from "react-icons/md";

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
      qty: 12,
    },
    paymentInfo: {
      id: "1231312312313",
      status: "Success",
    },
    paidAt: "01/02/2024",
    itemPrice: 1231312,
    taxPrice: 213,
    shippingPrice: 213,
    totalPrice: 123123,
    orderStatus: "Processing",
    deliveredAt: "01/02/2024",
    createdAt: "01/02/2024",
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
      qty: 12,
    },
    paymentInfo: {
      id: "1231312312313",
      status: "Success",
    },
    paidAt: "01/02/2024",
    itemPrice: 1231312,
    taxPrice: 213,
    shippingPrice: 213,
    totalPrice: 123123,
    orderStatus: "Delivered",
    deliveredAt: "01/02/2024",
    createdAt: "01/02/2024",
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
      qty: 12,
    },
    paymentInfo: {
      id: "1231312312313",
      status: "Success",
    },
    paidAt: "01/02/2024",
    itemPrice: 1231312,
    taxPrice: 213,
    shippingPrice: 213,
    totalPrice: 123123,
    orderStatus: "Delivered",
    deliveredAt: "01/02/2024",
    createdAt: "01/02/2024",
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
      qty: 12,
    },
    paymentInfo: {
      id: "1231312312313",
      status: "Success",
    },
    paidAt: "01/02/2024",
    itemPrice: 1231312,
    taxPrice: 213,
    shippingPrice: 213,
    totalPrice: 123123,
    orderStatus: "Delivered",
    deliveredAt: "01/02/2024",
    createdAt: "01/02/2024",
  },
];

export const Orders = ({ toggleDrawer }) => {
  return (
    <>
      <div id="drawer-container" className="min-h-screen relative z-0 md:pt-28 pt-20 bg-gray-100">
        <button onClick={toggleDrawer(true)} className="pl-1 pt-3 fixed">
          <HiBars3BottomLeft size={35} />
        </button>
        <div className="text-center pt-6">
            <p className="text-2xl font-semibold">Orders</p>
        </div>

        <div className="px-12 pt-2">
        <TableContainer component={Paper} style={{ height: 500 }} className="border ">
        <Table stickyHeader>
              <TableHead >
                <TableRow>
                <TableCell >Order ID</TableCell>
                  <TableCell >Status</TableCell>
                  <TableCell >Item Qty</TableCell>
                  <TableCell >Amount</TableCell>
                  <TableCell >Placed On</TableCell>
                  <TableCell >Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.order.productID}</TableCell>
                    <TableCell>
                        <span  className={`${order.orderStatus === "Processing" ? "text-blue-600" : "text-green-600" }`} >
                        {order.orderStatus}</span></TableCell>
                    <TableCell>{order.order.qty}</TableCell>
                    <TableCell>{order.totalPrice}</TableCell>
                    <TableCell>{order.createdAt}</TableCell>
                    <TableCell>
                      <IconButton aria-label="edit">
                        <MdEdit />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <MdDelete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};
