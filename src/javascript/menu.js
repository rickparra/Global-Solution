var hamburguer = document.querySelector(".hamburguer");
var header = document.querySelector('header');

hamburguer.onclick = function() {
  var navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var logoImg = document.querySelector('.logo-img');
  var logoImgSmall = document.querySelector('.logo-img-small');

  if (scrollPosition > 0) {
    header.classList.add('smaller');
    logoImg.style.display = 'none';
    logoImgSmall.style.display = 'block';
  } else {
    header.classList.remove('smaller');
    logoImg.style.display = 'block';
    logoImgSmall.style.display = 'none';
  }
});


const fixedButton = document.getElementById('fixed-button');
const body = document.body;

fixedButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
