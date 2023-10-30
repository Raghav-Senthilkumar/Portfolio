let clickmegit = document.getElementById("github");
let clickmesnap = document.getElementById("snapchat");
let clickmeinsta = document.getElementById("insta");
let clickmelinkin = document.getElementById("linkedin");
clickmegit.addEventListener("mouseup", function(){
    setTimeout(function () {
        // Open the URL in a new tab/window after the delay
        window.open("https://github.com", '_blank');
    }, 100);
   
    //div.style.background = "radial-gradient( #eaeaea , #9d9d9d)";

})
clickmesnap.addEventListener("mouseup", function(){
    setTimeout(function () {
        // Open the URL in a new tab/window after the delay
        window.open("https://www.snapchat.com", '_blank');
    }, 100);
   
    //div.style.background = "radial-gradient( #eaeaea , #9d9d9d)";

})
clickmeinsta.addEventListener("mouseup", function(){
    setTimeout(function () {
        // Open the URL in a new tab/window after the delay
        window.open("https://www.instagram.com", '_blank');
    }, 100);
   
    //div.style.background = "radial-gradient( #eaeaea , #9d9d9d)";

})
clickmelinkin.addEventListener("mouseup", function(){
    setTimeout(function () {
        // Open the URL in a new tab/window after the delay
        window.open("https://www.linkedin.com", '_blank');
    }, 100);
   
    //div.style.background = "radial-gradient( #eaeaea , #9d9d9d)";

})