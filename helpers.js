
function generatePlasticBag(){ 
  movePlasticBag()
   bags.push(new Plasticbag(incX, 0))

 }
 

 
 function drawPlasticBag(){
   movePlasticBag() 
  if(frames % 70 == 0 && frames % 140 ){
   generatePlasticBag()
   }
   bags.forEach(bags =>{
     bags.y++
     bags.draw()
     
   })
  }
  function movePlasticBag(){

    bags.forEach(bag =>{
      if(frames % 150  == 0 ){
        incX += 170;
      }
      if(incX > 340){
        incX = 0;    
      } 
    })
    }


function generateSwimsuit(){ 
 moveSwimsuit()
  swimsuits.push(new Swimsuit(incX, -10))  
}


function moveSwimsuit(){

swimsuits.forEach(swimsuits =>{
  if(frames % 3  == 0 ){
    incX += 170;
  }
  if(incX > 340){
    incX = 0;    
  } 
})
}

function drawSwimsuit(){
  if(frames % 70 == 0 && frames % 140 ==0){
  generateSwimsuit()
  }
  swimsuits.forEach(swimsuit =>{
    swimsuit.y++ 
    swimsuit.draw()    
  }) 
 }


 function checkCollition() {
  swimsuits.map(rock => {
    if (man.isTouching(rock)) {
      swimsuits.y = 0
    }
  })

 }
 
  


