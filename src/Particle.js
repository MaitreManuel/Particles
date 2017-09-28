class Particle {
    constructor(canvas, x, y, color, r) {
        this.color = color === undefined || null ? '#ffffff' : color,
        this.r = r === undefined || null ? 2 : r,
        this.x = x === undefined || null ? Math.random() * 5 + 5 : x,
        this.y = y === undefined || null ? Math.random() * 5 + 5 : y,
        this.speedX = Math.random() > 0.5 ? Math.random() : -Math.random(),
        this.speedY = Math.random() > 0.5 ? Math.random() : -Math.random(),
        this.angleX = Math.random() > 0.5 ? Math.random() : -Math.random(),
        this.angleY = Math.random() > 0.5 ? Math.random() : -Math.random();
    }

    update(canvas) {
        this.x += this.speedX + this.angleX;
        this.y += this.speedY + this.angleY;
        if (this.x < 0 || this.x + this.r > canvas.width) {
            const sign = this.x < 0 ? 1 : -1;
            this.angleX = Math.random() * 2 * sign;
            this.speedX = -this.speedX;
        }
        if (this.y < 0 || this.y + this.r > canvas.height) {
            const sign = this.y < 0 ? 1 : -1;
            this.angleY = Math.random() * 2 * sign;
            this.speedY = -this.speedY;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    }

    drawLine(ctx, mouseX, mouseY, wire_dist) {
        const distance = Math.hypot(this.x - mouseX, this.y - mouseY);

        if(distance < wire_dist ) {
            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(this.x, this.y);
            ctx.strokeStyle = this.color;
            // ctx.globalAlpha = 50 / distance - 0.3;
            ctx.stroke();
        }
    }
}

export default Particle;
