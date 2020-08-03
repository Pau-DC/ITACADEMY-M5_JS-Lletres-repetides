//FASE 3
// Declaració de constants i variables
const nom = 'PAU DOMINGO CARTAÑÀ';
let charsMap = new Map();

// Codi general
let nomArr = nom.toUpperCase().replace(/ /gi,"").split("");

console.log(`Partim del nom ${nom}`);

for(let i=0; i<nomArr.length; i++){
  if(charsMap.has(nomArr[i])){
    charsMap.set(nomArr[i],charsMap.get(nomArr[i])+1);
  }else{
    charsMap.set(nomArr[i],1);
  }
}

console.log(charsMap);
