
var firebaseConfig = {
  
        apiKey: "AIzaSyCFj-WALyhL3_hLmmFiGOgd35D3kunwync",
        authDomain: "dg-mail.firebaseapp.com",
        projectId: "dg-mail",
        storageBucket: "dg-mail.appspot.com",
        messagingSenderId: "739818497305",
        appId: "1:739818497305:web:6e945c4fb5a40765c75188"
    
  };
  
 
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("user_name") ;
document.getElementById("username").innerHTML = "welcome  "+ username + "!" ;

function addRoom(){
roomname = document.getElementById("roomname").value;
firebase.database().ref("/").child(roomname).update({
purpose:"adding a room name"

});
localStorage.setItem("roomname", roomname)
window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
console.log(name)
localStorage.setItem("roomname", name)
window.location = "kwitter_page.html"
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("roomname");
    window.location = "index.html";
    }