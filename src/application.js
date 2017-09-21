import Particle from './Particle';
import './style.css';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const NB_PARTICLES = 100;
const particles = [];

ctx.fillStyle = 'white';

for (var i = 0; i < NB_PARTICLES; i++) {
    particles.push(new Particle(canvas));
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update(canvas);
        p.draw(ctx);
    });

    requestAnimationFrame(animate);
};

animate();
