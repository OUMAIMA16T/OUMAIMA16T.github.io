var offset = 300, 
  offsetOpacity = 1200, 
  scrollDuration = 700;


// var menu = document.getElementById("menu");

// if(menu) {
//     menu.addEventListener("click",function() {
//         var menuNavigation = document.getElementById("menu-nav");
//         menuNavigation.classList.toggle("menu-nav");
//     })
// }

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }