const All = document.querySelectorAll(".txt");
All.forEach((el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("diff");
    })
})