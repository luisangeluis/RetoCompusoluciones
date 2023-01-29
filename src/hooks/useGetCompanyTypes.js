//Dependencies
import axios from "axios";
import { useEffect, useState } from "react"

const useGetCompanyTypes = () => {
  const [companyTypes, setCompanyTypes] = useState();
  const baseUrl = 'retocompusolucionesback-production.up.railway.app';

  useEffect(()=>{
    getCompanyTypes();
  },[])

  const getCompanyTypes = () => {
    axios.get(`${baseUrl}/api/v1/companyTypes`)
      .then(res => {
        console.log(res.data.response);
        setCompanyTypes(res.data.response)
      })
      .catch(error => console.log(error))
  }

  return [companyTypes];
}

export default useGetCompanyTypes;