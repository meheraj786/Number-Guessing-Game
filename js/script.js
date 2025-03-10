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
console.log(errMsg);

page1Btn.addEventListener("click",()=>{
  if (page1Input.value=="") {
    errMsg.innerHTML= "Enter Your Name"
  }
})
