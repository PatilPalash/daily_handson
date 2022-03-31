
function forid(){
    // console.log("My button is click")
    var result=document.getElementById("text").innerText="Thanks";
}
function fortag(){
    let result=document.getElementsByTagName("h1");
    result[0].innerText="Thanks";
}
function forclass(){
    let result=document.getElementsByClassName("Box1");
    result[0].innerText="Thanks";
}
function changeheading(){
   let result=document.getElementById("headingchange").innerText="Hello World";
}
function clickme(){
    document.getElementById("container").style.flexDirection="column"
}
function heading(){
    document.getElementById("colorchange").style.color="red";
}
function replacecontent(){
    let result=document.getElementById("elevation").innerText="Welcome to Elevation academy";
 }
function getOption(){
    var result=document.getElementById("text1");
    var result2=result.value
    document.getElementById("output").innerText=result2
}