let likedpost = document.querySelectorAll('.liked-post')

likedpost.forEach(element => {
    element.addEventListener('click', (e) => {
        element.classList.toggle('active')
        if (!element.classList.contains('active')) {
            e.target.parentElement.parentElement.children[1].innerHTML = parseInt(e.target.parentElement.parentElement.children[1].innerText) - 1
            e.target.parentElement.parentElement.children[1].style.color = "#7e7e7e"
            e.target.parentElement.parentElement.children[2].style.color = "#7e7e7e"
        } else{
            e.target.parentElement.parentElement.children[1].innerHTML = parseInt(e.target.parentElement.parentElement.children[1].innerText) + 1
            e.target.parentElement.parentElement.children[1].style.color = "#0A72F5"
            e.target.parentElement.parentElement.children[2].style.color = "#0A72F5"
        }
    })
});
