function add(){
    let f=parseInt(document.getElementById("fnumber").value); 
    let s=parseInt(document.getElementById("snumber").value);
    if(f>=0||f<=0 && s>=0||s<=0){
         sum=f+s;
        }
    else{
        sum="INVALID INPUT";
    }
    document.getElementById("result").innerHTML=sum;
    }
    
  