

let submit = document.querySelector(".submitBtn")
let addition = document.querySelector(".addition")
let multyplication = document.querySelector(".multyplication")
let division = document.querySelector(".division")
let substraction = document.querySelector(".substraction")
let h1 = document.querySelector("h1")

    // let addValue = Number(addition.value)
    // let subValue = Number(substraction.value)
    // let mulValue = Number(multyplication.value)
    // let diviValue = Number(division.value)
   

submit.addEventListener("click",function(){
    console.log(addition.value)
    
    let outputVal=100;

if (addition.value) {
    outputVal = outputVal+Number(addition.value);
    h1.innerHTML = outputVal;
  
}
if (substraction.value) {
    outputVal = outputVal-Number(substraction.value);
    h1.innerHTML = outputVal;
    
}
if (multyplication.value) {
    outputVal = outputVal*Number(multyplication.value);
    h1.innerHTML = outputVal;
    
}
if (division.value) {
    outputVal = outputVal/Number(division.value);
    h1.innerHTML = outputVal;
}
})