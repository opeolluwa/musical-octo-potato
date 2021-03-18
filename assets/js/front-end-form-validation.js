function validateForm() {
  var x = document.getElementById('name').value;
  if (x == "") {
    document.getElementById('status').innerHTML = "Name cannot be empty";
    return false;
  }
  x = document.getElementById('email').value;
  if (x == "") {
         document.getElementById('status').innerHTML = "Email cannot be empty";
         return false;
     } else {
         var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if(!re.test(x)){
             document.getElementById('status').innerHTML = "Email format invalid";
             return false;
         }
     }
     x =  document.getElementById('subject').value;
     if (x == "") {
         document.getElementById('status').innerHTML = "Subject cannot be empty";
         return false;
     }
     x =  document.getElementById('message').value;
     if (x == "") {
         document.getElementById('status').innerHTML = "Message cannot be empty";
         return false;
     }
    document.getElementById('status').innerHTML = "Sending...";
    document.getElementById('contact-form').submit();

  }