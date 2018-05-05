/* global firebase */

// Initialize Firebase
// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)
var config = {
    apiKey: "AIzaSyDTTrn32_BHM7rQWJ5-2HlDn_69_mu4sJg",
    authDomain: "time-8c786.firebaseapp.com",
    databaseURL: "https://time-8c786.firebaseio.com",
    projectId: "time-8c786",
    storageBucket: "time-8c786.appspot.com",
    messagingSenderId: "793969302136"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();
// Initial Values
var name = "";
var role = "";
var date = 0;
var rate = 0;

// Capture Button Click
$("#add-user").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  train = $("#train-input").val().trim();
  destination = $("#destination-input").val().trim();
  firstTrain = $("#firstT-input").val();
  nextT = $("#time-input").val();
    console.log(train);
    console.log(destination);
    console.log(firstTrain);
    console.log(nextT);
  // Code for handling the push
  database.ref().push({
    train: train,
    destination: destination,
    firstTrain: firstTrain,
    nextT: nextT,
  });
})