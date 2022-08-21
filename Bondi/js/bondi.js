// Shuflle class Active move
let shuflleLis = document.querySelectorAll(".shuffle li");
let removeClasses = function () {
  shuflleLis.forEach(function (li) {
    li.classList.remove("active");
    li.classList.remove("rounded-pill");
  });
};
shuflleLis.forEach(function (li) {
  li.addEventListener("click", removeClasses);
  li.addEventListener("click", function (e) {
    e.target.classList.add("active");
    e.target.classList.add("rounded-pill");
  });
});
// Suflle Imges
let imgs = document.querySelectorAll(".our-work .box");
shuflleLis.forEach(function (li) {
  li.addEventListener("click", function (e) {
    if (e.target.classList.contains("All")) {
      imgs.forEach(function (img) {
        img.parentElement.style.display = "block";
      });
    } else {
      let mainClass = e.target.classList[0];
      imgs.forEach(function (img) {
        if (img.dataset.work === mainClass) {
          img.parentElement.style.display = "block";
        } else {
          img.parentElement.style.display = "none";
        }
      });
    }
  });
});
// scroll to top
let scrollTop = document.querySelector(".up");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 800) {
    scrollTop.style.right = "30px";
  } else {
    scrollTop.style.right = "-30px";
  }
});
scrollTop.onclick = function () {
  window.scrollTo({
    top: 0,
    scrollbehaviour: smooth,
  });
};
// create search input
let searchIcon = document.querySelector(".search");
let searchInput = document.querySelector(".navbar input[type=search]");
searchIcon.onclick = function () {
  searchInput.classList.toggle("active");
};
