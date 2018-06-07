(function() {
  var form = document.querySelector('form'),
      emailInput = document.querySelector('input[type=email]'),
      submitButton = document.querySelector('button[type=submit]'),
      handler = function() {
        submitButton.disabled = !emailInput.validity.valid;
      };
  emailInput.onkeydown = handler;
  emailInput.onpaste = handler;
  form.onsubmit = function(e) {
    e.preventDefault();
    if (emailInput.validity.valid) {
      form.submit();
    }
  };
})();
