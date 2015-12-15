/*This is adding JS into the Mix */

document.getElementByID("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + "Website was made by Ryan Hang </p>";


/* This is the Javascript add links to the webpage based onte the tags */

window.onload = function() {
  document.getElementById("LearnMoreBtn").onclick = function(){
        var overlay = document.getElementById("overlay");
        var popup = document.getElementById("popup");
        overlay.style.display = "block";
        popup.style.display = "block";
    };
    
  document.getElementById("CloseBtn").onclick = function(){
        var overlay = document.getElementById("overlay");
        var popup = document.getElementById("popup");
        overlay.style.display = "none";
        popup.style.display = "none";      
  }
};


  $(document).ready(function(){
      $("#flip").click(function(){
          $("#panel").slideDown("slow");
      });
  });

                  
