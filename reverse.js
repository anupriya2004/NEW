function rev(){
    let inp=document.getElementById("data").value;
    let l=inp.length
    let reverse=""
    for(i=l-1;i>=0;i--){
        console.log(inp[i]);
        reverse+=inp[i];
    }
    document.getElementById("result").innerHTML=reverse;
}