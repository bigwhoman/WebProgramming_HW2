let hexString = "0123456789abcdef";
function changeGrad(){
   random1 = randomColor();
   random2 = randomColor();
   console.log(random1,random2);
   let grad= document.getElementById("headerG");
   console.log(grad);
   grad.style.background=`linear-gradient(268deg, ${random1}, ${random2})`;
}
let randomColor = () => {
   let hexCode = "#";
   for( i=0; i<6; i++){
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
   }
   return hexCode;
}
document.getElementById("clickMe").onclick = function(){
   changeGrad();
}