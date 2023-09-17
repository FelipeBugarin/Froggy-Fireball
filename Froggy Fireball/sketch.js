function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraFireball();
  movimentaFireball();
  movimentaAtor();
  voltaPosicaoInicialDaFireball();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}