const btn = document.getElementById("btn")

const handleSubmit = () => {
    alert("Clicked")
    const data = document.getElementById("name").value;
    alert(data);
}

btn.addEventListener("submit", handleSubmit);