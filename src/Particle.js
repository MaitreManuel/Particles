class Particle {
    constructor(canvas) {
        this.w = 10,
        this.h = 10,
        this.x = Math.ceil(Math.random() * canvas.width),
        this.y = Math.ceil(Math.random() * canvas.height),
        this.speedX = Math.ceil(Math.random()) > 0.5 ? Math.ceil(Math.random()) : -Math.ceil(Math.random()),
        this.speedY = Math.ceil(Math.random()) > 0.5 ? Math.ceil(Math.random()) : -Math.ceil(Math.random()),
        this.angleX = Math.ceil(Math.random()) > 0.5 ? Math.ceil(Math.random()) : -Math.ceil(Math.random()),
        this.angleY = Math.ceil(Math.random()) > 0.5 ? Math.ceil(Math.random()) : -Math.ceil(Math.random());
    }

    update(canvas) {
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

    draw(ctx) {
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

export default Particle;
