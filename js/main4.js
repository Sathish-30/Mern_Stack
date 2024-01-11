const rev = (str) => {
    let i = 0;
    let j = str.length - 1;
    while(i <= j){
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        i++;
        j--;
        // console.log(str);
    }
    return str.join("");
}

console.log(rev(String(32243).split("")));