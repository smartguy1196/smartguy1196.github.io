//PopUpNoBlocker
document.querySelectorAll("[data-url]").forEach(
  function(value, index, array){
    array[index].onclick=popUpNoBlocker(array[index].getAttribute('data-url'));
  });
