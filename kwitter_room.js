
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA4O_ukEbcXK7I3OGpJAGe72r_MiiJD5a0",
      authDomain: "class-test-1d9b7.firebaseapp.com",
      databaseURL: "https://class-test-1d9b7-default-rtdb.firebaseio.com",
      projectId: "class-test-1d9b7",
      storageBucket: "class-test-1d9b7.appspot.com",
      messagingSenderId: "331954878889",
      appId: "1:331954878889:web:23f66dd6743bff1e286cb8"
    };
    
    firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function send ()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
      });

      document.getElementById("msg").value = "";
}