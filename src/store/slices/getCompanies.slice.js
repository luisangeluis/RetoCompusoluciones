//Dependencies
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'retocompusolucionesback-production.up.railway.app';

const getCompaniesSlice =createSlice({
  name: 'getCompanies',
  initialState: null,
  reducers: {
    setGetCompanies: (state, action) => action.payload
  }
})

export default getCompaniesSlice.reducer;
export const { setGetCompanies} = getCompaniesSlice.actions;

export const getCompanies =()=>(dispatch)=>{
  axios.get(`${baseUrl}/api/v1/companies`)
      .then(res => {
        console.log(res.data.response);
        dispatch(setGetCompanies(res.data.response))
      })
      .catch(error => console.log(error))
}

export const removeCompany =(id)=>(dispatch)=>{
  axios.delete(`${baseUrl}/api/v1/companies/${id}`)
      .then(res=> {
        console.log(res);
        // dispatch(setGetCompanies(res.data.response))
      })
      .catch(error=>console.log(error))
      .finally(()=>getCompanies())
}