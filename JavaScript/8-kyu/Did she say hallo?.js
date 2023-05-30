// https://www.codewars.com/kata/56a4addbfd4a55694100001f

/* function validateHello(greetings) {
  res =  //regex here/.test(greetings) 
  return res
} */

const validateHello = greetings => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);
