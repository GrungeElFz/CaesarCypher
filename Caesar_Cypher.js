// UTF-16_Table = {

//   A : 65   ,   B : 66   ,   C : 67   ,   D : 68   ,   E : 69 ,
//   F : 70   ,   G : 71   ,   H : 72   ,   I : 73   ,   J : 74 , 
//   K : 75   ,   L : 76   ,   M : 77   ,   N : 78   ,   O : 79 , 
//   P : 80   ,   Q : 81   ,   R : 82   ,   S : 83   ,   T : 84 ,
//   U : 85   ,   V : 86   ,   W : 87   ,   X : 88   ,   Y : 89 ,
//   Z : 90

// }


// Alphabet_order = {

//   A : 1    ,   B : 2    ,   C : 3    ,   D : 4    ,   E : 5   ,
//   F : 6    ,   G : 7    ,   H : 8    ,   I : 9    ,   J : 10  , 
//   K : 11   ,   L : 12   ,   M : 13   ,   N : 14   ,   O : 15  , 
//   P : 16   ,   Q : 17   ,   R : 18   ,   S : 19   ,   T : 20  ,
//   U : 21   ,   V : 22   ,   W : 23   ,   X : 24   ,   Y : 25  ,
//   Z : 26

// }



let alphabets = 'abcdefghijklmnopqrstuvwxyz'

const caesarCypher = (str, shiftNum) => {
  
  shift = shiftNum % 26
  let encryptedStr = '';
  
  for (let i = 0; i < str.length; i++) {
    let currentStr = alphabets.indexOf(str[i]);

    if (currentStr === -1) {
      encryptedStr += str[i];
    } else {
      encryptedStr += alphabets[(currentStr + shift) % alphabets.length];
    }
  }

  return encryptedStr;
}

// console.log(caesarCypher('abc', 2));
// // return -->  'cde'

// console.log(caesarCypher('abc', 10));
// // return -->  'klm'


