
var userData = JSON.parse(localStorage.getItem("userData")) || []

document.querySelector("form").addEventListener("submit", function(){
    event.preventDefault()
   
        email = document.querySelector("#email").value,
        password = document.querySelector("#password").value,
      
     userData.filter(function(ele){
        if(ele.email===email && ele.password ===password){
            alert("Login Successful")
            window.location.href ="index.html"
        }
        else if(ele.email!=email && ele.password!=password){
            document.getElementById('error_email').style.display='block';
            document.getElementById('error_password').style.display='block';
        }
        else if(ele.email!=email){
            document.getElementById('error_email').style.display='block';
        }
        else if(ele.password!=password){
            document.getElementById('error_password').style.display='block';
        }
     })
     
})
