const randomcolor=function(){
  const hex='0123456789ABCDEF'
  let color='#'
  for(let i=0;i<6;i++){
    color+= hex[Math.floor(Math.random()*16)]
  }
  return color;
}
function changebgcolor(){document.body.style.backgroundColor=randomcolor();
}
let intervalid;

const startcolourchange= function(){
  if(!intervalid){
intervalid=setInterval(changebgcolor,1000)
  }
}
const stopcolourchange=function(){
 clearInterval(intervalid)
 intervalid=null
}

document.querySelector('#start').addEventListener('click',startcolourchange)
document.querySelector('#stop').addEventListener('click',stopcolourchange)
