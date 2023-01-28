const convertDateFormat=(string)=> {
  var info = string.split('-').reverse().join('/');
  return info;
}

export default convertDateFormat;