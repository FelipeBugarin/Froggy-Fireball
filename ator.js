//Código do ator

let xAtor = 220;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 35,39);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i<imagemFireballs.length; i++){
    colisao = collideRectCircle(xFireballs[i], yFireballs[i],comprimentoFireball, alturaFireball, xAtor, yAtor,15)
    if(colisao){
      resetAtor();
      somDaColisao.play();
    if(pontosMaiorQueZero()){
      meusPontos -=1;
      }
    }
  }
}

function resetAtor(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(200,0,255))
  text(meusPontos, 240,20);
}

function marcaPontos(){
  if(yAtor < 1){
    meusPontos+=1;
    somDoPonto.play();
    resetAtor();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}