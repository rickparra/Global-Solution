const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const loginForm = document.querySelector(".sign-in-form");
const usernameInput = document.querySelector(".sign-in-form input[type='text']");
const passwordInput = document.querySelector(".sign-in-form input[type='password']");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o envio do formulário

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === "Admin" && password === "123456") {
    window.location.href = "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021";
  } else {
    alert("Usuário ou senha inválidos");
  }
});
