"use strict"
const form = document.getElementById('card-inputfield');
const thankYou = document.getElementById('thank-you');
const backText = document.getElementById('back-card-text');
const backForm = document.getElementById('form-cvc');
const cardNumber = document.getElementById('card-number');
const cardName = document.getElementById('card-name');
const formCardName = document.getElementById('form-card-name');
const formCardNum = document.getElementById('form-card-number');
const expMonth = document.getElementById('exp-month');
const expYear = document.getElementById('exp-year');
const formExpMonth = document.getElementById('form-exp-month');
const formExpYear = document.getElementById('form-exp-year');

const button = document.getElementById('check');

formCardName.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, '').trim();
    console.log(e.target.value);
    cardName.textContent = e.target.value;
});

formCardNum.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();
    console.log(e.target.value);
    cardNumber.textContent = e.target.value;
  });

  formExpMonth.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\d]/g, '').trim();
    console.log(e.target.value);
    expMonth.textContent = e.target.value;
  });

  formExpYear.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\d]/g, '').trim();
    console.log(e.target.value);
    expYear.textContent = e.target.value;
  });

  backForm.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\d]/g, '').trim();
    console.log(e.target.value);
    backText.textContent = e.target.value;
  });
  






