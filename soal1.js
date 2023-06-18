//Mencari akar bilangan dengan nilai bilangan lebih dari nol dan bilangan adalah bilangan genap

//Dekarasi module prompt
const prompt = require('prompt-sync')({sigint: true});

//Function to create fill number
const num1 = prompt('Enter number: ');

//Logic to detect negative number (Ex:1,3,5,7,11,49...........) & under 0 (Ex: -1,-2,-3 ...etc)
if (num1<0){
    console.log("Tidak bisa input bilangan negatif")
}
else if((num1%2)!=0){
    console.log("Tidak bisa input bilangan ganjil")
}
else{
    result = Math.sqrt(num1);
    console.log(result)
}