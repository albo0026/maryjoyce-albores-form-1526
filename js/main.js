// declaring variables
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let fn = document.getElementById("fullname");
let em = document.getElementById("email");
let msg = document.getElementById("message");
let btn = document.getElementById("submit-btn");

// function with 2 empty buckets (data/errors)
function formValidate() {
   let data = {};
   let errors = [];

   // validate full-name field
   if (fn.value.length > 0) {
      data.fullname = fn.value;
   } else {
      errors.push('Please enter your name.');
   }

   // validate email field
   if (em.value) {
      if (pattern.test(em.value)) {
         data.email = em.value;
      } else {
         errors.push('Invalid email.');
      }
   } else {
      errors.push('Please enter your email.')
   }

   // validate message field
   if (msg.value.length > 0) {
      data.message = msg.value;
   } else {
      errors.push('Please enter your message.');
   }

   // feedback / errors
   if (errors.length === 0) {
      console.log(data);
   } else {
      console.log(errors);
   }
}
    
// registering click event
btn.addEventListener("click", formValidate);