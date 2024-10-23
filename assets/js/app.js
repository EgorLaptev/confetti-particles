import Game from "./core/Game.js";
import Entity from "./core/Entities/Entity.js";

const cnv = document.querySelector('#cnv');

cnv.width  = window.innerWidth;
cnv.height = window.innerHeight;

window.cnv = cnv;

Game.start(cnv);

const countInput = document.getElementById('count');

countInput.addEventListener('input', e => {
    console.log(e.target.value)
    Entity.list = []
    Entity.generate(e.target.value)
})