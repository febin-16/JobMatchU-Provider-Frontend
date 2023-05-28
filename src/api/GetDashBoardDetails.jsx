import axios from 'axios'
import { BASE_URL } from '../constants/url'
export async function GetDashBoardDetails(username){
    const url=BASE_URL+'api/company/profileupdate'
    try{
        const response = await axios.get(url,{params:{"username":username}})
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error
    }
}