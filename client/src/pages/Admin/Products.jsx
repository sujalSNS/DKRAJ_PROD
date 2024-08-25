import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductsAdmin,
  deleteProductAdmin,
} from "../../actions/productActions";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IconButton, Dialog } from "@mui/material";
import { Loader } from "../../components/Global/Loader";
import { MdEdit, MdDelete } from "react-icons/md";
import { NotAdmin } from "../../components/Global/NotAdmin";
import { UnAuthorized } from "../../components/Global/UnAuthorized";
import { MaterialReactTable } from "material-react-table";
import { useNavigate } from "react-router-dom";

export const Products = ({ toggleDrawer }) => {
  const { productsAdmin, loading } = useSelector((state) => state.product);
  const { isLogin, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedProductID, setSelectedProductID] = useState(null);

  useEffect(() => {
    dispatch(getProductsAdmin());
  }, [productsAdmin.length, dispatch]);

  const handleDeleteProduct = () => {
    dispatch(deleteProductAdmin(selectedProductID));
    handleClose();
  };

  const handleDeleteClickOpen = (productID) => {
    setSelectedProductID(productID);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProductID(null);
  };

  const columns = [
    { accessorKey: "productID", header: "Product ID" },
    { accessorKey: "title", header: "Title" },
    { accessorKey: "category", header: "Category" },
    { accessorKey: "price", header: "Price" },
    { accessorKey: "stock", header: "Stock" },
    {
      accessorKey: "actions",
      header: "Actions",
      Cell: ({ row }) => (
        <div>
          <IconButton
            aria-label="edit"
            onClick={() => {
              navigate(`/admin/product/edit/${row.original.productID}`);
            }}
          >
            <MdEdit />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleDeleteClickOpen(row.original.productID)}
          >
            <MdDelete />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <>
      <div
        id="drawer-container"
        className="min-h-screen relative z-0 md:pt-28 pt-20 pb-20 bg-gray-100"
      >
        {loading ? (
          <div className="flex items-center justify-center mt-36 ">
            <Loader />
          </div>
        ) : isLogin ? (
          user.isAdmin ? (
            <>
              <button className="pl-1 pt-3 fixed">
                <HiBars3BottomLeft onClick={toggleDrawer(true)} size={35} />
              </button>
              <div className="text-center pt-6">
                <p className="text-3xl font-bold text-gray-800 ">
                  Manage Products
                </p>
              </div>
              <div className="md:px-12 px-5 pt-2 ">
                <MaterialReactTable
                  columns={columns}
                  data={productsAdmin}
                  enableColumnVisibilityToggle={false}
                  enableDensityToggle={false}
                  enableFullScreenToggle={false}
                  muiTableContainerProps={{ sx: { height: "60vh" } }}
                />
              </div>
            </>
          ) : (
            <NotAdmin />
          )
        ) : (
          <UnAuthorized />
        )}

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="py-7 px-10">
            <p id="alert-dialog-title" className="text-xl font-bold">
              {"Are you sure you want to remove this product?"}
            </p>
            <div className="mt-3">
              <p id="alert-dialog-description">
                Deleting this product cannot be undone.
              </p>
              <p id="alert-dialog-description">
                Please confirm if you want to proceed.
              </p>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <button
                className="bg-gray-300 text-black border border-black px-8 text-sm py-2"
                onClick={handleClose}
                color="primary"
              >
                Cancel
              </button>
              <button
                className="bg-black text-white border-black px-8 text-sm py-2"
                onClick={handleDeleteProduct}
                color="primary"
                autoFocus
              >
                Confirm
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};
