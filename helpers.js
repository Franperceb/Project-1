
function generateStones(){ 
  moveRocks()
   stones.push(new Stone(incX, 0))

 }
 

 
 function drawStones(){
   moveStones() 
  if(frames % 500 == 0 && frames % 1500 ){
   generateStones()
   }
   stones.forEach(stone =>{
     stone.y++
     stone.draw()
     
   })
  }
  function moveStones(){

    rocks.forEach(rock =>{
      if(frames % 150  == 0 ){
        incX += 170;
      }
      if(incX > 340){
        incX = 0;    
      } 
    })
    }


function generateRocks(){ 
 moveRocks()
  rocks.push(new Rock(incX, -10))  
}


function moveRocks(){

rocks.forEach(rock =>{
  if(frames % 3  == 0 ){
    incX += 170;
  }
  if(incX > 340){
    incX = 0;    
  } 
})
}

function drawRocks(){
  if(frames % 70 == 0 && frames % 140 ==0){
  generateRocks()
  }
  rocks.forEach(rock =>{
    rock.y++ 
    rock.draw()    
  }) 
 }


 function checkCollition() {
  rocks.map(rock => {
    if (man.isTouching(rock)) {
      rock.y = 0
    }
  })

 }
 
  


