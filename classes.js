  class Board{
  
  constructor(){
    this.x= 0
    this.y=230
    this.width = canvas.width
    this.height= canvas.height
    this.img = new Image()
    this.img.src= './imgs/pool.jpg'    
    this.img.onload = () => {
      this.draw()
    }
  }
  draw(){
    if (this.y > canvas.height) this.y = 0
    this.y++
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x , this.y -canvas.height, this.width, this.height)
}
}


class Man{
  constructor(){
  this.x =150
  this.y = 450
  this.man = new Image()
  this.man.src = './imgs/main-1.jpg'
  this.width = 100
  this.height = 320
  }
draw(){
  if(frames % 4 === 0){
    animate++
    if(animate === 4) animate = 0
  }
  ctx.drawImage(
    this.man, //imagen
    cycleLoop[animate] * 48, // posición en x, de la imagen
    // iteramos entre los estados de la imagen: 0, 16, 32
    217, // posición en y, de la imagen
   // iteramos entre los estados de la imagen: 0, 16, 32
    45, // ancho de la fuente (imagen)
    72, //alto de la fuente (imagen)
    this.x, // el punto x de destino en el canvas
    this.y, // el punto y de destino en el canvas
    this.width, // ancho de la imagen en canvas
    this.height  // alto de la imagen en canvas
  )    
}
moveRight() {
  if (this.x === 300) return
  this.x+= 150  
  }
moveLeft() {
  if (this.x  === 0) return
  this.x-= 150
}

isTouching(swimsuit) {
return (
      this.x < swimsuit.x + swimsuit.width &&
      this.x + this.width > swimsuit.x &&
      this.y < swimsuit.y + swimsuit.height &&
      this.y + this.height > swimsuit.y
  )
}
 touching(bag) {
  return (
      this.x < bag.x + bag.width &&
      this.x + this.width > bag.x &&
      this.y < bag.y + bag.height &&
      this.y + this.height > bag.y
  )
}
}




class Plasticbag {
  constructor(x,y){
   this.x = x
   this.y = y
   this.sx = 100
   this.sy =100
   this.height = 100
   this.width = 100
   
   this.plasticbag= new Image()
   this.plasticbag.src = './imgs/plasticbag.png'
  }
 
  draw(){
  
    
    if(frames % 4 === 0){
      animateS++
      if(animateS === 4) animateS = 0
    }
    ctx.drawImage(
      this.plasticbag, //imagen
      cycleLoop2[animate] * 3, // posición en x, de la imagen
      // iteramos entre los estados de la imagen: 0, 16, 32
      0, // posición en y, de la imagen
     // iteramos entre los estados de la imagen: 0, 16, 32
      this.sx, // ancho de la fuente (imagen)
      this.sy, //alto de la fuente (imagen)
      this.x, // el punto x de destino en el canvas
      this.y, // el punto y de destino en el canvas
      this.width, // ancho de la imagen en canvas
      this.height // alto de la imagen en canvas
    )
 }
}

class Swimsuit {
  constructor(x,y){
   this.x = x
   this.y = y
   this.sx = 100
   this.sy =100
   this.height = 100
   this.width = 100
   
   this.swimsuit = new Image()
   this.swimsuit.src = './imgs/swimsuit.png'
  }
 
  draw(){  
    if(frames % 4 === 0){
      animateS++
      if(animateS === 6) animateS = 0
    }
    ctx.drawImage(
      this.swimsuit, //imagen
      cycleLoop2[animate] * 5, // posición en x, de la imagen
      // iteramos entre los estados de la imagen: 0, 16, 32
      0, // posición en y, de la imagen
     // iteramos entre los estados de la imagen: 0, 16, 32
      this.sx, // ancho de la fuente (imagen)
      this.sy, //alto de la fuente (imagen)
      this.x, // el punto x de destino en el canvas
      this.y, // el punto y de destino en el canvas
      this.width, // ancho de la imagen en canvas
      this.height // alto de la imagen en canvas
    )
 }
}



class Score{
  constructor(){
  this.x = 0
  this.y = 0
  this.height= 100
  this.width = 100
  this.score = 0
  }
draw(){
  ctx.fillStyle = 'white'
  ctx.fillText(`Score : ${this.score}`,this.x, this.y, this.width)
}
  
}


 

