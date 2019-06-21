
function generatePlasticBag(){ 
  movePlasticBag()
   bags.push(new Plasticbag(incX, 0, ctx))
   bags2.push(new Plasticbag(incX, 0,ctx2))

 }
 

 
 
 
 function drawPlasticBag(){
    
  if(frames % 70 == 0 && frames % 140 ==0 ){
    movePlasticBag()
    generatePlasticBag()
 
   }
   bags.forEach(bags =>{
     bags.y+=8
     bags.draw()
     
   })

  bags2.forEach(bags =>{
    bags.y+=8
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
  swimsuits.push(new Swimsuit(positions[Math.floor(Math.random()*8)], 0,ctx))  
  swimsuits2.push(new Swimsuit(positions[Math.floor(Math.random()*8)], 0,ctx2))  
  
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
  swimsuits2.forEach(swimsuit =>{
    swimsuit.y+=5
    swimsuit.draw()    
  }) 
 }
  

 function marcador(){

  swimsuits.forEach((swimsuit,i) => {  
    if(man.isTouching(swimsuit)){
      man.score++
      swimsuits.splice(i,1) 
      }
    })

    bags.forEach((bag,i)=>{
      if(man.isTouch(bag)){
        man.score-=2
        bags.splice(i,1) 
        if(man.score <0){
          man.score =0
        }
      }
    }) 


    swimsuits2.forEach((swimsuit,i) => {  
      if(man2.isTouching(swimsuit)){
        man2.score++
       
        swimsuits2.splice(i,1) 
        }
      })
  
      bags2.forEach((bag,i)=>{
        if(man2.isTouch(bag)){
          man2.score-=2
          bags2.splice(i,1) 
          if(man2.score <0){
            man2.score =0
          }
        }
      }) 
  
}

