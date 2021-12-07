function changeCardPosition(windowSizeQuery){
    if(!windowSizeQuery.matches){
       document.getElementById("cards").classList.remove("row-cols-3");
       document.getElementById("cards").classList.add("row-cols-1");
    }
    else{
       document.getElementById("cards").classList.remove("row-cols-1");
       document.getElementById("cards").classList.add("row-cols-3");
    }
 }
windowSizeQuery = window.matchMedia("(min-width: 1000px)")
windowSizeQuery.addListener(changeCardPosition)
changeCardPosition(windowSizeQuery)
