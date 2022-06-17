const firebaseConfig = {
    apiKey: "AIzaSyDj4EgxjNJPmGvveffn9Xs9VVWdV_NY9pU",
    authDomain: "let-s-chat-web-app-d88ff.firebaseapp.com",
    projectId: "let-s-chat-web-app-d88ff",
    storageBucket: "let-s-chat-web-app-d88ff.appspot.com",
    messagingSenderId: "791991441965",
    appId: "1:791991441965:web:c2110ed76fcedd719636a4"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("Room");

function send(){

    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
};


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    //start code



    //End code
} 
});  
}); 
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("Room");
    window.location = "chat.html";
}