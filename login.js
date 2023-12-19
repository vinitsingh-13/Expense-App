'use strict';
const loginBtn = document.querySelector('.login');
const loginName = document.querySelector('#username');
const monthBudget =document.querySelector('#monamount');
const closePopup = document.querySelector('.close-popup');

function login(e){
    e.preventDefault();
    if(loginName.value=== '' || monthBudget.value === '' ){
        closePopup.style.display = 'block';
        setTimeout(()=>{
          closePopup.style.display = 'none'
        },1000)
      
      }else{
        let items = {
            username: loginName.value,
            budget:monthBudget.value
        }
        loginName.value =''
        monthBudget.value =''
        let arr = JSON.stringify(items);
        localStorage.setItem('logindata',arr) 
        window.open('dashboard.html', '_self'); 
    }

}
loginBtn.addEventListener('click',login)