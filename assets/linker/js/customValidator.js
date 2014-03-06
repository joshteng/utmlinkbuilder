$(document).ready(function(){
  $('#form-signup').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      },
      confirmation: {
        minlength: 6,
        equalTo: "#password"
      }
    },
    success: function(element) {
      element
      .text('OK!').addClass('valid')
    }
  });
});