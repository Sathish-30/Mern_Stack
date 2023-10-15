const btn = document.querySelectorAll("button");
const ansField = document.getElementById("ans-field");
const reset = document.getElementById("reset");
const find_res = document.getElementById("find");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    ansField.value += button.textContent;
  });
});

ansField.addEventListener("keyrelease", (event) => {
  ansField.value += event.key;
});

reset.addEventListener("click", () => {
  ansField.value = "";
});

find_res.addEventListener("click", () => {
  ansField.value = eval(ansField.value);
});
