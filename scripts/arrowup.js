window.addEventListener('scroll', (e)=>{
    let arrow = document.querySelector('.arrow');
    arrow.classList.toggle('arrow-hidde', window.scrollY > (screen.height) / 2);
})
