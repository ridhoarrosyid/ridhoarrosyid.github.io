let headerHeight = document.querySelector("header").offsetHeight;
let mainHeight = document.querySelector("main").offsetHeight;
let bodyHeight = document.querySelector("body").offsetHeight;

const footerHeight = bodyHeight - headerHeight - mainHeight;

const footer = document.querySelector("footer");

footer.style.height = `${footerHeight}px`;
