const navElems = [...document.getElementById("navigation").getElementsByTagName("ul")[0].getElementsByTagName("li")];

const nav1 = navElems[0];
const nav2 = navElems[1];
const nav3 = navElems[2];
var rect = document.getElementById("navigation").getBoundingClientRect();
var diff = (rect.bottom- rect.top)+20;
document.getElementById("focushr").style.scrollMarginTop = diff+"px";

nav1.addEventListener("click", function clickfunction(){
    document.getElementById("intro").scrollIntoView({
        behavior: "smooth" 
    });
});
nav2.addEventListener("click", function clickfunction(){
    document.getElementById("focushr").scrollIntoView({
        behavior: "smooth"
    });
});
nav3.addEventListener("click", function clickfunction(){
    document.getElementById("contactForm").scrollIntoView({
        behavior: "smooth"
    });
});

const contactOption = document.getElementById("contactOption");

contactOption.addEventListener("click", function clickfunction(){
    document.getElementById("contactForm").scrollIntoView({
        behavior: "smooth"
    });
})
const downloadImg = document.getElementById("options").getElementsByTagName("img");

downloadImg[0].addEventListener("click", function clickfunction(){
    downloadUsingAnchorElement();
});

document.getElementById("resume").addEventListener("click", function clickfunction(){
    downloadUsingAnchorElement();
});

function downloadUsingAnchorElement() {
    const anchor = document.createElement("a");
    anchor.href = "./Resume-Sewak_Singh_Gill.pdf";
    anchor.target="_blank";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
};  