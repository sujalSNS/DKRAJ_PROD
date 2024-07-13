import axios from 'axios'
import { createProductRequest, createProductSuccess, createProductFail } from '../slices/productSlice'
import { toast } from 'react-hot-toast'


const API_KEY = import.meta.env.VITE_API_KEY;



export const addProduct = (product, setProductData, formRef) => async (dispatch) => {
    try {

        dispatch(createProductRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const { data } = await axios.post(`${API_KEY}/api/product/create`, product, config);

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