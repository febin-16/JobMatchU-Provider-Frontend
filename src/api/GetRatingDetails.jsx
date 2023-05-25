import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export async function GetRatingDetails(student_id){
    console.log("std id: ",student_id);
    const url = BASE_URL + 'api/jobreviewProvider/';
    try{
        const response = await axios.get(url,{params:{'student':student_id}});
        return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}