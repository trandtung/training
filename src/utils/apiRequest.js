
import { ApiClient } from "../request/request";
import { loginFailed,loginStart,loginSuccess } from "../stores/slice/authSlice";
import { removeAccessToken,handleStorageToken } from "./auth.util";
export const loginUser=async(user,dispatch,navigate)=>{
    dispatch(loginStart());
    try{
        const res=await ApiClient.post('/auth/login', user)
        handleStorageToken(res.data.token,res.data.id)
        dispatch(loginSuccess(res.data))
        navigate("/")        
    }
    catch(err){
        dispatch(loginFailed())
    }
}

export const logout = () => {
    removeAccessToken()
    window.location.href = '/sign-in';
  };