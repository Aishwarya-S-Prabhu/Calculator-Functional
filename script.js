// var value;
// function display(value) {
//     document.getElementById("Show").innerText += value;
// }
// function clrScreen() {
//     document.getElementById("Show").innerText = '';
// }
// function calculate(){
//    var a = document.getElementById("Show").innerText ;
//    var b = eval(a);
//    document.getElementById('Show').innerText= b;
// }

// var buttons = document.querySelectorAll(".btn");
var buttons = document.querySelectorAll(".button");
var box = document.getElementById("Show");
console.log(buttons)
buttons.forEach((but)=>{
    but.addEventListener("click", (e)=>assign(e));
    
})

function assign(e) {
    switch(e.target.innerText){
        case 'AC':
            console.log("AC")
            box.innerText='';
            break;
        case '=':
            box.innerText=eval(box.innerText);
            break;
        case 'x' :
            box.innerText += "*";
            break;
        default:
            box.innerText+=e.target.innerText;
    }
}

