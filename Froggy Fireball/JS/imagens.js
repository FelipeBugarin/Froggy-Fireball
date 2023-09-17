//Imagens e Sons do Jogo

let imageDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemFireball2;
let imagemFireball3;

//Sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/road.jpg");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemFireball = loadImage("imagens/fireball-1.png");
  imagemFireball2 = loadImage("imagens/fireball-2.png");
  imagemFireball3 = loadImage("imagens/fireball-3.png");
  imagemFireballs =[imagemFireball, imagemFireball2, imagemFireball3, imagemFireball, imagemFireball2, imagemFireball3];
  
  somDaTrilha = loadSound("Sons/trilha.mp3");
  somDaColisao = loadSound("Sons/colidiu.mp3");
  somDoPonto = loadSound("Sons/ponto.mp3");
}