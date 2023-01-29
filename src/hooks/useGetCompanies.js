//Dependencies
import axios from "axios";
import { useEffect, useState } from "react";

const useGetCompanies = () => {
  const [companies, setCompanies] = useState();
  const baseUrl = 'https://retocompusolucionesback-production.up.railway.app';

  useEffect(() => {
    getCompanies();
  }, [])

  const getCompanies = () => {
    axios.get(`${baseUrl}/api/v1/companies`)
      .then(res => {
        console.log(res.data.response);
        setCompanies(res.data.response)
      })
      .catch(error => console.log(error))
  }

  return [companies];
}

export default useGetCompanies;