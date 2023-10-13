const btn = document.getElementById("btn");
const answer = document.getElementById("ans-text");

const handleClick = () => {
  answer.innerHTML = "Student Registered!";
};

btn.onclick = handleClick;
