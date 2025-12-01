const form = document.querySelector("form");
const income = document.querySelector("#income");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let tax = 0;
    const currIncome = parseInt(income.value);
    if(currIncome<=1200000){
        tax = 0;
    }else if(currIncome<=1600000){
        tax = (currIncome-1200000)*0.15;
    }else if(currIncome<=2000000){
        tax = (currIncome-1600000)*0.20+60000;
    }else if(currIncome<=2400000){
       tax = (currIncome-2000000)*0.25+60000+80000;
    }else{
        tax = (currIncome-2400000)*0.30+60000+80000+100000;
    }
    
const totalTax = document.querySelector("#totalTax");
totalTax.textContent = `TotalTax = ${tax}`

});