const menu=document.querySelector('.menu');
if(menu){menu.addEventListener('click',()=>document.querySelector('.mobile-nav')?.classList.toggle('open'));}
const header=document.querySelector('.top');
const setHeader=()=>header?.classList.toggle('scrolled',window.scrollY>24);setHeader();window.addEventListener('scroll',setHeader,{passive:true});
const form=document.querySelector('#inquiry-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();document.querySelector('#form-msg').textContent='Demo only — connect this form to your CRM or email service before launch.';});}
const filterButtons=document.querySelectorAll('[data-filter]');
const cards=document.querySelectorAll('#portfolio-grid [data-category]');
filterButtons.forEach(btn=>btn.addEventListener('click',()=>{filterButtons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;cards.forEach(card=>card.dataset.hidden=(filter!=='all'&&card.dataset.category!==filter)?'true':'false');}));
