document.body.style.boxSizing = "border-box";
document.body.style.padding = "0";
document.body.style.margin = "0"; 
document.body.style.fontFamily = "Arial"; 

let divs = document.querySelectorAll("div"); 
for (let i=0; i<divs.length; i++) {
   divs[i].classList.add(`div_${i}`); 
}

divs[2].textContent = "Elzero"; 
document.documentElement.style.setProperty("--mainColor", "white");
document.documentElement.style.setProperty("--mainBg", "green");
