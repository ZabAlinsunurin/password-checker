// script.js

document.addEventListener('DOMContentLoaded', function () {
  var pass = document.getElementById("password");
  var strength = document.getElementById("strength");

  pass.addEventListener('input', function () {
      if (pass.value.length > 0) {
          strength.style.display = "block";
      } else {
          strength.style.display = "none";
      }
      if (pass.value.length < 4) {
          strength.innerHTML = "Weak";
          pass.style.borderColor = "#ff5925";
          strength.style.color = "red";
      } else if (pass.value.length >= 4 && pass.value.length <= 8) {
          strength.innerHTML = "Medium";
          pass.style.borderColor = "yellow";
          strength.style.color = "yellow";
      } else if (pass.value.length >= 8) {
          strength.innerHTML = "Strong";
          pass.style.borderColor = "green";
          strength.style.color = "green";
      }
  });
});
