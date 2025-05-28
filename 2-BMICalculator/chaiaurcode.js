const form=document.querySelector('form')
//form either gets submitted from post type or get type

form.addEventListener('submit',function(e){//this means jo bhi default action hai usse roko kahi abhi submit mt kro
  e.preventDefault()
  const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const results=document.querySelector('#results')

if(height<='0' || isNaN(height) || height===''){
  results.innerHTML=`Please enter a valid height ${height}`;
}
else if(weight<='0' || isNaN(weight) || weight===''){
  results.innerHTML=`Please enter a valid weight ${weight}`
}
else{
  const bmi=(weight/((height*height)/10000)).toFixed(2)
results.innerHTML=`<span>${bmi}</span>`


let wguide=""
if(bmi<18.6){
  wguide="Underweight"
}
else if(bmi<24.9 && bmi>=18.6){
  wguide="normal"
}
else
wguide="over weight"

results.innerHTML += `<span>You are ${wguide}</span>`;

}
})

