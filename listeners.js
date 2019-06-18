  
  addEventListener('keydown', (e) => {

      if(e.keyCode === 39) {
        man.moveRight()
      } else if(e.keyCode === 37) {
        man.moveLeft()
   }
   })
   
   addEventListener('keyup', (e) => {
       man.x = 150
   })
  
   

   
