// FEWINFOS Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // Preloader
    hidePreloader();
    
    // Navigation
    initNavigation();
    
    // Counter animation
    initCounters();
    
    // Page specific initializations
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            initHomePage();
            break;
        case 'services':
            loadServices();
            break;
        case 'products':
            loadProducts();
            break;
        case 'courses':
            loadCourses();
            break;
        case 'events':
            loadEvents();
            break;
        case 'team':
            loadTeam();
            break;
        case 'contact':
            initContactForm();
            break;
    }
});

// Get current page name
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'index';
    return page;
}

// Preloader
function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    }
}

// Navigation
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.querySelector('.navbar');
    
    // Hamburger menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking nav links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    // Intersection Observer for counters
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.textContent === '0') {
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Home Page
function initHomePage() {
    // Initialize particles if library is loaded
    if (typeof particlesJS !== 'undefined') {
        initParticles();
    }
}

// Particles JS Configuration
function initParticles() {
    particlesJS('hero-particles', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#2c5fd0'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#2c5fd0',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            }
        },
        retina_detect: true
    });
}

// Load Services
function loadServices() {
    const servicesList = document.getElementById('servicesList');
    if (!servicesList || !websiteData) return;
    
    servicesList.innerHTML = '';
    
    websiteData.services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-detail-card';
        serviceCard.setAttribute('data-aos', 'fade-up');
        serviceCard.setAttribute('data-aos-delay', index * 100);
        
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <div class="service-info">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <div class="tech-stack">
                    ${service.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>
        `;
        
        servicesList.appendChild(serviceCard);
    });
}

// Load Products
function loadProducts() {
    const productsList = document.getElementById('productsList');
    if (!productsList || !websiteData) return;
    
    productsList.innerHTML = '';
    
    websiteData.projects.forEach((project, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-aos', 'fade-up');
        productCard.setAttribute('data-aos-delay', index * 100);
        
        productCard.innerHTML = `
            <div class="product-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <ul class="product-features">
                    ${project.features.map(feature => 
                        `<li><i class="fas fa-check"></i>${feature}</li>`
                    ).join('')}
                </ul>
                <a href="${project.github}" class="product-link" target="_blank">
                    <i class="fab fa-github"></i>
                    View on GitHub
                </a>
            </div>
            <div class="product-visual">
                <div class="product-icon-large">
                    <i class="${project.icon}"></i>
                </div>
            </div>
        `;
        
        productsList.appendChild(productCard);
    });
}

// Load Courses
function loadCourses() {
    const coursesList = document.getElementById('coursesList');
    if (!coursesList || !websiteData) return;
    
    coursesList.innerHTML = '';
    
    websiteData.courses.forEach((course, index) => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.setAttribute('data-aos', 'fade-up');
        courseCard.setAttribute('data-aos-delay', index * 100);
        
        // Generate star rating
        const fullStars = Math.floor(course.rating);
        const hasHalfStar = course.rating % 1 >= 0.5;
        let starsHTML = '';
        
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }
        
        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}">
                <span class="course-level">${course.level}</span>
            </div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <div class="course-meta">
                    <span class="course-rating" style="color: #ffb900;">
                        ${starsHTML} ${course.rating}
                    </span>
                    <span class="course-duration"><i class="far fa-clock"></i> ${course.duration}</span>
                </div>
                <p>${course.description}</p>
                <div class="course-price">
                    <span class="course-price-old">${course.originalPrice}</span>
                    ${course.price}
                    <span class="discount-badge" style="background: #ff4757; color: white; padding: 0.25rem 0.5rem; border-radius: 5px; font-size: 0.8rem; margin-left: 0.5rem;">${course.discount}% OFF</span>
                </div>
                <ul class="course-features">
                    ${course.features.map(feature => 
                        `<li><i class="fas fa-check"></i>${feature}</li>`
                    ).join('')}
                </ul>
                <button class="course-btn" onclick="enrollCourse('${course.title}')">
                    <i class="fas fa-shopping-cart"></i>
                    Enroll Now
                </button>
            </div>
        `;
        
        coursesList.appendChild(courseCard);
    });
}

// Enroll Course
function enrollCourse(courseName) {
    showToast(`Interested in "${courseName}"? Please contact us for enrollment details.`);
}

