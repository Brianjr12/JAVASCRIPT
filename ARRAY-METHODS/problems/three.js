// * Crea una función que reciba un array de strings y retorne un array con los strings que contienen exactamente 3 letras:

let array =["Yerson","Nes","Kike"]        // ["Nes"]
let array1 =["Mafer","Eli","Sally","Eva"]   // ["Eli","Eva"]
let array2 = ["Tony", "Steve", "Bruce"]// []

function three(arrayStrings) {
  let stringChar = arrayStrings.filter(string => {
    if (string.length === 3) {
      return string
    }
  })
  return stringChar
  
}
console.log(three(array2))