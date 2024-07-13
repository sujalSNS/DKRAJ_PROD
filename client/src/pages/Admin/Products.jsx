import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { MdEdit, MdDelete } from "react-icons/md";

export const Products = ({ toggleDrawer }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
                {products && products.map((product) => (
                  <TableRow key={product.productID}>
                    <TableCell>{product.productID}</TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>{product.category}</TableCell>
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
