let array=[]
let n = prompt("How many elment the aray")

for(let i=0;i<n;i++){
  let number= prompt(`enter the number ${i+1}`)
  array[i]=Number(number)
}

let a=0;

for(let i=0;i<6;i++){

    if(array[i]>a){
        a=array[i];
    }
    
}
console.log(" largest is:" + a)