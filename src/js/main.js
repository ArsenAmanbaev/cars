var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
        nextEl: ".work__arrow-right",
        prevEl: ".work__arrow-left",
    },
    loop: true,
    autoplay:{
        delay: 2000
    }
});

let btn = document.querySelector(".example__btn")
let overlay = document.querySelector(".overlay")

btn.addEventListener("click", function () {
    overlay.style.display = "flex"
})

overlay.addEventListener("click", function (e){
    if (e.target.className === "overlay"){
        overlay.style.display = "none"
    }
})

let btnBurger = document.querySelector(".burger-menu")
let listMenu = document.querySelector(".header__menu")
let HeaderRight = document.querySelector(".header__Right")

btnBurger.addEventListener("click", function (){
    listMenu.classList.toggle("header__menu_active")
    HeaderRight.classList.toggle("header__right_active")
})