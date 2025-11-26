import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

export const addUserAPI = async(reqbody)=>{
    return await commonAPI("post",`${serverURL}/register`,reqbody)
}


export const loginAPI = async(reqbody)=>{
    return await commonAPI("post",`${serverURL}/login`,reqbody)
}