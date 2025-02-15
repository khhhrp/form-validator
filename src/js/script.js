document.addEventListener("DOMContentLoaded", () => {
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const toggleBtn = document.querySelector(".form__toggle-btn");
  const signBtn = document.querySelector(".form__btn");

  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    if (inputPassword.type === "password") {
      inputPassword.type = "text";
    } else {
      inputPassword.type = "password";
    }
  });

  // signBtn.addEventListener("click", () => {
  //   const emailValue = inputEmail.value;
  //   const passwordValue = inputPassword.value;

  //   alert(`Email: ${emailValue}\nPassword: ${passwordValue}`);
  // });
});
