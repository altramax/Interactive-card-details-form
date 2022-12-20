"use strict"
const form = document.getElementById('card-inputfield');
const thankYou = document.getElementById('thank-you');
const backText = document.getElementById('back-card-text');
const cardNumber = document.getElementById('card-number');
const formCardNum = document.getElementById('form-card-number');
const cardName = document.getElementById('card-name');
const expDate = document.getElementById('exp-date');
const button = document.getElementById('check');


// document.getElementById(id).style.property = new style
// form.style.display = 'none';
// thankYou.style.display = "flex";

//    to stop the input at specific value 
    //  function stop(){
    //   if(formCardNum.value =)
    //  }

    let letters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " "];

   // To receive only number 
   formCardNum.addEventListener("keyup", function(e){  

       for(const num of formCardNum.value){
           if(!letters.includes(num)){
               formCardNum.value = formCardNum.value.replace(num, "")
               console.log(num);          
            }    
        }  
        function maxInputs(){
            if (formCardNum.value.length > formCardNum.maxLength){
                formCardNum.value = formCardNum.value.slice(0, formCardNum.maxLength); 
             }
         }


         

        //  if(formCardNum.value.length[e.value] === 5){
        //     //  function split(){
        //    console.log(   formCardNum.value.match(/.{1,4}/g));
           
        //     //  }
        //  }
         
        })

        formCardNum.addEventListener('input', function (e) {
            e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
            cardNumber.textContent = e.target.value;
          });






button.addEventListener("click", function(){

cardNumber.textContent = formCardNum.value;

    console.log(typeof formCardNum.value);




})  