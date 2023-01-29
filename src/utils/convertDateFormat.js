//Format the date
const convertDateFormat = (date) => {
  const customDate = new Date(date);
  const dateUtc = new Date(customDate.getUTCFullYear(), customDate.getUTCMonth(), customDate.getUTCDate(),
    customDate.getUTCHours(), customDate.getUTCMinutes(), customDate.getUTCSeconds());

  // console.log(dateUtc.toLocaleDateString());
  return dateUtc.toLocaleDateString();
}

export default convertDateFormat;