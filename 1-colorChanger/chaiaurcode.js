const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");


buttons.forEach(function (button) {
console.log(button);
//this means that onclicking the colour in the webpage what function will happen

//the function next to click contains the object of the event
button.addEventListener("click",function(e){
  //this gives the info regarding our project in the console
  console.log(e);
  console.log(e.target);
  if(e.target.id==="grey"){
    body.style.backgroundColor=e.target.id
  }
  if(e.target.id==="white"){
    body.style.backgroundColor=e.target.id
  }
  if(e.target.id==="blue"){
    body.style.backgroundColor=e.target.id
  }
  if(e.target.id==="yellow"){
    body.style.backgroundColor=e.target.id
  }
  if(e.target.id==="pink"){
    body.style.backgroundColor=e.target.id
  }
  if(e.target.id==="brown"){
    body.style.backgroundColor=e.target.id
  }

})
})
