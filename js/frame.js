var show = document.querySelector('#show');
var side = document.querySelector('.sidebar');
var sele = document.querySelector('.selector');
var home = document.querySelector('.home');
var view = document.querySelector('.view');
var Lbox = document.querySelector('.lang ul');
function changeH(){
    sele.style.top='141px';
    home.style.backgroundPosition='-150px -136px';
    view.style.backgroundPosition='-276px 0';
}
function changeV(){
    sele.style.top='191px';
    home.style.backgroundPosition='-282px -136px';
    view.style.backgroundPosition='-145px 0';
}
function changeL(){
    Lbox.style.height='95px';
}
function changeCN(){
    Lbox.style.height='0';
}
function changeEN(){
    alert('勾罕见是吧');
    Lbox.style.height='0';
}
function changeW(){
    show.style.height = window.innerHeight + 'px';
    show.style.width = window.innerWidth + 'px';
}
changeW();
window.addEventListener('resize', changeW);