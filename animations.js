const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#00d4ff' : '#7b2cbf';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.beginPath();
                ctx.strokeStyle = '#00d4ff';
                ctx.globalAlpha = 0.1 * (1 - distance / 150);
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    connectParticles();
    requestAnimationFrame(animateParticles);
}

animateParticles();

const nav = document.querySelector('nav');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});

const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
checkReveal();

const statNumbers = document.querySelectorAll('.stat-number');

function animateNumbers() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateNumber = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target;
            }
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateNumber();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(stat);
    });
}

animateNumbers();

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your message has been sent. We'll be in touch soon!`);
    contactForm.reset();
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    canvas.style.display = 'none';
}

// Create spinning cubes
function createCubes() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 2; i++) {
        const cube = document.createElement('div');
        cube.className = 'js-cube ' + (i === 0 ? 'left' : 'right');
        
        for (let j = 0; j < 6; j++) {
            const face = document.createElement('div');
            face.className = 'cube-face';
            cube.appendChild(face);
        }
        
        hero.appendChild(cube);
    }
}

createCubes();

let cubeRotation = 0;
function animateCubes() {
    const cubes = document.querySelectorAll('.js-cube');
    cubes.forEach((cube, index) => {
        cubeRotation += 0.5;
        cube.style.transform = `rotateX(-20deg) rotateY(${cubeRotation * (index === 0 ? 1 : -1)}deg)`;
    });
    requestAnimationFrame(animateCubes);
}

animateCubes();
