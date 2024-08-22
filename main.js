let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActiveClass);
    li.addEventListener("click", manageImgs);
})
function removeActiveClass() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
    })
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    })
}