const listnav = document.querySelector('.list-nav');
const contactNav = document.querySelector('.contact-nav');
const listContainer = document.querySelector('.container');
const addNav = document.querySelector('.add-nav');
const form = document.querySelector('.form-cover');
const contact = document.querySelector('.contact-container');

listnav.addEventListener('click', () => {
  listContainer.classList.add('active');
  form.classList.remove('active');
  contact.classList.remove('active');
});

addNav.addEventListener('click', () => {
  form.classList.add('active');
  listContainer.classList.remove('active');
  contact.classList.remove('active');
});
contactNav.addEventListener('click', () => {
  contact.classList.add('active');
  listContainer.classList.remove('active');
  form.classList.remove('active');
});