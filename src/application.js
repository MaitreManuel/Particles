import Stats from 'stats.js';
import Particle from './Particle';

import './style.css';

const canvas = document.querySelector('#canvas');
const count = document.querySelector('#count');
const label = document.querySelector('#label');
const resetPart = document.querySelector('.reset');
const ctx = canvas.getContext('2d');
const WIRE_DIST = 200;
const MAX_PARTICLES = 2000;
const NB_PARTICLES = 150;
const NB_ADDED = 50;
const particles = [];

var mouseX = 9999;
var mouseY = 9999;

const stats = new Stats();

const animate = () => {
    stats.begin();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.draw(ctx);
        p.drawLine(ctx, mouseX, mouseY, WIRE_DIST);
        p.update(canvas);
    });

    stats.end();
    requestAnimationFrame(animate);
};

const addParticles = (e) => {
    if(particles.length + NB_ADDED <= MAX_PARTICLES) {
        for (var i = 0; i < NB_ADDED ; i++) {
            particles.push(new Particle(canvas, e.x, e.y, randomColor()));
        }

        setCounter();
    } else {
        playDenisBrogniart();
        document.querySelector("canvas").style.backgroundImage = "url('./public/ah.gif')";
        setTimeout(() => {
            document.querySelector("canvas").removeAttribute("style");
        }, 900);
    }
};

const create = () => {
    for (var i = 0; i < NB_PARTICLES; i++) {
        particles.push(new Particle(canvas, null, null, randomColor()));
    }

    setCounter();
};

const mousePosition = (e) => {
    mouseX = e.x;
    mouseY = e.y;
};

const playDenisBrogniart = () => {
    var audio = document.getElementById("ah");

    audio.volume = 1;
    audio.play();
}

const randomColor = () => {
    return '#'+Math.floor(Math.random() * 15456415 - 1000).toString(16);
};

const reset = () => {
    particles.splice(NB_PARTICLES);

    setCounter();
};

const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

const setCounter = () => {
    count.innerText = particles.length;
    label.innerText = particles.length > 1 ? 'particles' : 'particle';
};

create();
resize();
requestAnimationFrame(animate);

document.body.appendChild( stats.dom );
window.addEventListener('resize', resize);
canvas.addEventListener('click', addParticles);
canvas.addEventListener('mousemove', mousePosition);
resetPart.addEventListener('click', reset);
