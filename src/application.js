(() => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    const NB_PARTICLES = 10000;
    const particles = [];

    ctx.fillStyle = 'white';

    class Particle {
        constructor() {
            this.w = 10,
            this.h = 10,
            this.x = Math.ceil(Math.random() * canvas.width),
            this.y = Math.ceil(Math.random() * canvas.height),
            this.speedX = Math.ceil(Math.random()) > 0.5 ? Math.ceil(Math.random()) : -Math.ceil(Math.random()),
            this.speedY = Math.ceil(Math.random()) > 0.5 ? Math.ceil(Math.random()) : -Math.ceil(Math.random()),
            this.angleX = Math.ceil(Math.random()) > 0.5 ? Math.ceil(Math.random()) : -Math.ceil(Math.random()),
            this.angleY = Math.ceil(Math.random()) > 0.5 ? Math.ceil(Math.random()) : -Math.ceil(Math.random());
        }

        update() {
            this.x += this.speedX + this.angleX;
            this.y += this.speedY + this.angleY;
            if (this.x < 0 || this.x + this.w > canvas.width) {
                const sign = this.x < 0 ? 1 : -1;
                this.angleX = Math.ceil(Math.random() * 2 * sign);
                this.speedX = -this.speedX;
            }
            if (this.y < 0 || this.y + this.h > canvas.height) {
                const sign = this.y < 0 ? 1 : -1;
                this.angleY = Math.ceil(Math.random() * 2 * sign);
                this.speedY = -this.speedY;
            }
        }

        draw() {
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    for (var i = 0; i < NB_PARTICLES; i++) {
        particles.push(new Particle());
    }

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.update() ;
            p.draw() ;
        });

        requestAnimationFrame(animate);
    };

    animate();
})();
