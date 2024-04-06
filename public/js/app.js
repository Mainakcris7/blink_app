let menus = document.getElementsByClassName("menu")
let likes = document.getElementsByClassName("like")

for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener("click", () => {
        menus[i].classList.toggle("active")
    })
}

for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click", () => {
        likes[i].classList.toggle("liked")
        if (likes[i].classList.contains("liked"))
            likes[i].innerHTML = `<i class="fa-solid fa-heart"></i>`
        else
            likes[i].innerHTML = `<i class="fa-regular fa-heart"></i>`
    })
}
