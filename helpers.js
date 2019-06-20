
function generatePlasticBag(){ 
  movePlasticBag()
   bags.push(new Plasticbag(incX, 0))
   bags2.push(new Plasticbag(incX, 0))

 }
 

 
 
 
 function drawPlasticBag(){
    
  if(frames % 70 == 0 && frames % 140 ==0 ){
    movePlasticBag()
    generatePlasticBag()
 
   }
   bags.forEach(bags =>{
     bags.y+=5
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
  swimsuits2.push(new Swimsuit(positions[Math.floor(Math.random()*8)], 0))  
  
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
  trajesDeBaño--
  }
  swimsuits.forEach(swimsuit =>{
    swimsuit.y+=5
    swimsuit.draw()    
  }) 
 }

 function Marcador(){
  
  let valor = 0
  

  swimsuits.forEach((swimsuit,i) => {  
    if(man.isTouching(swimsuit)){
      valor++
     
      swimsuits.splice(i,1) 
      }
    })

    bags.forEach((bag,i)=>{
      if(man.isTouching(bag)){
        valor-=5
      
        bags.splice(i,1) 
      }
    }) 

    return valor
}


function Marcador2(){
  
  let valor1 = 0
  

  swimsuits2.forEach((swimsuit,i) => {  
    if(man2.touch(swimsuit)){
      valor1++
      swimsuits2.splice(i,1) 
      }
    })

    bags2.forEach((bag,i)=>{
      if(man2.touch(bag)){
        valor1-=5
      
        bags2.splice(i,1) 
      }
    }) 

    return valor1
}



