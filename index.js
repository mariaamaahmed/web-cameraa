var icon = document.getElementById("dark");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "moon.png"; 
    } else {
        icon.src = "moon.png";

    }
};

let myimage=document.getElementById("slideshow");
let images=["images/11.png", "images/13.png","images/7.png","images/4.png" ," images/3.png"];
let i=0;

function slideshow(){
    myimage.setAttribute('src',images[i]);
    if(i==images.length-1){
        i=0
    }else{i++}
    setTimeout(function () {slideshow();},2000
)

}
slideshow();

