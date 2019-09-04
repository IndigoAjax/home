function hide() {
  var x = document.getElementById("noticeb");
  var z = document.getElementById("showthis");
  var c = document.getElementById("info");
  if (x.style.display === "none") {
    x.style.display = "block";
    c.style.display = "block";
    z.style.display = "none";
  } else {
    x.style.display = "none";
    c.style.display = "none";
    z.style.display = "block";
  }
}