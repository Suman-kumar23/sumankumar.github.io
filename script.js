
window.addEventListener("load",()=>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    // --page ----loader------

    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".page-loader").style.display="none";
    },600);
})







/*-----------------------------toggle navbar-----------------------*/
const navbarToggler = document.querySelector(".nav-toggler");
  navbarToggler.addEventListener('click', ()=>{
    hidesection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hidesection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}


/*----------------------active section--------------------------------*/ 

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains("link-item")&& e.target.hash !==""){
        // activate the overlay to prevent  multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navbarToggler.classList.add("hide");
       if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
       else{
          hidesection();
          document.body.classList.add("hide-scrolling");

       } 
       setTimeout(()=>{
           document.querySelector("section.active").classList.remove("active","fade-out");
           document.querySelector(e.target.hash).classList.add("active");
           window.scrollTo(0,0);
           document.body.classList.remove("hide-scrolling");
           navbarToggler.classList.remove("hide");
           document.querySelector(".overlay").classList.remove("active");
       },500);
    }
})




/* -----------------------------About Tabs----------------------*/
const tabsContainer = document.querySelector(".about-tabs"), aboutSection = document.querySelector(".about-section");

 tabsContainer.addEventListener('click',(d)=>{
    if(d.target.classList.contains("tab-items") && !d.target.classList.contains("active")){
       tabsContainer.querySelector(".active").classList.remove("active");
       d.target.classList.add("active");
    const target = d.target.getAttribute("data-target");
        console.log(target);
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
   };
}); 


