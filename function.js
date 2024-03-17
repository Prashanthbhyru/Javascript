// //function 

// function sum (x,y){
//     s=x+y;
//     console.log("before return");
//     return s;
// }
// let val = sum(10,13);
// console.log(val);

//arrow function


// const multArrow = (a, b)=>


      
// {
// return a*b;

// }
// let song = multArrow(8,13);
// console.log(song)



//Return Function 

//Reduct Function 

// let n = prompt("enter a number : ");

// let arr = [];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);

let n = prompt("enter a number:");
let arr =[];
for (let i=1; i<=n; i++){
    arr [i-1]=i;
}
console.log(arr);

let sum = arr.reduce((res,curr)=>{
    return res + curr;
});
console.log(sum);

let factorial = arr.reduce((res,curr)=>{
    return res*curr
})
console.log(factorial);