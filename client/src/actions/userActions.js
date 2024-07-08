import axios from 'axios'
import {registerRequest, registerSuccess,registerFail,loginRequest ,loginSuccess,loginFail, verifyLoginRequest, verifyLoginSuccess, verifyLoginFail, getUserRequest, getUserSuccess, getUserFail} from '../slices/userSlice'
import {toast} from 'react-hot-toast'


export const login = (userData,setSuccessToggle) => async (dispatch) => {
    try {
        dispatch(loginRequest());

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // console.log(userData);

        const { data } = await axios.post(`http://localhost:5000/api/auth/login`, userData, config);
        
        // toast.success(data.response.data.message)

        console.log("login", data);

        localStorage.setItem('token', data.token);

        dispatch(loginSuccess(data));
        setSuccessToggle(true)
        dispatch(verify())
        toast.success("Login Successful!");
    } catch (err) {
        // dispatch(loginFail(err.response.data.message));
        console.log(err);
        toast.error(err.response.data.message);
    }
};
export const register = (userData, setSuccessToggle) => async (dispatch) => {
    try {

        dispatch(registerRequest())


        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data } = await axios.post(`http://localhost:5000/api/auth/register`, userData, config)

        localStorage.setItem('token', data.token)

        dispatch(registerSuccess(data));
        dispatch(verify())
        toast.success("Register Successful !");
        setSuccessToggle(true)

    } catch (err) {
        dispatch(registerFail(err.response.data.message));
        console.log(err.response.data.message)
        toast.error(err.response.data.message);
    }
}


export const verify = () => async (dispatch) => {
    try {

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const { data } = await axios.get(`http://localhost:5000/api/auth/verify`, config);

        console.log("data",data)

        dispatch(verifyLoginSuccess(data))


    } catch (err) {
        dispatch(verifyLoginFail())
    }
}


export const googleAuth = () => async (dispatch) => {
    try{

        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data } = await axios.post(`http://localhost:5000/api/auth/google`, { }, config);

        toast.success("Login Successful!");

    }catch(err){

    }
}
