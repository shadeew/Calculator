
const val = document.getElementById("box");
function clr(){
   val.value = "";
}
function cal(){
    try{
        val.value = eval(val.value);
    }
    catch(e){
        val.value = "Error";
    }
}
function res(input){
    val.value += input;
}

