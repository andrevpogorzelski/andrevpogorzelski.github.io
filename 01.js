const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let animationStarted = false;
let animationId = null;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y, tx, ty) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.tx = tx;
        this.ty = ty;
        this.size = 1.5;
        this.speed = 0.02;}

    update() {
        this.x += (this.tx - this.x) * this.speed;
        this.y += (this.ty - this.y) * this.speed;}

    draw() {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();}}

function createHeartParticles() {
    particles = [];
    const points = [];
    for (let t = 0; t < Math.PI * 2; t += 0.01) {
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        points.push({x, y});}

    const scale = 20;
    const offsetX = canvas.width / 2;
    const offsetY = canvas.height / 2;

    for (const p of points) {
        const px = p.x * scale + offsetX;
        const py = -p.y * scale + offsetY;
        particles.push(new Particle(px, py, px, py));}}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
        p.update();
        p.draw();}

    animationId = requestAnimationFrame(animate);}

document.getElementById('button').addEventListener('click', () => {
    if (!animationStarted) {
        animationStarted = true;
        createHeartParticles();
        animate();
        document.getElementById('button').style.display = 'none';

        setTimeout(() => {
            cancelAnimationFrame(animationId);
            document.getElementById('phrase').style.display = 'block';
            document.getElementById('secondButton').style.display = 'inline-block'; // importante!
        }, 5000);}});


window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (animationStarted) {
        createHeartParticles();}});
