//numbers to numerals conversion array
let numbersAndNumerals = [
  { number: 1000, roman: "M" },
  { number: 900, roman: "CM" },
  { number: 500, roman: "D" },
  { number: 400, roman: "CD" },
  { number: 90, roman: "XC" },
  { number: 50, roman: "L" },
  { number: 40, roman: "XL" },
  { number: 10, roman: "X" },
  { number: 9, roman: "IX" },
  { number: 5, roman: "V" },
  { number: 4, roman: "IV" },
  { number: 1, roman: "I" },
];

//function to convert arabic number to roman numeral
function convert(arabicNumber) {
  let romanLetter = '';
  let number = arabicNumber;
  for(let i=0; i < numbersAndNumerals.length; i++) {
    if (numbersAndNumerals[i].number <= number) {
      number = number - numbersAndNumerals[i].number;
     
      romanLetter = romanLetter + numbersAndNumerals[i].roman;
      
      i--;
    }
  }
  document.getElementById("romanInput").value = romanLetter;
  //console output to test function
  console.log(`My number ${arabicNumber} is ${romanLetter}`);
}

//event listener to convert button
document.getElementById("convert").addEventListener("click", function () {
  let number = document.getElementById("numberInput").value;

  convert(number);
});

//event listener to clear button
function ClearFields() {

  document.getElementById("numberInput").value = "";
  document.getElementById("romanInput").value = "";
}