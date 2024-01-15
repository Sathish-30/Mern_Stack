const list = document.getElementById("list");

const btn = document.getElementById("btn");

const handleClick = () => {
    const ele = document.createElement("li");
    ele.innerHTML = "water";
    list.appendChild(ele);
}

btn.addEventListener("click", handleClick);