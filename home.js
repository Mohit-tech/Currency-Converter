"use strict";
const form=document.querySelector("form");
const button=document.querySelector(".btn");
document.getElementById("hide").style.visibility="hidden";
const calculateAmount =(rate1,rate2,amount)=>{
   let sum=amount*rate2;
   console.log(rate1,rate2,amount);
   return `${sum.toFixed(2)}`;
}
const displayAmount=event=>{
   event.preventDefault();
   let sum=Number(document.getElementById("amount").value);
   let exchangeRate1= document.getElementById("rate").value;
   let exchangeRate2= document.getElementById("to").value;
let currency=document.getElementById("currency");
let total=document.getElementById("total");
let code=document.getElementById("code");
if(isNaN(sum)){
   document.getElementById("hide").style.visibility="hidden";
   currency.textContent ="";
   total.textContent="Input not valid";
   code.textContent="";
   return;
}
else{
   document.getElementById("hide").style.visibility="visible";
   let rate1,rate2;
   switch(exchangeRate1){
      case "MXN":
         rate1=18.8495;
         break;
      case "USD":
         rate1=0.052923;
         break;
      case "HTG":
         rate1=69.8086;
         break;
      case "CUP":
         rate1=1.0;  
         break; 
      case "CAD":
         rate1=1.302;
         break;
      case "EUR":
         rate1=0.8649;
         break;
      case "XBT":
         rate1=0.000161245;
         break;
      case "GBP":
         rate1=0.76015;
         break;
      case "XOF":
         rate1=567.206;
         break;
         default:return;
   }
   switch(exchangeRate2){
      case "MXN":
         rate2=18.8495;
         break;
      case "USD":
         rate2=0.052923;
         break;
      case "HTG":
         rate2=69.8086;
         break;
      case "CUP":
         rate2=1.0;  
         break; 
      case "CAD":
         rate2=1.302;
         break;
      case "EUR":
         rate2=0.8649;
         break;
      case "XBT":
         rate2=0.000161245;
         break;
      case "GBP":
         rate2=0.76015;
         break;
      case "XOF":
         rate2=567.206;
         break;
         default:return;
   }
   console.log(calculateAmount(rate1,rate2,sum));
currency.textContent="$";
total.textContent=calculateAmount(rate1,rate2,sum);
calculateAmount.textContent=exchangeRate2;
}
};
form.addEventListener("submit",displayAmount);
button.addEventListener("click",displayAmount);
