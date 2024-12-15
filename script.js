gsap.from('#task',{
    opacity:0,
    x:200,
    delay:0.8,
    duration:1
})
var h1Element=document.querySelector('h1')
var h1Text=h1Element.textContent

var splittedText=h1Text.split('')
var half=splittedText.length/2

var updatedText=''
splittedText.forEach((ch,index)=>{
    if(index<half){
        updatedText+=`<span class='first'>${ch}</span>`
    }else{
        updatedText+=`<span class='second'>${ch}</span>`
    }
    
})
h1Element.innerHTML=updatedText

gsap.from('h1 .first',{
    y:100,
    opacity:0,
    duration:0.3,
    stagger:0.1
})
gsap.from('h1 .second',{
    y:100,
    opacity:0,
    duration:0.3,
    stagger:-0.1
})
