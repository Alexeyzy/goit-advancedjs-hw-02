import iziToast from 'izitoast';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const delay = form.elements.delay.value;
  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      if(form.elements.state.value === "fulfilled"){
        resolve(iziToast.success({ 
          message: `Fulfilled promise in ${delay}ms`,
          color: 'green', 
          position: 'topRight',  
        }));
      }else{
        reject(iziToast.error({
          message: `Rejected promise in ${delay}ms`,
          color: 'green', 
          position: 'topRight',  
        }));
      }
    }, delay)
  })
});


