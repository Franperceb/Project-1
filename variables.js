let win = document.getElementById('win')
let canvas = document.querySelector('canvas');
let canvas2 = document.getElementById('canvas2')
let btn = document.querySelector('#start-button');
let player = document.querySelectorAll('.size')
let title = document.querySelector('.title')
let ctx = canvas.getContext('2d');
let ctx2 = canvas2.getContext('2d');
let scoreSS = document.querySelector('#score-ss')
let score1 = document.getElementById('score-1');
let score2 = document.getElementById('score-2');
let scoreSwimsuit = document.getElementById('scoreSwimsuit')


canvas.style.display = 'none'
canvas2.style.display = 'none'
scoreSwimsuit.style.display='none'
win.style.display = 'none'
scoreSS.style.display= 'none'

player.forEach(e => e.style.display = 'none')
let positions = [10, 50, 100, 140, 180, 210, 240, 270]
let animate = 0
let animateS = 0
let frames = 0
let interval
let trajesDeBaño = 30
let bags = []
let bags2 = []
let varSuit = 0
let varBag = 0
let swimsuits = []
let swimsuits2 = []
let incX = 0;
const cycleLoop = [1, 0, 1, 2]
const cycleLoop2 = [0, 1, 2, 3, 4, 5, 6, 7]
const board1 = new Board()
const board2 = new Board()
const man = new Man(ctx)
const man2 = new Man(ctx2)






