let newPost = document.querySelector('.new-post');
let lenghtNewPost = document.querySelector('.lenght');

newPost.addEventListener('input', () => {
    lenghtNewPost.innerHTML = 500 - parseInt(((newPost.value.split('')).length))
})