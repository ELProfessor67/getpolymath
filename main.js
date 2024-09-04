const menuRef = document.getElementById('menu');
const menuImageRef = document.getElementById('menu-image');
const navContainerRef = document.getElementById('nav-container');

const urls = {
    'unactive': '/assets/images/menu.svg',
    'active': '/assets/images/menu-black.svg'
}

menuRef.addEventListener('click',function(){
    
    navContainerRef.classList.toggle('nav-active')
    if(navContainerRef.classList.contains('nav-active')){
        menuImageRef.src = urls['active']
    }else{
        menuImageRef.src = urls['unactive']
    }
});