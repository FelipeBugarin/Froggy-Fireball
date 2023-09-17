//Código da Fireball
let xFireballs = [600,600,600,600,600,600];
let yFireballs = [40,96,150, 210, 270, 300]; 
let velocidadeFireballs = [2, 3, 2.5, 4, 3.7, 5];
let comprimentoFireball = 70;
let alturaFireball = 40;

function mostraFireball(){
  for (let i = 0; i < imagemFireballs.length; i++){
    image(imagemFireballs[i], xFireballs[i], yFireballs[i], comprimentoFireball, alturaFireball);
  }
}

function movimentaFireball(){
  for(let i = 0; i < imagemFireballs.length; i++){  
  xFireballs[i] -= velocidadeFireballs[i];
  }
}

function voltaPosicaoInicialDaFireball(){
  for (let i = 0; i < imagemFireballs.length; i++){
    if(passouTodaATela(xFireballs[i])){
      xFireballs[i] = 600;
    }
  }
}

function passouTodaATela(xFireball){
  return xFireball < -50;
}