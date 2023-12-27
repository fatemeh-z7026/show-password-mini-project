let passwordField = document.getElementById("password-field");
let toggleIcon = document.getElementsByClassName("toggle-password");

toggleIcon[0].addEventListener("click", function () {
  if (passwordField.type == "text") {
    passwordField.type = "password";
    toggleIcon[0].classList.remove("active");
  } else {
    passwordField.type = "text";
    toggleIcon[0].classList.add("active");
  }
  //OR
  //   toggleIcon[0].classList.toggle("active");
});
