import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

export const addUserAPI = async(reqbody)=>{
    return await commonAPI("post",`${serverURL}/register`,reqbody)
}


export const loginAPI = async(reqbody)=>{
    return await commonAPI("post",`${serverURL}/login`,reqbody)
}

export const googleLoginAPI = async(reqbody)=>{
    return await commonAPI("post",`${serverURL}/google-login`,reqbody)
}

export const getHomeBooksAPI = async()=>{
    return await commonAPI("get",`${serverURL}/home-books`)
}

//.........................user........................

export const addBookAPI = async(reqbody,reqHeader)=>{
    console.log(reqHeader,reqbody);
    
    return await commonAPI("post",`${serverURL}/add-book`,reqbody,reqHeader)
}

//get all books - all-books
export const getAllBooksAPI = async(reqHeader)=>{
    
    
    return await commonAPI("get",`${serverURL}/all-books`,"",reqHeader)
}