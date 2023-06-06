// Responsividade do menu
var hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", function() {
  var navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
});

// Efeito de diminuir e aumentar o menu
var header = document.querySelector('header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    header.classList.add('smaller');
  } else {
    header.classList.remove('smaller');
  }
});

// Ativação do modo escuro
const fixedButton = document.getElementById('fixed-button');
const body = document.body;

fixedButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkModeEnabled = body.classList.contains('dark-mode');
  setDarkModeCookie(isDarkModeEnabled);
});

// Função para definir o cookie do modo escuro
function setDarkModeCookie(isDarkModeEnabled) {
  document.cookie = `darkMode=${isDarkModeEnabled}; path=/`;
}

// Função para ler o valor do cookie do modo escuro
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
// Verificar o valor do cookie ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  const isDarkModeEnabled = getDarkModeCookie();
  if (isDarkModeEnabled) {
    body.classList.add('dark-mode');
  }
});
//Chatbot
document.addEventListener('DOMContentLoaded', function() {
  var chatbotIcon = document.getElementById('chatbot-icon');
  var chatbotFrame = document.getElementById('chatbot-frame');

  chatbotIcon.addEventListener('click', function() {
    if (chatbotFrame.style.display === 'none') {
      chatbotFrame.style.display = 'block';
    } else {
      chatbotFrame.style.display = 'block';
    }
  });
});
