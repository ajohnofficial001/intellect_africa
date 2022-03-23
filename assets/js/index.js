//PRELOADER
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
var timer;
function showLoading() {
  timer = setTimeout(function () {
    loader.show(0);
  }, 4000);
}

//Sticky Navbar on scroll
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//Form with firebase

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqHM2gCY96SANvFCQ8RNjHD1QHiBVGXkI",
  authDomain: "intellect-africa.firebaseapp.com",
  databaseURL: "https://intellect-africa-default-rtdb.firebaseio.com",
  projectId: "intellect-africa",
  storageBucket: "intellect-africa.appspot.com",
  messagingSenderId: "13619396083",
  appId: "1:13619396083:web:eeec0fc5f54c8920ab2686",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Refrence Messages Collection
var messageRef = firebase.database().ref("messages");

//Listen for form submit
document.getElementById("myform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //Get values
  var inputFirstName = getInputval("inputFirstName");
  var inputLastName = getInputval("inputLastName");
  var inputEmail = getInputval("inputEmail");
  var subject = getInputval("subject");
  var message = getInputval("message");

  //Save message
  saveMessage(inputFirstName, inputLastName, inputEmail, subject, message);

  //Show alert
  document.querySelector(".alertForm").style.display = "block";

  //Hide alert after three seconds
  setTimeout(function () {
    document.querySelector(".alertForm").style.display = "none";
  }, 3000);

  //Clear Form
  document.getElementById("myform").reset();
}

//Function to get form from value
function getInputval(id) {
  return document.getElementById(id).value;
}

//Save message to Firebase
function saveMessage(
  inputFirstName,
  inputLastName,
  inputEmail,
  subject,
  message
) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    inputFirstName: inputFirstName,
    inputLastName: inputLastName,
    inputEmail: inputEmail,
    subject: subject,
    message: message,
  });
}
