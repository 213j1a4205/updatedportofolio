const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky",window.scrolly > 120);
});
Let menu= document.querySelector('#menu-icon');
Let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}