let newPost = document.querySelector('.new-post');
let lenghtNewPost = document.querySelector('.lenght');

newPost.addEventListener('input', () => {
    lenghtNewPost.innerHTML = 500 - parseInt(((newPost.value.split('')).length))
    if (parseInt(lenghtNewPost.innerHTML) <= 100){
        lenghtNewPost.style.background = 'red'
    } else if (parseInt(lenghtNewPost.innerHTML) <= 300){
        lenghtNewPost.style.background = 'orange'
    } else{
        lenghtNewPost.style.background = '#0A72F5'
    }
})