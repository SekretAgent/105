//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class = 'user_trick' src = tick.png></h4>";
message_with_tag = "<h4 class='message_h4'>"+ message + ""</h4>";
like_button<button class='btn btn warning'id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_width_tag = "<span class='glyphicon glyphicon-tumbs-up'>Like: "+ like + </span></button></h4>";

row = name_with_tag + message_with_tag + like_button + span_width_tag;
document.getElementById("output").innerHTML += row;

//End code
} });  }); }
getData();
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_room.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace ("kwitter_room.html");
}
function updateLike
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number (likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(messgae_id).update({
            like : updated_likes
      });
}