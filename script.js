window.onload = function() {
  document.getElementById("start-button").onclick = function() {
   
    startGame();
    btn.onclick = (e) =>{
      btn.style.display = "none"
      title.style.display = "none"
      canvas.style.display=  ''
      canvas2.style.display= ''
      player.forEach(e=>e.style.display = '')
    
    }
  };

function update(){
 frames++
  ctx.clearRect(0,0,canvas.width,canvas.height)  
  ctx2.clearRect(0,0,canvas.width,canvas.height)  

  board1.draw()
  board2.draw()
  man.draw()
  man2.draw()
  drawSwimsuit()
  drawPlasticBag()
  restantes()
  endGame()
  
}



function restantes(){
  let points= Marcador()
  puntos.score += points
  let points2= Marcador2()
  puntos2.score2 += points2
  if(puntos.score < 0 ){
    puntos.score = 0
  }
  if(puntos2.score < 0 ){
    puntos2.score = 0
  }
}






  function startGame() {
    
  
    
    if(interval) return
      board1.draw()
      interval = setInterval(update,1000/120)
      
    }
   

   
};


  function endGame(){
    if(trajesDeBaño === 0){
     clearInterval(interval)
     canvas.style.visibility ="hidden"
     canvas2.style.visibility="hidden"
    }
    }
     

