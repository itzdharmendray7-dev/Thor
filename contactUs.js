const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const subField = document.getElementById("subject");
const descField = document.getElementById("description");

handleClick = () => {
  const name = nameField.value;
  const email = emailField.value;
  const subject = subField.value;
  const description = descField.value;

  const data = JSON.parse(
    '{"name":{"firstName":"Amit","lastName":"Yadav"},"email":"yada@gm","subject":"test","description":"sbxcjiasbci"}'
  );

  console.log(data.name.firstName);
};
