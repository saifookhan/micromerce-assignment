import styles from "./styles/styles.sass";

// document.getElementById("photo").style.backgroundImage =
//   "url(http://media.nu.nl/m/m1fz6dwa6h3w.jpg)";
console.log("hi");

setInterval(function() {
  $("#slider > div:first")
    .fadeOut(1000)
    .fadeIn(1000)
    .next()
    //.fadeIn(1000)
    .end()
    .appendTo("#slider");
}, 3000);
