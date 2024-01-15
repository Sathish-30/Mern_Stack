const data = {
    "India" : "Delhi",
    "Australia" : "Canberra",
    "United Kingdom" : "London",
    "America":"Washington",
    "Germany":"Berlin"
}

const selection = document.getElementById("county");
const btn = document.getElementById("btn");
const res = document.getElementById("res")

btn.addEventListener("click" , () => {
    let val = data[selection.value];
    res.value = val;
    alert(val)
})
