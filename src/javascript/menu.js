// responsividade menu
var hamburguer = document.querySelector(".hamburguer");
hamburguer.onclick = function(){
  var navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

//efeito menu diminuindo e aumentando
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

//ativação dark mode
const fixedButton = document.getElementById('fixed-button');
const body = document.body;

fixedButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkModeEnabled = body.classList.contains('dark-mode');
  setDarkModeCookie(isDarkModeEnabled);
});

// Função para definir o cookie com o estado do modo dark
function setDarkModeCookie(isDarkModeEnabled) {
  document.cookie = `darkMode=${isDarkModeEnabled}; path=/`;
}

// Função para ler o valor do cookie do modo dark
function getDarkModeCookie() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('darkMode=')) {
      return cookie.substring('darkMode='.length) === 'true';
    }
  }
  return false;
}

// Verificar o valor do cookie ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  const isDarkModeEnabled = getDarkModeCookie();
  if (isDarkModeEnabled) {
    body.classList.add('dark-mode');
  }
});
