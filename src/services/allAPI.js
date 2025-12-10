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
export const getAllBooksAPI = async(searchKey,reqHeader)=>{
    return await commonAPI("get",`${serverURL}/all-books?search=${searchKey}`,"",reqHeader)
}

//api to view a book
export const viewABookApi = async(id)=>{
    return await commonAPI("get",`${serverURL}/view-books/${id}`)
}

//.................Admin................
//get all books - all Admin-books
export const getAllAdminBooksAPI = async(reqHeader)=>{
    return await commonAPI("get",`${serverURL}/admin-all-books`,"",reqHeader)
}

//approve books from admin
export const approveBooksAPI = async(reqHeader,reqbody)=>{
    console.log(reqHeader,reqbody);
    
    return await commonAPI("put",`${serverURL}/approve-books`,reqbody,reqHeader)
}

//get all users
export const getAllUsersAPI = async(reqHeader)=>{
    return await commonAPI("get",`${serverURL}/all-users`,"",reqHeader)
}


//update admin profile
export const adminProfileUpdateAPI = async(reqbody,reqHeader)=>{
    console.log(reqHeader,reqbody);
    
    return await commonAPI("put",`${serverURL}/admin-profile-update`,reqbody,reqHeader)
}