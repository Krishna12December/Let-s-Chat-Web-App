const firebaseConfig = {
    apiKey: "AIzaSyDj4EgxjNJPmGvveffn9Xs9VVWdV_NY9pU",
    authDomain: "let-s-chat-web-app-d88ff.firebaseapp.com",
    projectId: "let-s-chat-web-app-d88ff",
    storageBucket: "let-s-chat-web-app-d88ff.appspot.com",
    messagingSenderId: "791991441965",
    appId: "1:791991441965:web:c2110ed76fcedd719636a4"
};

firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("userName");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



function addRoom(){

    var room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    })
       
}

function getData()
 {
    firebase.database().ref("/").on('value',function(snapshot)
    {
        document.getElementById("output").innerHTML ="";
        snapshot.forEach(function(childSnapshot) 
        {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;

            //End code

        });
    });
}
getData();

function redirect(name){
    localStorage.setItem("Room", name);
    window.location = "chat_roomName.html";
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("Room");
    window.location = "chat.html";
    }

