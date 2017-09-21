import Stats from 'stats.js';
import Particle from './Particle';

import './style.css';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const NB_PARTICLES = 100;
const particles = [];

for (var i = 0; i < NB_PARTICLES; i++) {
    particles.push(new Particle(canvas));
}

const stats = new Stats();
document.body.appendChild( stats.dom );

const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

resize();
window.addEventListener('resize', resize);

const animate = () => {
    stats.begin();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.draw(ctx);
        p.update(canvas);
    });

    stats.end();
    requestAnimationFrame(animate);
};

// resize();
requestAnimationFrame(animate);
