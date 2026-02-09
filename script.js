// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Button Scroll to Projects
const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Animated Counter for Statistics
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 50);
}

// Skill Progress Bar Animation
function animateSkillBars() {
    const skillProgress = document.querySelectorAll('.skill-progress');
    skillProgress.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.setProperty('--progress-width', progress + '%');
        bar.style.width = progress + '%';
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    if (name.trim() && email.trim() && message.trim()) {
        formMessage.textContent = '✓ Message sent successfully!';
        formMessage.classList.add('success');
        formMessage.classList.remove('error');
        
        contactForm.reset();
        
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.classList.remove('success');
        }, 3000);
    } else {
        formMessage.textContent = '✗ Please fill in all fields!';
        formMessage.classList.add('error');
        formMessage.classList.remove('success');
    }
});

// Project Modal Functionality
const projectLinks = document.querySelectorAll('.project-link');
const projectModals = document.querySelectorAll('.project-modal');
const modalCloseButtons = document.querySelectorAll('.modal-close');

projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('data-modal');
        const modal = document.getElementById('modal-' + modalId);
        if (modal) {
            modal.classList.add('active');
        }
    });
});

modalCloseButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.project-modal');
        if (modal) {
            modal.classList.remove('active');
        }
    });
});

projectModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Trigger counter animation for stats
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
            }
        }
    });
}, observerOptions);

const skillCards = document.querySelectorAll('.skill-card');
const projectCards = document.querySelectorAll('.project-card');
const statNumbers = document.querySelectorAll('.stat-number');

skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

statNumbers.forEach(stat => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(20px)';
    stat.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(stat);
});

// Animate skill bars when they come into view
setTimeout(() => {
    animateSkillBars();
}, 500);

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Keyboard Navigation for Modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        projectModals.forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

// Add console message
console.log('%c Welcome to My Portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c Feel free to explore and get in touch!', 'color: #764ba2; font-size: 14px;');
