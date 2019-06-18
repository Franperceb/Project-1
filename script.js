window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

function update(){
 frames++
  ctx.clearRect(0,0,canvas.width,canvas.height)
  
  board1.draw()
  man.draw()
  drawStones()
  drawRocks()
  checkCollition()
}


function init() {
  interval = setInterval( update, 1000/60)
  varH = setInterval(drawRocks, 1000/580)
}

init()




  function startGame() {
    if(interval) return
      interval = setInterval(update,1000/60)
      
    }

};

     

