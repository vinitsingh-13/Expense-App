"use strict";
const addNew = document.querySelector(".add-mon");
const addExpense = document.querySelector(".add-expense");
const expenseName = document.querySelector("#name");
const expensePrice = document.querySelector("#expamount");
const dashName = document.querySelector(".dash-name");
const dashPrice = document.querySelector(".dash-price");
const resetBtn = document.querySelector(".reset");
const expPara = document.querySelector("#exp-para");
const closePopup = document.querySelector('.close-popup');
const hamBurger = document.querySelector('.hamburger-img')
const savingPara = document.querySelector('.saving-para')
const profileName =document.querySelector('.profile-span');
const budget = document.querySelector('.amount-para')
const home = document.querySelector('#home');
const bills = document.querySelector('#bill')
const help = document.querySelector('#help')


let bud = JSON.parse( localStorage.getItem('logindata'));

let logindata = JSON.parse(localStorage.getItem('logindata'));
profileName.textContent = logindata.username;
budget.textContent = logindata.budget

let item = localStorage.getItem("expData");
addExpense.addEventListener('click',setITemLocal);
function setITemLocal(e){
  e.preventDefault();
  if(expenseName.value=== '' || expensePrice.value === '' ){
    closePopup.style.display = 'block';
    setTimeout(()=>{
      closePopup.style.display = 'none'
    },1000)
  
  }else{
    let items = JSON.parse(localStorage.getItem('expData'))||[]
    const reArr = [...items];
      const expObj = {
        expensename:expenseName.value,
        expenseprice:expensePrice.value
      };
      let val = expObj.expenseprice;
      localStorage.setItem('val',JSON.stringify(val))
      
      reArr.push(expObj);
      let arr = JSON.stringify(reArr);
      localStorage.setItem('expData',arr);
      expenseName.value = '';
      expensePrice.value = ''
    
    renderElement()
   
  }
 
}

// Render the element in the page;
function renderElement(){
  let div1 = document.createElement('div')
  let div2 = document.createElement('div');
  let item = JSON.parse(localStorage.getItem('expData'));
 
 
   item.map(el=>{
    div1.textContent = el.expensename;
    div2.textContent = el.expenseprice;
   });
   dashName.appendChild(div1);
   dashPrice.appendChild(div2);
  

   let ren = item.map((el)=>Number(el.expenseprice));
   expPara.textContent = ren.reduce((acc,cur)=>acc+cur);

   let sav = JSON.parse(localStorage.getItem('val'));
      if(savingPara.textContent ===''){
        savingPara.textContent = budget.textContent- sav;
      }else{
        savingPara.textContent = savingPara.textContent- sav
      }

};

// reset every text;
resetBtn.addEventListener('click',function(){
  localStorage.clear()
  window.open('index.html','_self');
  expPara.textContent = '';
  dashName.textContent ='';
  dashPrice.textContent = '';
  
});

// render the components when there is nothing 

function renderonReload(){
  let items = JSON.parse(localStorage.getItem('expData'));
   let ren = items.map((el)=>Number(el.expenseprice));
   expPara.textContent = ren.reduce((acc,cur)=>acc+cur);
   item = JSON.parse(localStorage.getItem('expData'));
   item.map(el=>{
     let div1 = document.createElement('div')
     let div2 = document.createElement('div')
    div1.textContent = el.expensename;
    div2.textContent = el.expenseprice;
    dashName.appendChild(div1);
    dashPrice.appendChild(div2);
   });

   savingPara.textContent = bud.budget - expPara.textContent
 
  
};

item!==null? renderonReload():savingPara.textContent = bud.budget 

hamBurger.addEventListener('click',hamBurgermenu);
function hamBurgermenu(){
  const dashboard = document.querySelector('.dashboard')
  if(dashboard.style.display ==="block"){
    dashboard.style.display = "none";
  }else{
    dashboard.style.display = 'block'  
  }
  let imgsrc = hamBurger.getAttribute('src');
  if(imgsrc ==='./images/menu.png'){
    hamBurger.setAttribute('src','./images/red-cross.png')
    
  }else{
    hamBurger.setAttribute('src','./images/menu.png')

  }
}

help.addEventListener('click', renderHelp);
function renderHelp(){
  window.open('help.html','_self')
}
bills.addEventListener('click',payments);
function payments(){
  window.open('payments.html','_self')
}