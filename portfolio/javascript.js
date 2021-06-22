var accordion = document.getElementsByClassName("escola");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var textosecundario = this.nextElementSibling;
    if (textosecundario.style.display === "block") {
      textosecundario.style.display = "none";
    } else {
      textosecundario.style.display = "block";
    }
  });
}