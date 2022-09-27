var firebaseConfig = {
      apiKey: "AIzaSyDHo6m9fnybtdLypuWwcWwTjXrwlpodeZg",
      authDomain: "letschat-fbaaf.firebaseapp.com",
      databaseURL: "https://letschat-fbaaf-default-rtdb.firebaseio.com",
      projectId: "letschat-fbaaf",
      storageBucket: "letschat-fbaaf.appspot.com",
      messagingSenderId: "654555561599",
      appId: "1:654555561599:web:d7d6b7d6d1c1915971c94a"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name"); 
    document.getElementById("Username").innerHTML="Welcome "+user_name+"!";

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding rooms"
      });
      localStorage.setItem("room_name ", room_name);
      window.location="chat_page.html";
    }

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
      console.log("room name "+Room_names);
      row="<div class='room name ' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      });});}
getData();

function redirectToRoom(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="chat_page.html";
}

function login_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}