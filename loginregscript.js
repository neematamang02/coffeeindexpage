+ function($) {
  $('.palceholder').click(function() {
    $(this).siblings('input').focus();
  });

  $('.form-control').focus(function() {
    $(this).parent().addClass("focused");
  });

  $('.form-control').blur(function() {
    var $this = $(this);
    if ($this.val().length == 0)
      $(this).parent().removeClass("focused");
  });
  $('.form-control').blur();

  // validetion
  $.validator.setDefaults({
    errorElement: 'span',
    errorClass: 'validate-tooltip'
  });

  $("#formvalidate").validate({
    rules: {
      firstname: {
        required: true,
        minlength: 6
      },


      lastnamename: {
        required: true,
        minlength: 6
      },
      

      contactno: {
        required: true,
        minlength: 10
      },

      dob: {
        required: true,
      
      },
      userPassword: {
        required: true,
        minlength: 6
      },

      email: {
        required: true,
        minlength: 6
      },
      cpass: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      firstname: {
        required: "Please enter your firstname.",
        minlength: "Please provide valid firstname."
      },


      lastname: {
        required: "Please enter your lastname.",
        minlength: "Please provide valid lastname."
      },


      contactno: {
        required: "Please enter your number.",
        minlength: "Please provide valid number."
      },

      dob: {
        required: "Please select your Date of birth.",
        minlength: "Please provide valid date of birth."
      },

      userPassword: {
        required: "Enter your password to Login.",
        minlength: "Incorrect login or password."
      },

      email: {
        required:"Please enter your email",

      },

      cpass:{
        required:"Enter re-password to confirm",
        minlength: "Incorrect login or password."
      }
    }
  });

     // Validation before navigating to login page
     $('#signup').click(function(e) {
      e.preventDefault(); // Prevent the default form submission
      if ($("#formvalidate").valid()) {
        // All registration inputs are valid
        // You can navigate to the login page here
        window.location.href = "login.html";
        // Replace this with actual navigation code
      } else {
        alert("Please fill in all required fields.");
      }
    });

    // Validation before navigating to index page
    $('#login').click(function(e) {
      e.preventDefault(); // Prevent the default form submission
      if ($('.form-control[name="email"]').val().trim() === "" || $('.form-control[name="userPassword"]').val().trim() === "") {
        alert("Please fill in all required fields.");
      } else {
        // All login inputs are valid
        // You can navigate to the index page here
        window.location.href = "index.html";
        // Replace this with actual navigation code
      }
    });
  




}(jQuery);