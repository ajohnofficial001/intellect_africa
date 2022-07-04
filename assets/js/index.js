//PRELOADER
/*var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display("none");
});
var timer;
function showLoading() {
  timer = setTimeout(function () {
    loader.show(0);
  }, 4000);
} */

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

//Function to get value from form
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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// POP_UP before leaving Intellect Africa
var leave = document.getElementsByClassName("iLeave");

leave.onclick = function () {
  alert("You're about to leave Intellect Africa");
};

//GLIGHT BOX VIDEO
var lightbox = GLightbox();
lightbox.on("open", (target) => {
  console.log("lightbox opened");
});
var lightboxDescription = GLightbox({
  selector: ".glightbox2",
});
var lightboxVideo = GLightbox({
  selector: ".glightbox3",
});
lightboxVideo.on("slide_changed", ({ prev, current }) => {
  console.log("Prev slide", prev);
  console.log("Current slide", current);

  const { slideIndex, slideNode, slideConfig, player } = current;

  if (player) {
    if (!player.ready) {
      // If player is not ready
      player.on("ready", (event) => {
        // Do something when video is ready
      });
    }

    player.on("play", (event) => {
      console.log("Started play");
    });

    player.on("volumechange", (event) => {
      console.log("Volume change");
    });

    player.on("ended", (event) => {
      console.log("Video ended");
    });
  }
});

var lightboxInlineIframe = GLightbox({
  selector: ".glightbox4",
});
