'use strict';
const profileName =document.querySelector('.profile-span');
const home = document.querySelector('#home');
const signout = document.querySelector('.btn');
const hamBurger = document.querySelector('.hamburger-img')
const bills = document.querySelector('#bill')
home.addEventListener('click', renderHome);
function renderHome(){
    window.open('dashboard.html','_self')
}
let logindata = JSON.parse(localStorage.getItem('logindata'));
profileName.textContent = logindata.username;

signout.addEventListener('click',backLoginPage);
function backLoginPage(){
    localStorage.clear()
    window.open('index.html','_self');
    expPara.textContent = '';
    dashName.textContent ='';
    dashPrice.textContent = '';
}

hamBurger.addEventListener('click',hamBurgermenu);
const dashboard = document.querySelector('.dashboard')
let imgsrc = hamBurger.getAttribute('src');
function hamBurgermenu(){
  if(dashboard.style.display ==="block"){
    dashboard.style.display = "none";
    hamBurger.setAttribute('src','./images/menu.png')
  }else{
    dashboard.style.display = 'block'  
    hamBurger.setAttribute('src','./images/red-cross.png')
  }
  
}
bills.addEventListener('click',payments);
function payments(){
  window.open('payments.html','_self')
}