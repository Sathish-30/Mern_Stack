const generateCombination  = (str , res , index , al) => {
    if(str.length === index){
        res.push(al.slice());
        // console.log(res);
        return;
    }
    al.push(str[index]);
    generateCombination(str , res , index + 1 , al);
    al.pop();
    generateCombination(str , res ,index + 1 , al);
}
let str = "dog";
let res = [];
generateCombination(str.split("") , res , 0 , [])
console.log(res.sort());
