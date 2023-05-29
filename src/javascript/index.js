var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);

function updateDateTime() {
  var datetimeElement = document.getElementById('datetime');
  var currentDate = new Date();
  
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Os meses em JavaScript são baseados em zero
  var year = currentDate.getFullYear();
  
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  
  var formattedDate = day + '/' + month + '/' + year;
  var formattedTime = hours + ':' + minutes + ':' + seconds;
  
  datetimeElement.innerHTML = formattedDate + ' ' + formattedTime;
}

// Atualize a data e hora a cada segundo
setInterval(updateDateTime, 1000);


// Boas vindas
const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreen.classList.add("active");
  }, 2000); 
});

closeBtn.addEventListener("click", () => {
  popupScreen.classList.remove("active"); 
  document.cookie = "WebsiteName=testWebsite; max-age=" + 1 * 1 * 1; 
});

const WebsiteCookie = document.cookie.indexOf("WebsiteName=");

if(WebsiteCookie != -1){
  popupScreen.style.display = "none"; 
}
else{
  popupScreen.style.display = "flex"; 
}

// Carrosel
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);
