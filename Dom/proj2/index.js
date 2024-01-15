const btn1 = document.getElementById("mul");
const btn2 = document.getElementById("div");
const res = document.getElementById("res");
const v1 = document.getElementById("num1");
const v2 = document.getElementById("num2");


const handleMul = () => {
    let val =  v1.value * v2.value;
    alert(val);
    res.innerHTML = String(val);
}

const handleDiv = () => {
    let val =  v1.value / v2.value;
    alert(val);
    res.innerHTML = String(val);
}

btn1.addEventListener("click",handleMul);
btn2.addEventListener("click",handleDiv);