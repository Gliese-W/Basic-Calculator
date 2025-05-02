console.log("File Loaded");

let val1 = '' ; 

function numberOnScreen(){
  const paraElement=document.querySelector(".js-text");
  const buttonElement= document.querySelector("button");
  const buttonText=buttonElement.innerText;
  paraElement.innerText= `${val1}`;
}
