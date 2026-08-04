alert("JavaScript funcionando!");
const button = document.getElementById("openLetter");
const intro = document.getElementById("intro");
const letter = document.getElementById("letter");

button.addEventListener("click", () => {

    intro.style.display = "none";

    letter.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
