
const toggle = document.querySelector('.toggle-btn');
const links = document.querySelector('.links');
const arrowDown = document.querySelector('.arrow-down')

toggle.addEventListener('click', ()=>{
  links.classList.toggle('show-links')
})

const contact = document.querySelector('.contact-btn');

contact.addEventListener('click', ()=> {
  alert('Bu tugma ham ishlaydi :D')
})