user_name = localStorage.getItem("user_name")
document.getElementById("userName").innerHTML = "Welcome"+user_name+"!"

function redirect(roomName){
      
    window.loaction=kwitterPage.html
}

function addroom(){
    room_name = localStorage.getItem("room_name").value
    localStorage.setItem("roomname",room_name)
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    window.location = "chat_page.html"
}


function getData(){firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childsnapshot) )})}


function redirecttoroom(name){
console.log(name)
localStorage.setItem("roomname",name)
window.loaction = "chat_page.html"
}

function logout(){
    localStorage.removeItem("roomname")
    localStorage.removeItem("username")
    window.location( "index.html")
}