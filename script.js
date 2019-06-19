window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

function update(){
 frames++
  ctx.clearRect(0,0,canvas.width,canvas.height)
  
  board1.draw()
  man.draw()
  drawRocks()
  setTimeout(drawStones,10000)
  checkCollition()
}


function init() {
  interval = setInterval( update, 1000/60)
  varSuit = setInterval(drawRocks, 1000/780)
  varBag = setInterval(drawStones, 1000/780)
}

init()


  function startGame() {
    if(interval) return
      interval = setInterval(update,1000/60)
      
    }

};

     

