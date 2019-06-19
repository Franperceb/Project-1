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
  this.widht = 100
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
    this.widht, // ancho de la imagen en canvas
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

isTouching(rock) {
  return (
      this.x < rock.x + rock.width &&
      this.x + this.width > rock.x &&
      this.y < rock.y +rock.height &&
      this.y + this.height > rock.y
  )
}
}





class Stone  {
  constructor(x,y){
   this.x = x
   this.y = y
   this.sx = 48
   this.sy =48
   this.height = 80
   this.width = 40
   
   this.stone = new Image()
   this.stone.src = './imgs/main.png'
  }
 
  draw(){
  
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
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
   this.rock.src = '/imgs/swimsuit.png'
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
}


