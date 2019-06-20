
function generatePlasticBag(){ 
  movePlasticBag()
   bags.push(new Plasticbag(incX, 0))

 }
 

 
 function drawPlasticBag(){
    
  if(frames % 70 == 0 && frames % 140 ==0 ){
    movePlasticBag()
    generatePlasticBag()
 
   }
   bags.forEach(bags =>{
     bags.y+=2
     bags.draw()
     
   })
  }
  function movePlasticBag(){

    bags.forEach(bag =>{
      if(frames % 150  == 0 ){
        incX += 140;
     
      }
      if(incX > 300){
        incX = 0;    
      } 
    })
    }


function generateSwimsuit(){ 
 moveSwimsuit()
  swimsuits.push(new Swimsuit(positions[Math.floor(Math.random()*8)], 0))  
}


function moveSwimsuit(){

swimsuits.forEach(swimsuits =>{
  if(frames % 3  == 0 ){
    incX += 140;
  }
  if(incX > 300){
    incX = 0;    
  } 
})
}

function drawSwimsuit(){
  if(frames % 400 === 0 || frames %450 === 0 || frames % 500 ===0){
  generateSwimsuit()
  }
  swimsuits.forEach(swimsuit =>{
    swimsuit.y++ 
    swimsuit.draw()    
  }) 
 }

 function Marcador(){
  
  let valor = 0
  

  swimsuits.forEach((swimsuit,i) => {  
    if(man.isTouching(swimsuit)){
      valor++
      trajesDeBaño--
      swimsuits.splice(i,1) 
      }
    })

    bags.forEach((bag,i)=>{
      if(man.touching(bag)){
        valor-=5
      
        bags.splice(i,1) 
      }
    }) 
    return valor
}




