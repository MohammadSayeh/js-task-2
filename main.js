var EnlargeButton = document.querySelector(".EnlargefontBtn");

var ReduceButton = document.querySelector(".ReducefontBtn");
var FrontEnd = document.querySelector("div");
function EnlargeFontSize(){
    FrontEnd.classList.add("Enlargefont")
    FrontEnd.classList.remove("Reducefont")
}
function ReduceFontSize(){
    FrontEnd.classList.add("Reducefont")
    FrontEnd.classList.remove("Enlargefont")

}
EnlargeButton.onclick = EnlargeFontSize;
ReduceButton.onclick = ReduceFontSize;