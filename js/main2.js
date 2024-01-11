const swap = (arr , i , j) => {
    while(i <= j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

let n = 5;
let arr = [1 , 12 ,43 , 5 , 6];
let rot = 3;
arr = swap(arr , 0 , rot - 1);
arr = swap(arr , rot , arr.length - 1);
arr = swap(arr , 0 , arr.length - 1);
console.log(arr);

