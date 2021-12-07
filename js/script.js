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

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
const btn = document.getElementById('darkMode');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.body.classList.toggle("dark-theme");
} else if (currentTheme === "light") {
    document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";
    } else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme")
            ? "dark"
            : "light";
    }
    localStorage.setItem("theme", theme);
});

