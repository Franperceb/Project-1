

function generateStones(){ 
  moveRocks()
   stones.push(new Stone(incX, 0))

 }
 

 
 function drawStones(){
   moveStones() 
  if(frames % 200 == 0){
   generateStones()
   }
   stones.forEach(stone =>{
     stone.y++
     stone.draw()
     
   })
  }
 
  function moveStones(){

    rocks.forEach(rock =>{
      if(frames % 2  == 0 ){
        incX += 170;
      }
      if(incX > 340){
        incX = 0;    
      } 
    })
    }


function generateRocks(){ 
 moveRocks()
  //rocks.push(new Rock(man.x+115, man.y))
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
  if(frames % 200 == 0){
  generateRocks()
  }
  rocks.forEach(rock =>{
    rock.y++ 
    rock.draw()    
  
  })
  console.log(stones)

  
 }

 function checkCollition() {
  rocks.forEach(rock => {
    if (man.isTouching(rock)) {
      rock.y= 700
    }
  })
 
  
}

