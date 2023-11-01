room_name = localStorage.getItem("roomname")
user_name = localStorage.getItem("username")


console.log("roomname",room_name)
console.log("username",user_name)


function logout(){
    localStorage.removeItem("roomname")
    localStorage.removeItem("username")
    window.location( "index.html")
}

function send(){
    msg = document.getElementById("msg").value
    console.log("Message"+msg)
    firebase.database().ref(room_name).puch({
        
        like:0,
        message: msg,
        username:user_name
    })
    document.getElementById("msg").innerHTML =""
}