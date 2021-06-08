const modal=document.getElementById("modal")
const openBtn = document.getElementById("pop-up");
const closeBtn=document.getElementsByClassName("close-button")[0];
const iframe = document.querySelector('iframe');

openBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);
window.addEventListener('click',clickOutside);

function openModal(){
    modal.style.display="block";
    iframe.src="https://www.youtube.com/embed/n4b8FRUDNZo?autoplay=1";
}

function closeModal(){
    modal.style.display="none";
    iframe.src="";
}

function clickOutside(e){
    if(e.target==modal){
        modal.style.display="none";
        iframe.src="";
    }
}