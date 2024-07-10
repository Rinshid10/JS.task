let balance=""
function fordep(){
  let recived =document.getElementById("one").value
  one=Number(one)
  
    if(recived>0){ 

              balance=recived+balance
        alert("deposit successfully finished")
    }else{
        alert("invalied deposit")
    }
    document.getElementById("one").value=""
}

function forwith(){

    let taked=document.getElementById("two").value
    two=Number(two)

    if(taked>balance){
        balance=balance-taked
        alert("withdrawal successfully finished")
    }else{
        alert("invalid withdrawal")
    }
      document.getElementById("two").value=""
}

function result(){
    document.getElementById("bb").innerHTML=`BANK BALANCE : ${balance} $`
}


