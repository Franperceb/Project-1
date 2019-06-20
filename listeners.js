  
  addEventListener('keydown', (e) => {

      if(e.keyCode === 68) {
        man.moveRight()
      } else if(e.keyCode === 65) {
        man.moveLeft()
   }
   })
   
   addEventListener('keyup', (e) => {
       man.x = 150
   })
  
   addEventListener('keydown', (e) => {

    if(e.keyCode === 39) {
      man2.moveRight()
    } else if(e.keyCode === 37) {
      man2.moveLeft()
 }
 })
 
 addEventListener('keyup', (e) => {
     man2.x = 150
 })

   

   
