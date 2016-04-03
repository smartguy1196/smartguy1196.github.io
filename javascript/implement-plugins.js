window.onload = function(){

  //PopUpNoBlocker
  (function() {
    var divs = document.querySelectorAll("[data-url]");
    for(i = 0; i < divs.length; i++)
      divs[i].onclick = function() {
        window.popUpNoBlocker(event.target.getAttribute("data-url"));
      };
  })();






}
