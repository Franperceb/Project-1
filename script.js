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
  let points= Marcador()
  puntos.score += points
}





function init() {
  
  interval = setInterval( update, 1000/120)

}




  function startGame() {
    if(interval) return
      interval = setInterval(update,1000/60)
      init()
   
    }
};


  function endGame(){
    
      clearInterval(interval)
  }
     

