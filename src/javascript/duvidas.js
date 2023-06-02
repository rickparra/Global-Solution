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
var btnContact = document.querySelector('.btn-contact');
var popupContainer = document.querySelector('.popup-container');
var btnClose = document.querySelector('.btn-close');

btnContact.addEventListener('click', function() {
  popupContainer.classList.add('show');
});

btnClose.addEventListener('click', function() {
  popupContainer.classList.remove('show');
});

//

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
  if(isNaN(phone) || phone.length != 11){
    text = "Por favor, digite um número de telefone valido";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Por favor, digite um email valido";
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