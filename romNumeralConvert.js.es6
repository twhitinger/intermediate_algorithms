// Convert the given number into a roman numeral.
const convertToRoman = (num) => {
  let roman = "";
  const table = { "M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100,
  "XC": 90 , "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1
};

for ( let i in table ) {
  while (num >= table[i]){
    roman += i;
    num -= table[i];
  }
}

return roman;

};


// convert the given roman into a decimal

const deromanize = (roman) => {
  roman = roman.toUpperCase(),
  table = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000},
  decimal = 0,
  i = roman.length;
  while (i--) {
    if ( table[roman[i]] < table[roman[i+1]] )
    decimal -= table[roman[i]];
    else
    decimal += table[roman[i]];
  }
  return decimal;
};
