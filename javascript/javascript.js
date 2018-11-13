  document.addEventListener("DOMContentLoaded", function() {
    const colorSquare = document.querySelectorAll("#square1");
    for (let i=0; i<colorSquare.length; i++) {
      setTimeout(function() { colorSquare[i].style.backgroundColor="limegreen"; }, 3000);
    }
  });
