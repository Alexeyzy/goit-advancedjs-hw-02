import iziToast from 'izitoast';

const form = document.querySelector('.form');

const delay = 1000;

form.addEventListener('submit', event => {
  event.preventDefault();
  
  // const fulfilled = form.elements.email.value.trim();
  // const rejected = form.elements.message.value.trim();

// if(){

// }else{

// }

  iziToast.show({
    message: `✅ Fulfilled promise in ${delay}ms`,
    color: 'green', 
    position: 'topRight',  
  });
 
  iziToast.show({
    message: `❌ Rejected promise in ${delay}ms`,
    color: 'green', 
    position: 'topRight',  
  });
console.dir(form);
console.dir(event);
});
