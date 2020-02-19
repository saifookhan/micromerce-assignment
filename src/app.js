import styles from "./styles/styles.sass";

setInterval(function() {
  $("#slider > div:first")
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo("#slider");
}, 8000);
