////////// CONTÁCTANOS POPUP1 //////////////////

const btnContacto = document.getElementById("btn-contacto");
const popup = document.getElementById("popup-contacto");
const closeBtn = document.querySelector(".popup-close");

btnContacto.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  document.body.style.overflow = "";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    document.body.style.overflow = "";
  }
});

////////// CONTÁCTANOS POPUP2 //////////////////
const popup2 = document.getElementById("popup-colaboremos");
const closeBtn2 = document.querySelector(".popup-close-2");
const openPopup2Buttons = document.querySelectorAll(".open-popup2");

openPopup2Buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup2.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

closeBtn2.addEventListener("click", () => {
  popup2.style.display = "none";
  document.body.style.overflow = "";
});

popup2.addEventListener("click", (e) => {
  if (e.target === popup2) {
    popup2.style.display = "none";
    document.body.style.overflow = "";
  }
});
