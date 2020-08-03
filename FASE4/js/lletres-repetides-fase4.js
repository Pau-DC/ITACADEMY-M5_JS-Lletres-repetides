//FASE 4
// Declaració de constants i variables
const name = 'PAU' 
const firstSurname = 'DOMINGO';
const secondSurname = 'CARTAÑÀ';
let fullName = [];

// Codi general
let nameArr = name.toUpperCase().split("");
let firstSurnameArr = firstSurname.toUpperCase().split("");
let secondSurnameArr = secondSurname.toUpperCase().split("");

for(let i=0; i<nameArr.length; i++){
  fullName.push(nameArr[i]);
}
fullName.push(" ");

for(let i=0; i<firstSurname.length; i++){
  fullName.push(firstSurname[i]);
}
fullName.push(" ");

for(let i=0; i<secondSurname.length; i++){
  fullName.push(secondSurname[i]);
}

console.log(fullName);