// Load Events
function loadEvents() {
    loadEventCategory('liveEventsList', websiteData.events.liveEvents, 'live');
    loadEventCategory('upcomingEventsList', websiteData.events.upcomingEvents, 'upcoming');
    loadEventCategory('pastEventsList', websiteData.events.pastEvents, 'past');
}

function loadEventCategory(containerId, events, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (!events || events.length === 0) {
        const emptyCard = document.createElement('div');
        emptyCard.className = 'event-card empty-events';
        
        let message, icon;
        if (type === 'live') {
            message = 'No Live Events Right Now';
            icon = 'fas fa-broadcast-tower';
        } else if (type === 'upcoming') {
            message = 'No Upcoming Events';
            icon = 'fas fa-calendar-alt';
        } else {
            message = 'No Past Events Yet';
            icon = 'fas fa-history';
        }
        
        emptyCard.innerHTML = `
            <i class="${icon}"></i>
            <h4>${message}</h4>
            <p>Stay tuned for exciting events!</p>
        `;
        
        container.appendChild(emptyCard);
        return;
    }
    
    events.forEach((event, index) => {
        const eventCard = document.createElement('div');
        eventCard.className = `event-card ${type === 'live' ? 'live' : ''}`;
        eventCard.setAttribute('data-aos', 'fade-up');
        eventCard.setAttribute('data-aos-delay', index * 100);
        
        let imageHTML = '';
        if (type === 'past' && event.image) {
            imageHTML = `<img src="${event.image}" alt="${event.title}" class="event-img">`;
        }
        
        let badgeHTML = '';
        if (type === 'live') {
            badgeHTML = '<div class="live-badge"><span>LIVE</span></div>';
        }
        
        eventCard.innerHTML = `
            ${badgeHTML}
            ${imageHTML}
            <div style="padding: 2rem;">
                <h4>${event.title}</h4>
                <p class="event-date"><i class="far fa-calendar-alt"></i> ${event.date}</p>
                <p class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                <p>${event.description}</p>
                <a href="${event.link}" class="event-btn" target="_blank">
                    <i class="${type === 'live' ? 'fas fa-video' : type === 'past' ? 'fas fa-photo-video' : 'fas fa-ticket-alt'}"></i>
                    ${event.buttonText}
                </a>
            </div>
        `;
        
        container.appendChild(eventCard);
    });
}

// Load Team
function loadTeam() {
    loadLeadership();
    loadTeamMembers();
}

function loadLeadership() {
    const container = document.getElementById('leadershipContainer');
    if (!container || !websiteData) return;
    
    const leader = websiteData.team.leadership;
    
    container.innerHTML = `
        <div class="leader-card" data-aos="fade-up">
            <div class="leader-image">
                <img src="${leader.image}" alt="${leader.name}">
            </div>
            <div class="leader-info">
                <h3>${leader.name}</h3>
                <p class="leader-position">${leader.position}</p>
                <ul class="leader-goals">
                    ${leader.goals.map(goal => 
                        `<li><i class="fas fa-bullseye"></i>${goal}</li>`
                    ).join('')}
                </ul>
                <div class="social-links">
                    <a href="${leader.socials.github}" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="${leader.socials.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="${leader.socials.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    `;
}

function loadTeamMembers() {
    const container = document.getElementById('teamMembersContainer');
    if (!container || !websiteData) return;
    
    container.innerHTML = '';
    
    websiteData.team.members.forEach((member, index) => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-member-card';
        memberCard.setAttribute('data-aos', 'fade-up');
        memberCard.setAttribute('data-aos-delay', index * 100);
        
        memberCard.innerHTML = `
            <div class="member-image">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <p class="member-position">${member.position}</p>
                <div class="social-links">
                    <a href="${member.socials.github}" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="${member.socials.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        `;
        
        container.appendChild(memberCard);
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate
        if (!name || !email || !subject || !message) {
            showToast('Please fill in all fields', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }
        
        // Show loading
        const submitBtn = form.querySelector('.btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate sending (in real app, you'd send to server)
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            form.reset();
            
            // Show success message
            if (formSuccess) {
                form.style.display = 'none';
                formSuccess.classList.add('active');
            } else {
                showToast('Message sent successfully!', 'success');
            }
        }, 1500);
    });
}

// Validate Email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 1rem 1.5rem;
        background: ${type === 'error' ? '#e74c3c' : '#2ecc71'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    toast.innerHTML = `
        <i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'check-circle'}"></i>
        ${message}
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .toast {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 500;
    }
`;
document.head.appendChild(style);
