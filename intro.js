function grad(){
    let inp= document.getElementById("data").value;
    // console.log(typeof(inp));
    if (inp<=100 && inp>=0){
        if (inp>=90){
            grade="A GRADE"
        }
        else if (inp>=80){
            grade="B GRADE"
        }
        else if (inp>=70){
            grade="C GRADE"
        }
        else if (inp>=60){
            grade="D GRADE"
        }
        else{
            grade="F GRADE"
        }
    }
    else{
        grade="INVALID VALUE"
    }
    document.getElementById("result").innerHTML=grade
}