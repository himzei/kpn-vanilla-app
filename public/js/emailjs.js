function sendEmail(event)  {
  event.preventDefault()
  emailjs.init('user_TvrxgIwV6EvpJQJjDDI85');
  let templateParams  = {
      name : document.getElementById('username').value,
      phone : document.getElementById('useremail').value,
      email : document.getElementById('userphone').value,
      content : document.getElementById('usermemo').value,
  }
  console.log(templateParams);
  emailjs.send('service_x1dvzxv', 'template_xfrbl5j', templateParams).then(function(response){
      console.log('Success!', response.status, response.text);
      
  }, function(error){
      console.log('Failed...', error);
      
  })
}

const submitBtn = document.querySelector("#login-btn");
submitBtn.addEventListener("click", sendEmail);