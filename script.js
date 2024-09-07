// Function to handle the form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Display an alert
    alert('Thank you for contacting us! Your message has been sent.');

});


// Modal 1
var modal1 = document.getElementById("proj1");
var btn1 = document.getElementById("modal1");
var span1 = document.getElementsByClassName("close1")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

// Modal 2
var modal2 = document.getElementById("proj2");
var btn2 = document.getElementById("modal2");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

// Modal 3
var modal3 = document.getElementById("proj3");
var btn3 = document.getElementById("modal3");
var span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}


function colorChange(color){
  document.body.style.background = color;
}