const form = document.querySelector(".form");
const input = document.querySelector(".input");
const demo = document.getElementById("demo");

form.addEventListener("submit", (e) => {
  var validRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

  if (input.value.match(validRegex)) {
    form.classList.remove("no-error");
    demo.innerText = "";
    alert("thanks");
    
  } else {
    e.preventDefault()
        form.classList.add("no-error");
    demo.innerText = "Please provide a valid email";
    return;
  }
});
