function togglemenu(width){
    document.getElementById("close-menu").style.width= `${width}px`;

}

function closesidebarmenu(){
    document.getElementById("side-nav").style.width= '0px';
}
window.onscroll=() => {
    
   let nav= document.getElementById('navbar');
   if(this.scrollY < 300){
       nav.className='navbar';
   }
   else if(this.scrollY > 400){
    nav.className='navbar-white';
   }

   if(this.scrollY<=500){
    scrolltopbtn.style.display="none";
   }
else{
    scrolltopbtn.style.display="block";
}
}

let scrolltopbtn=document.getElementById("scroll-up");
let rootElement=document.documentElement




function scrolltop(){    
    rootElement.scrollTo({
        top:0,
        behavior:"smooth"


    })
}
scrolltopbtn.addEventListener("click",scrolltop);