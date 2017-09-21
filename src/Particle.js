class Particle {
    constructor(canvas) {
        this.color = '#ffffff';
        this.w = 10,
        this.h = 10,
        this.x = Math.random() * 5 + 5,
        this.y = Math.random() * 5 + 5,
        this.speedX = Math.random() > 0.5 ? Math.random() : -Math.random(),
        this.speedY = Math.random() > 0.5 ? Math.random() : -Math.random(),
        this.angleX = Math.random() > 0.5 ? Math.random() : -Math.random(),
        this.angleY = Math.random() > 0.5 ? Math.random() : -Math.random();
    }

    update(canvas) {
        this.x += this.speedX + this.angleX;
        this.y += this.speedY + this.angleY;
        if (this.x < 0 || this.x + this.w > canvas.width) {
            const sign = this.x < 0 ? 1 : -1;
            this.angleX = Math.random() * 2 * sign;
            this.speedX = -this.speedX;
        }
        if (this.y < 0 || this.y + this.h > canvas.height) {
            const sign = this.y < 0 ? 1 : -1;
            this.angleY = Math.random() * 2 * sign;
            this.speedY = -this.speedY;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

export default Particle;
