// ===== DOM ELEMENTS =====
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const currentYear = document.getElementById('currentYear');
const typingText = document.getElementById('typingText');

// ===== TYPING ANIMATION =====
const texts = [
    "Développeur Full-Stack",
    "Designer UX/UI",
    "Créateur de solutions digitales",
    "Passionné par l'innovation"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause à la fin
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause avant nouveau texte
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// ===== DARK/LIGHT THEME =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const icon = savedTheme === 'dark' ? 'fa-sun' : 'fa-moon';
    themeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
    if (themeToggleMobile) {
        themeToggleMobile.innerHTML = `<i class="fas ${icon}"></i> ${savedTheme === 'dark' ? 'Mode Clair' : 'Mode Sombre'}`;
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const icon = newTheme === 'dark' ? 'fa-sun' : 'fa-moon';
    themeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
    if (themeToggleMobile) {
        themeToggleMobile.innerHTML = `<i class="fas ${icon}"></i> ${newTheme === 'dark' ? 'Mode Clair' : 'Mode Sombre'}`;
    }
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    menuToggle.innerHTML = mobileMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
}

// ===== BACK TO TOP =====
function handleScroll() {
    // Back to top button
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Navbar shadow on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
}

// ===== ANIMATE SKILL BARS =====
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level-bar');
    
    skillBars.forEach(bar => {
        const width = bar.parentElement.getAttribute('data-level');
        bar.style.width = width + '%';
    });
}

// ===== LOAD SKILLS DATA =====
function loadSkills() {
    const skills = [
        { name: 'HTML/CSS', level: 95, icon: 'fab fa-html5' },
        { name: 'PHP', level: 90, icon: 'fab fa-php' },
        { name: 'JavaScript', level: 70, icon: 'fab fa-js' },
        { name: 'React.js', level: 65, icon: 'fab fa-react' },
        { name: 'Node.js', level: 70, icon: 'fab fa-node-js' },
        { name: 'UI/UX Design', level: 88, icon: 'fas fa-palette' },
        { name: 'Git & GitHub', level: 72, icon: 'fab fa-git-alt' },
        { name: 'Responsive Design', level: 95, icon: 'fas fa-mobile-alt' },
        { name: 'Python', level: 75, icon: 'fab fa-python' }
    ];
    
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = '';
    
    skills.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.style.animationDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <h3 class="skill-name">${skill.name}</h3>
            <div class="skill-level" data-level="${skill.level}">
                <div class="skill-level-bar"></div>
            </div>
            <p class="skill-percent">${skill.level}%</p>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
    
    // Animate bars after a short delay
    setTimeout(animateSkillBars, 500);
}

