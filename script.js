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
  restantes()
  console.log(puntos.score)
  
}



function restantes(){
  let points= Marcador()
  puntos.score += points
  
  if(puntos.score < 0 ){
    puntos.score =0
  }
  

console.log(trajesDeBaño)
  
}

function init() {
  
  interval = setInterval( update, 1000/120)

}




  function startGame() {
    if(interval) return
      board1.draw()
      interval = setInterval(update,1000/60)
      init()
    }
};


  function endGame(){
      clearInterval(interval)
  }
     

