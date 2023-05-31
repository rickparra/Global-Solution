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


var btnContact = document.querySelector('.btn-contact');
var popupContainer = document.querySelector('.popup-container');
var btnClose = document.querySelector('.btn-close');

btnContact.addEventListener('click', function() {
  popupContainer.classList.add('show');
});

btnClose.addEventListener('click', function() {
  popupContainer.classList.remove('show');
});

var contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Exibir mensagem de confirmação
    alert('Formulário enviado com sucesso!');
    
    // Resetar o formulário
    contactForm.reset();
    
    // Fechar o pop-up
    popupContainer.classList.remove('show');
  });
} else {
  console.error('Elemento #contact-form não encontrado no DOM.');
}
