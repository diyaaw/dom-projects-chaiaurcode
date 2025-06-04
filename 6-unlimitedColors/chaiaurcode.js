//function to change color of bg

const randomColor= function(){
  const hex="0123456789ABCDEF";
  let color="#";
  for(let i=0;i<6;i++){
    //the math.random gives a value between 0 and 1 on multiplying it will give a value between 0 and 16
   color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
}

let intervalId;
const startChangingcolor=function(){
  function changeBgColor(){
  document.body.style.backgroundColor=randomColor()
}
if(!intervalId){
intervalId=setInterval(changeBgColor,1000)
}
}

const stopChangingcolor=function(){
  clearInterval(intervalId)
  intervalId=null
}

document.querySelector('#start').addEventListener('click',startChangingcolor)

document.querySelector('#stop').addEventListener('click',stopChangingcolor)