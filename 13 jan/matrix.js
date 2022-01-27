const n = [
        [1 , 4 , 2 , 3],
        [8 , 7 , 3 , 2],
        [1 , 2 , 3 , 4],
        [9 , 2 , 5 , 9]
 ] ;

function arrayAdd(){
let sum = 0;
for(var i=0; i<n.length; i++){
 for(var j=0; j<n[i].length; j++){
     if(i===j){
         sum += n[i][j];
     }
 }
}
return sum;
}
var add = arrayAdd();
function display(){
var para = document.getElementById('para');
para.innerText = "The addition is " + add ;
}