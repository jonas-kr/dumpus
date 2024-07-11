const menuIcon = document.querySelector('#menu-icon'),
       navbar = document.querySelector('.navbar'),
       searchlogin = document.querySelector('.search-login');
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
    searchlogin.classList.toggle('active');

};