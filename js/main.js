function validateEmail(){
    var name =parseFloat( document.getElementById("name").value);
    var email =parseFloat( document.getElementById("email").value);

    if(name===""||email===""){
        alert("please enter valied information")
    }
    if(email.indexOf("@")=== -1 &&email.indexOf(".")===-1){
        alert("please enter valid email")
    }
}