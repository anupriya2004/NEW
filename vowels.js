function vow(){
    inp=document.getElementById("data").value;
    let count=0;
    let v=["A","E","I","O","U","a","e","i","o","u"];
    for(i=0;i<inp.length;i++){
        console.log(inp[i]);
        if (v.includes(inp[i])){
            console.log("yes vowel");
            count+=1;
        }
        else{
            console.log("NOT A VOWEL");
        }
    }
    document.getElementById("result").innerHTML=count;

}