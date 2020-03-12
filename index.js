document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!



// add event to left, up, right, down
//register move to event listening
//create li elements to ul = "moves-container"

let moveButton = document.getElementById("move-button")
const moveTracker = document.getElementById("moves-container")


document.addEventListener('keydown', function(event){
  let direction = event.key
  let li = document.createElement("li")
  
  if (direction === "ArrowLeft") {
    li.innerText = "Left"
    moveTracker.append(li)
  }
  if (direction === "ArrowRight") {
    li.innerText = "Right"
    moveTracker.append(li)
  }
  if (direction === "ArrowUp") {
    li.innerText = "Up"
    moveTracker.append(li)
  }
  if (direction === "ArrowDown") {
    li.innerText = "Down"
    moveTracker.append(li)  
  }
  
  if (direction === "Backspace"){
    moveTracker.lastChild.remove()
  }


})

moveButton.addEventListener('click', function(event){

  let li = moveTracker.querySelector("li")
  
  if (li.innerText === "Left") {
    move("left")
  }
  if (li.innerText === "Right") {
    move("right")
  }
  if (li.innerText === "Up") {
    move("up")
  }
  if (li.innerText === "Down") {
    move("down")
  }
  li.remove()
})

// function move(direction)
  

})

