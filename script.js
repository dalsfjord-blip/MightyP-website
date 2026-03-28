
function showMenu() {
    // Finn menyen via ID-en
    var menu = document.getElementById("myMenu");
    var social = document.getElementById("mySocialLinks");
    
   // Legg til klassen "show" på begge to
    if (menu) {
        menu.classList.add("show");
    }
    
    if (social) {
        social.classList.add("show");
    }
}