function conv(){
    let inp=parseInt(document.getElementById("data").value);
    let words=toWords(inp);
    document.getElementById("result").innerHTML= words
}