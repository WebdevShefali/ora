function changeBtn(x) {
    x.classList.toggle("change");
  }
// scroll to top
  let scrollBtn =   document.querySelector(".topBtn")  ;
  window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
scrollBtn.style.display = "block";
} else {
scrollBtn.style.display = "none";
}
}
scrollBtn.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}