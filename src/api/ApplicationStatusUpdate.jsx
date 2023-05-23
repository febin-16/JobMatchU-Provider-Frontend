import React from 'react'
import axios from 'axios';
import { BASE_URL } from "../constants/urls";

export async function ApplicationStatusUpdate(data) {
	console.log("data: ",data)
	const url = BASE_URL + `api/applicationProvider/`;
	try{
		const response = await axios.put(url,data);
		console.log("res data: ",response.data);
		alert(response.data.status);
	}catch(error){
		console.log(error);
		throw error;
	}
}
