document.getElementById('clock')

//Date() apne pass direct object hai


//jo pucha hai vhi jawab do choti baat chota reply

//set interval-

//hamesha ese hi likhnaa
//1000 for one sec, 2k for 2 sec
setInterval(function(){
  let date= new Date()
  //console.log(date.toLocaleTimeString())
  clock.innerHTML=date.toLocaleTimeString()
},1000)