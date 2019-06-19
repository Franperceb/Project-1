window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

function update(){
 frames++
  ctx.clearRect(0,0,canvas.width,canvas.height)
  
  board1.draw()
  man.draw()
  drawSwimsuit()
  drawPlasticBag()
  checkCollition()
}


function update2(){
  
   drawSwimsuit()
   drawPlasticBag()
   checkCollition()
 }

function init() {
  
  interval = setInterval( update, 1000/60)
  setInterval(update2,1000/480)
  setInterval(drawSwimsuit, 1000/480)
  setInterval(drawPlasticBag, 1000/480)
}

init()


  function startGame() {
    if(interval) return
      interval = setInterval(update,1000/60)
      
    }

};

     

