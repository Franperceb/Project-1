let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let positions=[10, 50 , 100, 140, 180, 210 , 240 ,270]

let animate = 0
let animateS = 0
let frames = 0
let interval
let tim 
let bags= []
let varSuit = 0
let varBag= 0
let swimsuits =  []
let incX = 0;
const cycleLoop = [1, 0, 1, 2]
const cycleLoop2 = [0,1,2,3,4,5,6,7]
const board1 = new Board()
const man = new Man()
const puntos= new Score()


