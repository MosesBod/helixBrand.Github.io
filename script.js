const navLinks = document.getElementById('navLinks');
function showItem(){
    navLinks.style.right = '0'
}
function hideItem(){
    navLinks.style.right = '-210px'
}
const hello= document.querySelector('.sec-1')
const heading = document.querySelector('.Mouse')
hello.addEventListener('mousemove', runEvent);
function runEvent(e) {
   heading.textContent= `RayX: ${e.offsetX} RayY: ${e.offsetY}`;
}