import React from 'react'
import axios from 'axios';
import { BASE_URL } from "../constants/urls";

export async function EditJobUpdate(data) {
	console.log("data: ",data)
	const url = BASE_URL + `api/jobupdate/`;
	try{
		const response = await axios.put(url,data);
		console.log("res data: ",response.data);
		//const res =JSON.parse(response.data)
		alert(response.data);
	}catch(error){
		console.log(error);
		throw error;
	}
}
