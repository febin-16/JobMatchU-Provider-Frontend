import axios from 'axios';
import { BASE_URL } from "../constants/urls";
export async function ProfileUpdate(user,data,value){

        console.log(user);
        data={...data,username:user}
        console.log(data);
        const url=BASE_URL+`api/company/profileupdate`
        try
        {
            const response = await axios.put(url,data);
            return response.data;
        }catch(error){
            console.log(error);
            throw error;
        }
}