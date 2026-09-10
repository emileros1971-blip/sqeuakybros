const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));
document.querySelectorAll('details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open){document.querySelectorAll('details[open]').forEach(other=>{if(other!==item)other.open=false;});}}));
