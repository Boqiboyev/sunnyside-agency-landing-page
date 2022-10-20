const email = document.getElementById("email");
const form = document.querySelector("form");
const invalid = document.querySelector(".invalid");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "") {
    invalid.classList.add('show-error')
  } else {
    invalid.classList.remove('show-error')
  }
});
