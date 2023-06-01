import axios from 'axios';
import { BASE_URL } from "../constants/urls";
export async function getProviderId(user){
        console.log(user);
        const url=BASE_URL+`api/company/profileupdate`;
        try
        {
            const response = await axios.get(url,{params:{"username":user}});
            return response.data;
        }catch(error){
            console.log(error);
            throw error;
        }
    
}