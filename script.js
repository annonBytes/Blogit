const btn_close = document.getElementById('close');
const btn_open =  document.getElementById('open');
const container = document.querySelector('.container');

btn_open.addEventListener('click', () => {
   container.classList.add('show-nav');
});

btn_close.addEventListener('click', ()=> {
    container.classList.remove('show-nav');
})