// ===== LOAD PROJECTS DATA =====
function loadProjects() {
    const projects = [
        {
            title: 'E-commerce Moderne',
            description: 'Plateforme e-commerce avec React, Node.js et paiement sécurisé Stripe.',
            category: 'web',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Application Fitness',
            description: 'Application mobile de suivi d\'entraînement avec React Native.',
            category: 'mobile',
            tech: ['React Native', 'Firebase', 'Redux'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Dashboard Analytics',
            description: 'Tableau de bord interactif pour visualisation de données en temps réel.',
            category: 'web',
            tech: ['Vue.js', 'D3.js', 'Express'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Identité Visuelle',
            description: 'Refonte complète de l\'identité visuelle pour une startup tech.',
            category: 'design',
            tech: ['Figma', 'Adobe Suite', 'Illustrator'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Réseau Social',
            description: 'Réseau social spécialisé pour les développeurs avec partage de code.',
            category: 'web',
            tech: ['Next.js', 'GraphQL', 'PostgreSQL'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Application Météo',
            description: 'Application météo élégante avec prévisions sur 7 jours et géolocalisation.',
            category: 'mobile',
            tech: ['Flutter', 'API REST', 'Google Maps'],
            demoLink: '#',
            codeLink: '#'
        }
    ];
    
    const projectsGrid = document.querySelector('.projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    function renderProjects(filter = 'all') {
        projectsGrid.innerHTML = '';
        
        const filteredProjects = filter === 'all' 
            ? projects 
            : projects.filter(project => project.category === filter);
        
        filteredProjects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.style.animationDelay = `${index * 0.1}s`;
            
            projectCard.innerHTML = `
                <div class="project-img">
                    <i class="fas fa-laptop-code"></i>
                </div>
                <div class="project-content">
                    <span class="project-category">${project.category}</span>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.demoLink}" class="project-link" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Démo
                        </a>
                        <a href="${project.codeLink}" class="project-link" target="_blank">
                            <i class="fab fa-github"></i> Code
                        </a>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Initial render
    renderProjects();
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            const filter = btn.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
}

// ===== ANIMATE STATS =====
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 16);
    });
}

// ===== FORM SUBMISSION =====
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
    }
    
    // In a real application, you would send this to a server
    // For now, just show a success message
    alert(`Merci ${name}! Votre message a été envoyé. Je vous répondrai dès que possible à ${email}.`);
    
    // Reset form
    contactForm.reset();
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    currentYear.textContent = new Date().getFullYear();

    // Démarrer l'animation du caption
    initTypingCaption();
    
    // Initialize theme
    initTheme();
    
    // Start typing animation
    setTimeout(typeEffect, 1000);
    
    // Load dynamic content
    loadSkills();
    loadProjects();
    
    // Animate stats when in viewport
    const aboutSection = document.querySelector('.about');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (aboutSection) {
        observer.observe(aboutSection);
    }
    
    // Event listeners
    themeToggle.addEventListener('click', toggleTheme);
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
    
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Back to top
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== ADDITIONAL EFFECTS =====
// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== LAZY LOADING IMAGES =====
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
}, { rootMargin: '0px 0px 100px 0px' });

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ===== EMAILJS CONFIGURATION =====
// INITIALISATION - REMPLACEZ AVEC VOTRE PUBLIC KEY
(function() {
    emailjs.init("3cqVMQ5UwJkvu3wH0"); // ← CHANGEZ MOI !
})();

// ===== FORM SUBMISSION =====
async function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation
    if (!name || !email || !subject || !message) {
        showNotification('Veuillez remplir tous les champs.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Veuillez entrer une adresse email valide.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    submitBtn.disabled = true;
    
    try {
        // Send email via EmailJS
        const response = await emailjs.send(
            "service_kemx3x1",     // ← CHANGEZ MOI !
            "template_48smwzh",    // ← CHANGEZ MOI !
            {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                date: new Date().toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            }
        );
        
        // Success
        showNotification('✅ Message envoyé avec succès ! Je vous répondrai dans les 24h.', 'success');
        contactForm.reset();
        
        // Log success (optionnel)
        console.log('Email sent successfully:', response);
        
    } catch (error) {
        // Error handling
        console.error('EmailJS Error:', error);
        
        let errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
        
        if (error.status === 0) {
            errorMessage = 'Problème de connexion. Vérifiez votre internet.';
        } else if (error.status === 400) {
            errorMessage = 'Données du formulaire invalides.';
        }
        
        showNotification(`❌ ${errorMessage}`, 'error');
        
    } finally {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <p>${message}</p>
        </div>
        <button class="notification-close" aria-label="Fermer">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Auto remove after 5 seconds
    const autoRemove = setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        clearTimeout(autoRemove);
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
    
    // Close on click outside
    notification.addEventListener('click', (e) => {
        if (e.target === notification) {
            clearTimeout(autoRemove);
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    });
}

// ===== TYPING CAPTION ANIMATION =====
function initTypingCaption() {
    const captionTexts = [
        "Disponible pour de nouveaux projets",
        "N'hésitez pas à me contacter",
        "Créons quelque chose d'extraordinaire",
        "Innovons ensemble"
    ];
    
    const typingCaption = document.getElementById('typingCaption');
    if (!typingCaption) return;
    
    let captionIndex = 0;
    let charIndex = 0;
    let isDeletingCaption = false;
    let captionSpeed = 50;
    
    function typeCaption() {
        const currentText = captionTexts[captionIndex];
        
        if (isDeletingCaption) {
            typingCaption.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            captionSpeed = 30;
        } else {
            typingCaption.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            captionSpeed = 70;
        }
        
        if (!isDeletingCaption && charIndex === currentText.length) {
            isDeletingCaption = true;
            captionSpeed = 2000; // Pause avant effacement
        } else if (isDeletingCaption && charIndex === 0) {
            isDeletingCaption = false;
            captionIndex = (captionIndex + 1) % captionTexts.length;
            captionSpeed = 500; // Pause avant nouveau texte
        }
        
        setTimeout(typeCaption, captionSpeed);
    }
    
    // Démarrer après un délai
    setTimeout(typeCaption, 1000);
}