import axios from 'axios';
import { BASE_URL } from "../constants/urls";
export async function getJobDetails(user){
        console.log(user);
        const url=BASE_URL+`api/joblist`
        try
        {
            const response = await axios.get(url,{params:{"username":user}});
            return response.data;
        }catch(error){
            console.log(error);
            throw error;
        }
    
}