import Game from "./core/Game.js";

const cnv = document.querySelector('#cnv');

cnv.width  = window.innerWidth;
cnv.height = window.innerHeight;

window.cnv = cnv;

Game.start(cnv);