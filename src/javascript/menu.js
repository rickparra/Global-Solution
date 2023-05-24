var hamburguer = document.querySelector(".hamburguer");
hamburguer.onclick = function(){
  var navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

var header = document.querySelector('header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    header.classList.add('smaller');
  } else {
    header.classList.remove('smaller');
  }
});
