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

document.getElementById("close-btn").addEventListener("click", function() {
  document.getElementById("welcome-alert").style.display = "none";
});

