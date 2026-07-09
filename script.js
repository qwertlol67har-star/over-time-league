// =========================
// Navigation
// =========================

const buttons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Убираем активную кнопку
        buttons.forEach(btn => btn.classList.remove("active"));

        // Добавляем активную кнопку
        button.classList.add("active");

        // Прячем все страницы
        pages.forEach(page => {
            page.classList.remove("active");
        });

        // Показываем нужную страницу
        const page = document.getElementById(button.dataset.page);

        if(page){
            page.classList.add("active");
        }

        // Прокрутка вверх
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

});

// =========================
// Hero Button
// =========================

const heroButton = document.querySelector(".hero button");

if(heroButton){

    heroButton.addEventListener("click",()=>{

        document.querySelector('[data-page="news"]').click();

    });

}

// =========================
// Hover Animation
// =========================

const cards = document.querySelectorAll(
".card, .player-card, .award, .news-card, .match-card"
);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// =========================
// Fade Animation
// =========================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

document.body.style.opacity="0";
document.body.style.transition=".5s";
// ===== Popup Awards =====

const awardButtons = document.querySelectorAll(".award-btn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

awardButtons.forEach(button => {

    button.addEventListener("click", () => {

        popup.style.display = "flex";

    });

});

closePopup.addEventListener("click", () => {

    popup.style.display = "none";

});

popup.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.style.display = "none";

    }

});