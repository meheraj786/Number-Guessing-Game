const page1 = document.querySelector("#page1")
const page2 = document.querySelector("#page2")
const page3 = document.querySelector("#page3")
const page1Btn = document.querySelector("#page1 button")
const page2Btn = document.querySelector("#page2 button")
const page3Btn = document.querySelector("#page3 button")
const page1Input = document.querySelector("#page1 input")
const page2Input = document.querySelector("#page2 input")
const page3Input = document.querySelector("#page3 input")
const errMsg = document.querySelector("#page1 .errMsg")
const errMsg2 = document.querySelector("#page2 .errMsg")
const input =document.querySelector(".input")
const page2Name = document.querySelector("#page2 h2")




page1Btn.addEventListener("click",()=>{
  if (page1Input.value=="") {
    errMsg.innerHTML= "Enter Your Name"
    errMsg.style.color= "red"
    errMsg.style.fontSize= "24px"
  }else{
    page1.style.display='none'
    page2.style.display='block'
    page2Name.innerHTML=`Player One (${page1Input.value})`
  }
})

page2Btn.addEventListener("click", ()=>{
  if (page2Input.value=="") {
    errMsg2.innerHTML= "Enter a Number"
    errMsg2.style.color= "red"
    errMsg2.style.fontSize= "24px"
  }else{
    page2.style.display='none'
    page3.style.display='block'
  }
})

page3Btn.addEventListener("click", ()=>{
  
})
