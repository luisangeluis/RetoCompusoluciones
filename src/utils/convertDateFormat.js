import reverseDate from "./reverseData";

//Format the date
const convertDateFormat = (date) => {
  const fecha = new Date(date);
  const fecha_utc = new Date(fecha.getUTCFullYear(), fecha.getUTCMonth(), fecha.getUTCDate(),
    fecha.getUTCHours(), fecha.getUTCMinutes(), fecha.getUTCSeconds());
  
  console.log(fecha_utc.getUTCDate());

}



export default convertDateFormat;