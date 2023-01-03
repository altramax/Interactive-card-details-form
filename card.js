"use strict"
const form = document.getElementById('card-inputfield');
const thankYou = document.getElementById('thank-you');
const backText = document.getElementById('back-card-text');
const cvcForm = document.getElementById('form-cvc');
const cardNumber = document.getElementById('card-number');
const cardName = document.getElementById('card-name');
const formCardName = document.getElementById('form-card-name');
const formCardNum = document.getElementById('form-card-number');
const expMonth = document.getElementById('exp-month');
const expYear = document.getElementById('exp-year');
const formExpMonth = document.getElementById('form-exp-month');
const formExpYear = document.getElementById('form-exp-year');
const nameAsterisk = document.querySelector('.nameAsterisk');
const numberAsterisk = document.querySelector('.numberAsterisk');
const expAsterisk = document.querySelector('.expasterisk');
const cvcAsterisk = document.querySelector('.cvcasterisk')
const nameLabel = document.querySelector(".namelabel");
const numberLabel = document.querySelector(".numberlabel");
const expLabel = document.querySelector(".explabel")
const cvcLabel = document.querySelector(".cvclabel")
const button = document.getElementById('check');
thankYou.style.display="none";
document.querySelector(".back").style.backgroundHeight="100%"


// FORM FIELD NAME 
formCardName.addEventListener('input', function (e) {
  // receive only alphabets
    e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, '');

    // change color of label and asterisk
    if(formCardName.value.length >= 5){
        nameAsterisk.style.color="green";
        nameLabel.style.color="green"
    }else{
      nameAsterisk.style.color="black";
      nameLabel.style.color="black" 
    }
});

// FORM FIELD NUMBER 
formCardNum.addEventListener('input', function (e) {
  // receive only number 
    e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();

    // change color of label and asterisk
    if(formCardNum.value.length === 19){
      numberAsterisk.style.color="green";
      numberLabel.style.color="green"
  }else{
       numberAsterisk.style.color="black";
       numberLabel.style.color="black" 
  }
  });

  // FORM FIELD EXPMONTH 
  // receive only number 
  formExpMonth.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\d]/g, '').trim();
    // expMonth.textContent = e.target.value;

    // change color of label and asterisk
    if(formExpMonth.value.length === 2){
      expAsterisk.style.color="green";
  }else{
       expAsterisk.style.color="black";
  }
  });

  // FORM FIELD EXPYEAR 
  // receive only number 
  formExpYear.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\d]/g, '').trim();

    // change color of label and asterisk
    if(formExpYear.value.length === 2){
      expLabel.style.color="green"
    }else{
        expLabel.style.color="black" 
    }
  });

  // FORM FIELD CVC 
  // receive only number 
  cvcForm.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\d]/g, '').trim();

     // change color of label and asterisk
     if(cvcForm.value.length === 3){
      cvcAsterisk.style.color="green";
      cvcLabel.style.color="green"
  }else{
       cvcAsterisk.style.color="black";
       cvcLabel.style.color="black" 
  }
  });

  // Button 
  button.addEventListener('click', function(){
  // CARD NAME 
   if(formCardName.value.length >= 5){
     // to capitalize first letter 
       function capital(names){
           names = formCardName.value.split(" ")
           let g = [];
            for(const name of names){
              g.push(name.replace(name[0], name[0].toUpperCase()));
            }
          return g  
       }
       let name = capital(formCardName.value);
       cardName.textContent = String(name).replaceAll(",", " ")
       }else{
        nameAsterisk.style.color="red";
        nameLabel.style.color="red";
       }

// CARD NUMBER
   if(formCardNum.value.length === 19){
    cardNumber.textContent = formCardNum.value;
   } else{
    numberAsterisk.style.color="red";
    numberLabel.style.color="red";
   }

//  EXP MONTH
if(formExpMonth.value.length === 2){
  expMonth.textContent = formExpMonth.value;
} else{
  expAsterisk.style.color="red";
}

//  EXP year
if(formExpYear.value.length === 2){
  expYear.textContent = formExpYear.value;
} else{
  expLabel.style.color="red";
}

// CVC
if(cvcForm.value.length === 3){
  backText.textContent = cvcForm.value;
} else{
  cvcAsterisk.style.color="red";
  cvcLabel.style.color="red";
}
  

if(cvcForm.value.length === 3 && formExpYear.value.length === 2 && formExpMonth.value.length === 2 && formCardNum.value.length === 19 && formCardName.value.length >= 5){
  form.style.display="none";
  thankYou.style.display="flex"
}
 })


//  THANK YOU BUTTON
 thankYou.addEventListener('click', function(){
  form.style.display="flex";
  thankYou.style.display="none"

  formCardName.value = "";
  cardName.textContent = "JANE APPLESEED";
  nameAsterisk.style.color="black";
  nameLabel.style.color="black" 

  formCardNum.value = "";
  cardNumber.textContent='0000 0000 0000 0000';
  numberAsterisk.style.color="black";
  numberLabel.style.color="black" 

  formExpMonth.value = "";
  expMonth.textContent = '00';
  expAsterisk.style.color="black";

  formExpYear.value = "";
  expYear.textContent = '00';
  expLabel.style.color="black" 

  cvcForm.value = "";
  backText.textContent = '000';
  cvcAsterisk.style.color="black";
  cvcLabel.style.color="black" 
 })
  









