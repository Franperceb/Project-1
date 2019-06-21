window.onload = function() {
  document.getElementById("start-button").onclick = function() {
   
    startGame();
    btn.onclick = (e) =>{
      btn.style.display = "none"
      title.style.display = "none"
      canvas.style.display=  ''
      canvas2.style.display= ''
      scoreSwimsuit.style.display=''
      scoreSS.style.display =''
      player.forEach(e=>e.style.display = '')
      board1.audio.play()
    }
  };
}
function update(){
 frames++
 ctx.clearRect(0,0,canvas.width,canvas.height)  
  ctx2.clearRect(0,0,canvas.width,canvas.height)  
  score1.innerHTML = man.score
  score2.innerHTML = man2.score
  scoreSwimsuit.innerHTML = trajesDeBaño
  if(!gameOver){
  board1.draw()
  board2.draw()
  man.draw()
  man2.draw()
  drawSwimsuit()
  drawPlasticBag()
  marcador()
  endGame()
}else{
    setTimeout(()=>{
      man.audio.play()
    }, 1000)
    winner()
  }
}

function winner(){
  let player1 = man.score
  let player2 = man2.score
  if(player1>player2){
    man.drawCelebration()
  canvas2.style.display="none"
   win.innerHTML ="Player 1 wins" + " score:" +`${player1}`
  }else if(player1 == player2){
    win.innerHTML = "Its a tie!"
    man.drawCelebration()
    man2.drawCelebration()
  }else{
    canvas.style.display ="none"
    man2.drawCelebration()
    win.innerHTML ="Player 1 wins" +  " score:" +`${player2}`
  }
    
    
}



function startGame() {
  
  if(interval) return
  board1.draw()
      interval = setInterval(update,1000/120)
      
    }
    
    

    
  function endGame(){
    if(trajesDeBaño === 0){
     win.style.display =''
     scoreSwimsuit.style.display = "none"
     scoreSS.style.display ="none"
     againButton.style.display =''
     board1.audio.pause()
     player.forEach(e=>e.style.display = 'none')
      gameOver = true;
    }
  }
       
  
