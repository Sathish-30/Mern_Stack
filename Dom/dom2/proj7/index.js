const btn = document.getElementById("btn");
const val = document.getElementById("val");
const res = document.getElementById("res");
btn.addEventListener("click" , () => {
    let v = val.value;
    let ans;
    if(v >= 80){
        res.innerHTML = "Best";
        res.style.color = "green"
    }else if(v >= 60){
        res.innerHTML = "Good";
        res.style.color = "blue"
    }else if(v >= 50){
        res.innerHTML = "Better";
        res.style.color = "orange"
    }else{
        res.innerHTML = "Not Eligible";
        res.style.color = "red"
    }
})