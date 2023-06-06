// Selecionar todas as perguntas
const questions = document.querySelectorAll('.question');

// Adicionar evento de clique a cada pergunta
questions.forEach(question => {
  question.addEventListener('click', () => {
    // Selecionar a resposta correspondente à pergunta
    const answer = question.nextElementSibling;

    // Alternar a classe "show" para controlar a visibilidade da resposta
    answer.classList.toggle('show');
  });
});

//Conteudo formulario
var btnContact = documentquerySelector('.btn-contact');
var popupContainer = document.querySelector('.popup-container');
var btnClose = document.querySelector('.btn-close');

btnContact.addEventListener('click', function() {
  popupContainer.classList.add('show');
});

btnClose.addEventListener('click', function() {
  popupContainer.classList.remove('show');
});


function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Por favor, digite um nome valido";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10){
    text = "Por favor, digite um assunto valido";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(phone)) {
    text = "Por favor, digite apenas números no campo de telefone";
    error_message.innerHTML = text;
    return false;
  }
  if (phone.length !== 11) {
    text = "Por favor, digite um número de telefone com 11 dígitos";
    error_message.innerHTML = text;
    return false;
  }
  
  if (email.indexOf("@") == -1) {
    text = "Por favor, digite um email válido contendo o caractere '@'";
    error_message.innerHTML = text;
    return false;
  }
  if (email.length < 6) {
    text = "Por favor, digite um email válido com pelo menos 6 caracteres";
    error_message.innerHTML = text;
    return false;
  }
  
  if(message.length <= 40){
    text = "Por favor, insirta um texto com mais de 40 caracteres";
    error_message.innerHTML = text;
    return false;
  }
  alert("Formulario enviado com sucesso!");
  return true;
}