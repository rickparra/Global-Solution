// Clonar elemento e adicioná-lo ao DOM
const logosSlide = document.querySelector(".logos-slide");
const logosContainer = document.querySelector(".logos");
const copy = logosSlide.cloneNode(true);
logosContainer.appendChild(copy);

// Atualizar data e hora
function updateDateTime() {
  const datetimeElement = document.getElementById('datetime');
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Os meses em JavaScript são baseados em zero
  const year = currentDate.getFullYear();

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  datetimeElement.innerHTML = `${formattedDate} ${formattedTime}`;
}

// Atualizar a data e hora a cada segundo
setInterval(updateDateTime, 1000);

// Boas-vindas
const popupScreen = document.querySelector(".popup-screen");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("load", () => {
  const websiteCookie = getCookie("WebsiteName");
  if (websiteCookie) {
    popupScreen.style.display = "none";
  } else {
    setTimeout(() => {
      popupScreen.classList.add("active");
    }, 2000);
  }
});

closeBtn.addEventListener("click", () => {
  setCookie("WebsiteName", "testWebsite", 5 * 60); // Definindo o cookie por 5 minutos (5 * 60 segundos)
  popupScreen.classList.remove("active");
});

// Função para obter o valor do cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return "";
}

// Função para definir o cookie
function setCookie(name, value, seconds) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + seconds * 1000);
  const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookieValue;
}


// Carrossel do requisito
let counter = 1;
setInterval(function() {
  document.getElementById(`radio${counter}`).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
