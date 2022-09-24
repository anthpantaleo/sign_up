document.querySelector(".btn").onclick = function () {
  let password = document.querySelector("#password").value;
  let password2 = document.querySelector("#password2").value;

  if (password == "") {
    alert("You need a password...");
  } else if (password != password2) {
    alert("Passwords don't match...");
    return false;
  } else if (password == password2) {
  }
  return true;
};
