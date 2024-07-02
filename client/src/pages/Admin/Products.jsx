import React from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { MdEdit, MdDelete } from "react-icons/md";

const products = [
  {
    productID: "411018RINGAA001EA001",
    title: "Elegant Diamond Ring",
    desc: "Elegant diamond ring set in 18 karat white gold. Perfect for engagements and special occasions.",
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
  },
  {
    productID: "411018PNDTAA005EA005",
    title: "Delicate Diamond Pendant",
    desc: "A delicate diamond pendant set in 18 karat white gold. Perfect for daily wear.",
    img: "/assets/images/pendant.jpg",
    category: ["Jewelry", "Pendants", "Diamonds"],
    purity: ["18K"],
    size: ["Small"],
    gender: ["Women"],
    price: 17500,
    popular: true,
    state: true,
    madeToOrder: false,
    stock: 50,
    labor: 150,
    packaging: 20,
    grams: [2.0, 2.5, 3.0]
  },
  {
    productID: "411018BRCLAA003EA003",
    title: "Classic Gold Bracelet",
    desc: "A classic gold bracelet suitable for all occasions. Made with 22 karat gold.",
    img: "/assets/images/bracelet.jpg",
    category: ["Jewelry", "Bracelets", "Gold"],
    purity: ["22K"],
    size: ["Medium", "Large"],
    gender: ["Unisex"],
    price: 62000,
    popular: true,
    state: true,
    madeToOrder: false,
    stock: 30,
    labor: 250,
    packaging: 40,
    grams: [10.0, 12.0, 14.0]
  },
];

export const Products = ({ toggleDrawer }) => {
  return (
    <>
      <div id="drawer-container" className="min-h-screen relative z-0 md:pt-28 pt-20 bg-gray-100">
        <button onClick={toggleDrawer(true)} className="pl-1 pt-3 fixed">
          <HiBars3BottomLeft size={35} />
        </button>
        <div className="text-center pt-6">
            <p className="text-2xl font-semibold">Products</p>
        </div>

        <div className="px-12 pt-2">
          <TableContainer component={Paper} style={{ height: 500 }} className="border border-b-0">
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Product ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Stock</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.productID}>
                    <TableCell>{product.productID}</TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>{product.category.join(", ")}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
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
