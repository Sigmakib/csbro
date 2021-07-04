var text = document.getElementById("bkash");
var text2 = document.getElementById("sobnum");
var copybtn = document.getElementById("copynumber1");
var copybtn2 = document.getElementById("copynumber2");
copybtn.onclick = function() {
    text.select();
    document.execCommand("copy");
    alert("Bikash number copied.");
}
copybtn2.onclick = function() {
        text2.select();
        document.execCommand("copy");
        alert("Nagad, Surecash, Rocket, Upay number copied.");
    }
    // Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyDReuaIy8n8oXtSSjglz3eIjTo4k0FxUJM",
    authDomain: "demolikebutton.firebaseapp.com",
    databaseURL: "https://demolikebutton-default-rtdb.firebaseio.com",
    projectId: "demolikebutton",
    storageBucket: "demolikebutton.appspot.com",
    messagingSenderId: "445881254839",
    appId: "1:445881254839:web:f33afdc98ad7a6195c1e32"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 50000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}
