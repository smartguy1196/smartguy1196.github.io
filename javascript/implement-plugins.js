//PopUpNoBlocker
(function() {
  var divs = document.querySelectorAll("[data-url]"))
  [].forEach.call(divs, function(div) {
    div.onclick=popUpNoBlocker(div.getAttribute('data-url'));
  });
});
