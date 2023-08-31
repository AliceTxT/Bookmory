function setUsername(){
    document.getElementById("displayUsername").innerHTML = document.getElementById("inputUsername").value;
    localStorage.username = document.getElementById("inputUsername").value;
}   

function usernameDisplay(){
    document.getElementById("helloUsername").innerHTML = localStorage.username;
}
