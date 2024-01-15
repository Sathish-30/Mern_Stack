const text = document.getElementById("text");

const btn = document.getElementById("btn").onclick = () => {
    text.style.color = "green";
    alert("Colored changed to green");
}