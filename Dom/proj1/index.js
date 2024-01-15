const form = document.getElementById("form");
const formData = new FormData(form);
const props = Object.fromEntries(formData);

const handleSubmit = () => {
  const text = document.getElementById("name").value;
  if (text === "") {
    alert("Invalid input");
  }
};

form.addEventListener("submit", handleSubmit);
 
