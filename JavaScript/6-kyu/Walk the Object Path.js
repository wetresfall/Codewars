// https://www.codewars.com/kata/59418db3f5c394eca80000ef

function find(object, path) {
  //practice
  return path.split('.').reduce(function(acc, pathName){
    return (acc && acc.hasOwnProperty(pathName)) ? acc[pathName] : undefined;
  },object);
  
}
