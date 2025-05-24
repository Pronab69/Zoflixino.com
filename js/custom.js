const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
    
  });
};
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
    
  });
};
const faqItems = document.querySelectorAll('.faq-item');



    faqItems.forEach(item => {
      item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('active1');
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('active1');
       
       
       
        });
        
      });


    });