window.onload = function(){

  //PopUpNoBlocker
  (function() {
    var divs = document.querySelectorAll("[data-url]");
    for(i = 0; i < divs.length; i++)
      divs[i].setAttribute("onclick", "popUpNoBlocker(" + divs[i].getAttribute("data-url") + ")");
  })();






}
