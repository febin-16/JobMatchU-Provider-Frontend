import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls';

export async function GetSelectedApplDetails(job_id){
    console.log("bababa: ",job_id);
    const url = BASE_URL + 'api/jobreview/';
    try{
        const response = await axios.get(url,{params:{'job_id':job_id}});
        console.log("res: ",response.data);
        return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}
