import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export async function GetApplicantsDetails(job_id){
    console.log(job_id);
    const url = BASE_URL + 'api/applicationProvider/'
    try{
        const response = await axios.get(url,{params:{'job_id':job_id}});
        return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}