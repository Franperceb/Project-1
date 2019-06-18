  class Board{
  
  constructor(){
    this.x= 0
    this.y=230
    this.width = canvas.width
    this.height= canvas.height
    this.img = new Image()
    this.img.src= "https://yokoent.com/images/road-png-full-hd-12.png"
    this.img.onload = () => {
      this.draw()
    }
  }
  draw(){
     ctx.drawImage(this.img,this.x,this.y,)
}
}


class Man{
  constructor(){
  this.x =150
  this.y = 450
  this.man = new Image()
  this.man.src = './imgs/main-1.jpg'
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
    100, // ancho de la imagen en canvas
    320  // alto de la imagen en canvas
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
isTouching(rocks) {
  return (
    this.x < rocks.x + rocks.width &&
    this.x + this.width > rocks.x &&
    this.y < rocks.y + rocks.height &&
    this.y + this.height > rocks.y
  )
}
}

class Stone  {
  constructor(x,y){
   this.x = x
   this.y = y
   this.sx = 48
   this.sy =48
   this.height = 200
   this.width = 100
   
   this.stone = new Image()
   this.stone.src = './imgs/main.png'
  }
//  varSize(){
//    this.width+=1 
//    this.height+=1 
//  }
 
  draw(){
  
   //let sizing= setInterval(this.varSize,10000)    
  
  
   //this.varSize()
  //console.log(this.height)
   // console.log(sizing)
    
    if(frames % 4 === 0){
      animateS++
      if(animateS === 8) animateS = 0
    }
    ctx.drawImage(
      this.stone, //imagen
      cycleLoop2[animate] * 48, // posición en x, de la imagen
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



class Rock  {
  constructor(x,y){
   this.x = x
   this.y = y
   this.sx = 256
   this.sy = 250
   this.height = 100
   this.width = 60
   this.rock = new Image()
   this.rock.src = 'https://opengameart.org/sites/default/files/rocks_rotated.png'
  }


  draw(){
    if(frames %  4 === 0){
      animateR++
      if(animateR === 8) animateR = 0
    }
    ctx.drawImage(
      this.rock, //imagen
      cycleLoop2[animate] *  256, // posición en x, de la imagen
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
    isTouching(stones) {
      return (
        this.x < stones.x +stones.width &&
        this.x + this.width > stones.x &&
        this.y < stones.y + stones.height &&
        this.y + this.height > stones.y
      )
    }
}


