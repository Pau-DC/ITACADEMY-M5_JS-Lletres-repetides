//FASE 2
// Declaració de constants i variables
const nom = 'PAU D0MINGO C#RTAÑÀ';

//Funcions neessàries
function isLetter (char){
  let regex = new RegExp("[a-z,ñ,à,è,é,í,ò,ó,ú]","gi") 
  return regex.test(char) ? true : false;
}

function isVowel (char){
  let regex = new RegExp("[aeiouàèéíòóú]","gi");
  return regex.test(char) ? true : false;
}

function isNumber (char){
  let regex = new RegExp("[0-9]","gi");
  return regex.test(char) ? true : false;
}

// Codi general
let nomArr = nom.toUpperCase().replace(/ /gi,"").split("");

console.log(`Partim del nom ${nom}`);

for(let i=0; i<nomArr.length; i++){
  if(isLetter(nomArr[i])){
    if(isVowel(nomArr[i])){
      console.log(`He trobat la vocal: ${nomArr[i]}`);
    }else{
      console.log(`He trobat la consonant: ${nomArr[i]}`);
    }
  }else{
    if(isNumber(nomArr[i])){
      console.log(`Els noms de persones no contenen el número: ${nomArr[i]}`);
    }else{
      console.log(`Els noms de persones no contenen el caràcter: ${nomArr[i]}`);
    }
  }
}
