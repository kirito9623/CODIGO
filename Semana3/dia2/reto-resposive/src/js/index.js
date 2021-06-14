const header = document.getElementById("body");
const menu = document.getElementById("menu");
menu.onclick = () => {
  header.classList.toggle("open");
}

AOS.init();