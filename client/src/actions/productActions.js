import axios from 'axios'
import {
    createProductRequest, createProductSuccess, createProductFail,
    getProductsAdminRequest, getProductsAdminSuccess, getProductsAdminFail,
    updateProductAdminRequest, updateProductAdminSuccess, updateProductAdminFail,
    deleteProductAdminRequest, deleteProductAdminSuccess, deleteProductAdminFail,
    getProductAdminRequest, getProductAdminSuccess, getProductAdminFail
} from '../slices/productSlice'
import { toast } from 'react-hot-toast'


const API_KEY = import.meta.env.VITE_API_KEY;



// Admin Route
export const addProduct = (product, setProductData, formRef) => async (dispatch) => {
    try {

        dispatch(createProductRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const { data } = await axios.post(`${API_KEY}/api/admin/product/create`, product, config);

        console.log("Product Creation", data)

        dispatch(createProductSuccess())

        toast.success("Product Added Successfully!");

        setProductData({
            title: '',
            desc: '',
            imgs: [],
            price: '',
            category: '',
            gender: '',
            stock: '',
            availableState: true,
            madeToOrder: false,
            popular: false,
            labor: '',
            packaging: ''
        });
        formRef.current.reset()



    } catch (err) {
        dispatch(createProductFail(err.response.data.message));
        console.log(err.response.data.message)
        toast.error(err.response.data.message);
    }
}

// Admin Route
export const getProductsAdmin = () => async (dispatch) => {
    try {

        dispatch(getProductsAdminRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const { data } = await axios.get(`${API_KEY}/api/admin/products`, config);

        dispatch(getProductsAdminSuccess(data.products))

    } catch (err) {
        dispatch(getProductsAdminFail(err.response.data.message));
        console.log(err.response.data.message)
        toast.error(err.response.data.message);
    }
}

// Admin Route
export const deleteProductAdmin = (productID) => async (dispatch) => {
    try {

        dispatch(deleteProductAdminRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const { data } = await axios.delete(`${API_KEY}/api/admin/product/delete/${productID}`, config);

        dispatch(deleteProductAdminSuccess())

        toast.success("Product removed successfully!");
        dispatch(getProductsAdmin())

    } catch (err) {
        dispatch(deleteProductAdminFail(err.response.data.message));
        console.log(err.response.data.message)
        toast.error(err.response.data.message);
    }
}

// Admin Route
export const getProductAdmin = (productID) => async (dispatch) => {
    try {

        dispatch(getProductAdminRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const { data } = await axios.get(`${API_KEY}/api/admin/product/${productID}`, config);

        dispatch(getProductAdminSuccess(data.product))


    } catch (err) {
        dispatch(getProductAdminFail(err.response.data.message));
        console.log(err.response.data.message)
        toast.error(err.response.data.message);
    }
}

// Admin Route
export const updateProductAdmin = (product, productID) => async (dispatch) => {
    try {

        dispatch(updateProductAdminRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const { data } = await axios.put(`${API_KEY}/api/admin/product/update/${productID}`,product, config);

        dispatch(updateProductAdminSuccess())
        dispatch(getProductAdmin(productID))
        toast.success("Product updated successfully!");

    } catch (err) {
        dispatch(updateProductAdminFail(err.response.data.message));
        console.log(err.response.data.message)
        toast.error(err.response.data.message);
    }
}