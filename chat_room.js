  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBT9AVZgOWeBaR3blnxYV7GLYvKXwdkMDU",
    authDomain: "lets-chat-53cfc.firebaseapp.com",
    databaseURL: "https://lets-chat-53cfc-default-rtdb.firebaseio.com",
    projectId: "lets-chat-53cfc",
    storageBucket: "lets-chat-53cfc.appspot.com",
    messagingSenderId: "239946102774",
    appId: "1:239946102774:web:2a3ea3d887ce3b53a8f9d7",
    measurementId: "G-LDKNMGS71F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome  " + user_name + " ! ";

function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "chat_page.html";
  } 

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;

console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

});});}
getData();

function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
  }

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}