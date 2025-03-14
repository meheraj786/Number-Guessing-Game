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
const errMsg3 = document.querySelector("#page3 .errMsg")
const input =document.querySelector(".input")
const playerTwoName =document.querySelector(".playerTwo input")
const page2Name = document.querySelector("#page2 h2")
const page3Name = document.querySelector("#page3 h2")
const guessBetween = document.querySelector("#page3 .guessBetween")
const chances = document.querySelector("#page3 .chances")
const congrats= document.querySelector("#congrats")
const winner= document.querySelector(".winner")
const playAgain= document.querySelector(".playAgain")
const range= document.querySelector(".range")
const bar= document.querySelector(".bar")
const stats= document.querySelector(".stats")
const playerOne= document.querySelector(".stats .playerOne")
const playerTwo= document.querySelector(".stats .playerTwo")

let chance= 5
let oneWin=0;
let twoWin=0;


page1Btn.addEventListener("click",()=>{
  if (page1Input.value=="" || playerTwoName.value=="") {
    errMsg.innerHTML= "Enter Players Name"
    errMsg.style.color= "red"
    errMsg.style.fontSize= "24px"
  }else{
    page1.style.display='none'
    page2.style.display='block'
    page2Name.innerHTML=`${page1Input.value}, Enter a number for Guess`
    page3Name.innerHTML=`${playerTwoName.value}, guess the number`
  }
})

page2Btn.addEventListener("click", ()=>{
  if (page2Input.value=="") {
    errMsg2.innerHTML= "Enter a Number"
    errMsg2.style.color= "red"
    errMsg2.style.fontSize= "24px"
  }else{
    if (page2Input.value<0 || page2Input.value>20) {
      errMsg2.innerHTML= "Enter between 1 to 20"
      errMsg2.style.color= "red"
    errMsg2.style.fontSize= "24px"
    }else{
      page2.style.display='none'
    page3.style.display='block'
    guessBetween.innerHTML= "Guess the number Between 1 to 20"
    chances.innerHTML= `${chance} chance left`
    }
  }
})

page3Btn.addEventListener("click", ()=>{
  
  if (page3Input.value=="") {
    
    errMsg3.innerHTML= "Enter your Guess"
    errMsg3.style.color= "red"
    errMsg3.style.fontSize= "24px"
  }else if(page3Input.value<0 || page3Input.value>20){
errMsg3.innerHTML= "Guess between 1 to 20"
errMsg3.style.color= "red"
errMsg3.style.fontSize= "24px"
  }
  else{
    if (page3Input.value==page2Input.value) {
      congrats.style.display="block"
      winner.innerHTML= `${playerTwoName.value}, You Win!!`
      twoWin++
      stats.style.display="block"
      playerOne.innerHTML= `${page1Input.value}: ${oneWin} times win`
      playerTwo.innerHTML= `${playerTwoName.value}: ${twoWin} times win`
    }else{
      if (chance==1) {
        congrats.style.display="block"
      winner.innerHTML= `${page1Input.value}, You Win!!`
      oneWin++
      stats.style.display="block"
      playerOne.innerHTML= `${page1Input.value}: ${oneWin} times win`
      playerTwo.innerHTML= `${playerTwoName.value}: ${twoWin} times win`
      }else{
      chance--
      chances.innerHTML= `${chance} chance left`
      bar.style.width = `${(chance / 5) * 100}%`;
      errMsg3.innerHTML= ""
      if (chance==1) {
        bar.style.backgroundColor="red"
      }else if(chance==2){
bar.style.backgroundColor="orange"

      }
      }
    }
  }
})

playAgain.addEventListener("click", ()=>{
  page1.style.display='block'
  page2.style.display='none'
  page2Input.value= ""
  page3.style.display='none'
  page3Input.value= ""
  congrats.style.display="none"
  chance=5
  errMsg.innerHTML= ""
  errMsg2.innerHTML= ""
  errMsg3.innerHTML= ""
  bar.style.width="100%"
  bar.style.backgroundColor="#ebe4e4"
})
