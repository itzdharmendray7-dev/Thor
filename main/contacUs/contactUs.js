const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const subField = document.getElementById("subject");
const descField = document.getElementById("description");

handleClick = () => {
  const name = nameField.value;
  const email = emailField.value;
  const subject = subField.value;
  const description = descField.value;
  window.location.href = "thor.html";
};

confirmInput = () => {
  alert("Hello");
};
