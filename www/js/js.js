function showText(el) {
    if(el.previousElementSibling.clientHeight === 80) {
        el.previousElementSibling.style.height = "100%";
        el.innerHTML = "Show Less...";
    } else {
        el.previousElementSibling.style.height = "80px";
        el.innerHTML = "Read More...";
    }
}

/*var textHeight = document.getElementById("describe").clientHeight;
 if(textHeight === 80) {
 document.getElementById("describe").style.height = "100%";
 el.innerHTML = "Show Less...";
 } else {
 document.getElementById("describe").style.height = "80px";
 el.innerHTML = "Read More...";
 }*/
