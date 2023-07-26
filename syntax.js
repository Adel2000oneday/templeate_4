// Mobile menu
const hamburger =document.querySelector("#menu-icon")
const menu = document.querySelector("#menu")
const link = document.querySelector("#link")
const faIcon = document.querySelector(".fa-bars")

hamburger.addEventListener("click",function() {
    menu.classList.toggle("hidden")
    faIcon.classList.toggle("fa-xmark")
})