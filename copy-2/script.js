// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 130,
            density: {
                enable: true,
                value_area: 700
            }
        },
        color: {
            value: ["#2c5fd0", "#4a90e2", "#1a1a1a"]
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#2c5fd0",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: ["grab", "bubble"]
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.8
                }
            },
            bubble: {
                distance: 200,
                size: 6,
                duration: 0.3,
                opacity: 0.8,
                speed: 3
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when nav links are clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Add scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateX(-50%)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.transform = 'translate(-50%, -100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateX(-50%)';
    }
    lastScroll = currentScroll;
});

const heroContent = document.querySelector('.hero-content');
const hexagons = document.querySelectorAll('.hexagon');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Parallax effect for hero content
    const moveX = (clientX - innerWidth / 2) / 30;
    const moveY = (clientY - innerHeight / 2) / 30;
    heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
    
    // Move hexagons
    hexagons.forEach((hex, index) => {
        const speed = index * 0.2 + 1;
        hex.style.transform = `
            translate(
                ${moveX * speed}px,
                ${moveY * speed}px
            ) rotate(${moveX + moveY}deg)
        `;
    });
});

// Glitch effect on hover
const glitchTexts = document.querySelectorAll('.glitch');
glitchTexts.forEach(text => {
    text.addEventListener('mouseover', () => {
        text.style.animation = 'none';
        text.offsetHeight; // Trigger reflow
        text.style.animation = 'glitchText 0.3s infinite';
    });
    
    text.addEventListener('mouseleave', () => {
        text.style.animation = 'glitchText 3s infinite';
    });
});

// Tech elements hover effect
const elements = document.querySelectorAll('.element');
elements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = element.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        element.style.transform = `
            perspective(1000px)
            rotateX(${(y - 0.5) * 10}deg)
            rotateY(${(x - 0.5) * 10}deg)
            scale(1.1)
        `;
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'none';
    });
});

// Add smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle service cards scrolling
const servicesGrid = document.querySelector('.services-grid');
if (servicesGrid && window.innerWidth <= 768) {
    let startX;
    let scrollLeft;
    let isDown = false;

    servicesGrid.addEventListener('mousedown', e => {
        isDown = true;
        startX = e.pageX - servicesGrid.offsetLeft;
        scrollLeft = servicesGrid.scrollLeft;
    });

    servicesGrid.addEventListener('mouseleave', () => {
        isDown = false;
    });

    servicesGrid.addEventListener('mouseup', () => {
        isDown = false;
    });

    servicesGrid.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - servicesGrid.offsetLeft;
        const walk = (x - startX) * 2;
        servicesGrid.scrollLeft = scrollLeft - walk;
    });

    // Improved touch handling for services grid
    servicesGrid.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        scrollLeft = servicesGrid.scrollLeft;
        isDown = true;
        isHorizontalScroll = null;
        scrollDirectionDecided = false;
    }, { passive: true });

    servicesGrid.addEventListener('touchmove', e => {
        if (!isDown) return;
        
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        
        // Calculate the horizontal and vertical distances
        const diffX = Math.abs(startX - touchX);
        const diffY = Math.abs(startY - touchY);
        
        // Only make a decision once per touch event to avoid flip-flopping
        if (!scrollDirectionDecided) {
            // Heavily favor vertical scrolling - only consider horizontal scrolling if
            // horizontal movement is significantly greater than vertical
            isHorizontalScroll = diffX > diffY * 2.5;
            scrollDirectionDecided = true;
            
            if (isHorizontalScroll) {
                servicesGrid.classList.add('dragging');
            }
        }
        
        // Only handle horizontal scrolling if we've determined it's horizontal
        if (isHorizontalScroll) {
            e.preventDefault();
            const x = touchX - servicesGrid.offsetLeft;
            const walk = (startX - touchX);
            servicesGrid.scrollLeft = scrollLeft + walk;
        }
        // For vertical movement, let browser handle scrolling naturally
        
    }, { passive: false });

    servicesGrid.addEventListener('touchend', () => {
        isDown = false;
        isHorizontalScroll = null;
        scrollDirectionDecided = false;
        servicesGrid.classList.remove('dragging');
    }, { passive: true });

    servicesGrid.addEventListener('touchcancel', () => {
        isDown = false;
        isHorizontalScroll = null;
        scrollDirectionDecided = false;
        servicesGrid.classList.remove('dragging');
    }, { passive: true });
}

// Handle team members cards scrolling with mouse drag
const teamMembers = document.querySelector('.team-members');
if (teamMembers && window.innerWidth <= 768) {
    let startX;
    let scrollLeft;
    let isDown = false;

    teamMembers.addEventListener('mousedown', e => {
        isDown = true;
        startX = e.pageX - teamMembers.offsetLeft;
        scrollLeft = teamMembers.scrollLeft;
        
        // Change cursor to grabbing for visual feedback
        teamMembers.style.cursor = 'grabbing';
        teamMembers.classList.add('dragging');
    });

    teamMembers.addEventListener('mouseleave', () => {
        isDown = false;
        teamMembers.style.cursor = '';
        teamMembers.classList.remove('dragging');
    });

    teamMembers.addEventListener('mouseup', () => {
        isDown = false;
        teamMembers.style.cursor = '';
        teamMembers.classList.remove('dragging');
    });

    teamMembers.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - teamMembers.offsetLeft;
        const walk = (x - startX) * 2;
        teamMembers.scrollLeft = scrollLeft - walk;
    });
}

// Service navigation functionality
const prevBtnNav = document.querySelector('.prev-service');
const nextBtnNav = document.querySelector('.next-service');
const servicesGridNav = document.querySelector('.services-grid');

if (prevBtnNav && nextBtnNav && servicesGridNav) {
    const scrollAmountNav = window.innerWidth <= 768 ? servicesGridNav.clientWidth * 0.85 + 24 : 0;

    nextBtnNav.addEventListener('click', () => {
        servicesGridNav.scrollBy({
            left: scrollAmountNav,
            behavior: 'smooth'
        });
    });

    prevBtnNav.addEventListener('click', () => {
        servicesGridNav.scrollBy({
            left: -scrollAmountNav,
            behavior: 'smooth'
        });
    });

    // Hide navigation buttons on desktop
    function updateNavVisibility() {
        const isMobile = window.innerWidth <= 768;
        prevBtnNav.style.display = isMobile ? 'flex' : 'none';
        nextBtnNav.style.display = isMobile ? 'flex' : 'none';
    }

    // Initial check and listen for window resize
    updateNavVisibility();
    window.addEventListener('resize', updateNavVisibility);
}

// Scroll animations
function createObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all animated elements
    document.querySelectorAll('.scroll-animate').forEach(element => {
        element.classList.add('scroll-hidden');
        observer.observe(element);
    });
}

// Add counter animation function
function animateCounters() {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // The lower the faster
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                let count = 0;
                
                // Only animate if not already animated
                if (parseInt(counter.textContent) === 0) {
                    const updateCount = () => {
                        const increment = target / speed;
                        
                        if (count < target) {
                            count += increment;
                            counter.textContent = Math.ceil(count);
                            setTimeout(updateCount, 1);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCount();
                }
                
                // Unobserve after animation
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.4 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Loader functionality
function initLoader() {
    const loader = document.querySelector('.page-loader');
    const progressBar = document.querySelector('.progress-bar');
    
    if (!loader || !progressBar) return;
    
    // Simulate progress
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            
            // Add small delay before hiding loader
            setTimeout(() => {
                loader.classList.add('fade-out');
                
                // Remove loader from DOM after animation completes
                setTimeout(() => {
                    loader.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Enable scrolling
                }, 600);
            }, 300);
        } else {
            width += Math.random() * 5;
            if (width > 100) width = 100;
            progressBar.style.width = width + '%';
        }
    }, 100);
    
    // Force loader to hide if it takes too long (10 seconds)
    setTimeout(() => {
        if (!loader.classList.contains('fade-out')) {
            loader.classList.add('fade-out');
            
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 600);
        }
    }, 10000);
    
    // Prevent scrolling while loader is active
    document.body.style.overflow = 'hidden';
}

// Initialize loader when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    createObserver();
    populateWebsiteData();
    
    // Initialize contact form functionality
    initContactForm();
});

function populateWebsiteData() {
    // Update counters
    updateCounters();
    
    // Update sections in the correct order
    populateServices();     // Services
    populateProjects();     // Products
    populateCourses();      // Courses
    populateEvents();       // Events
    populateTeam();         // Team
    
    // Initialize animations after population
    animateCounters();
}

function updateCounters() {
    const { yearsOfExperience, happyClients, projectsCompleted, eventsHosted, coursesOffered } = websiteData.counters;
    
    // Update counter data attributes
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        const section = counter.closest('section').id;
        if (section === 'about') {
            counter.setAttribute('data-count', yearsOfExperience);
        } else if (section === 'services') {
            counter.setAttribute('data-count', happyClients);
        } else if (section === 'portfolio') {
            counter.setAttribute('data-count', projectsCompleted);
        } else if (section === 'courses') {
            counter.setAttribute('data-count', coursesOffered);
        } else if (section === 'events') {
            counter.setAttribute('data-count', eventsHosted);
        }
    });
}

function populateServices() {
    const servicesGrid = document.querySelector('.services-grid');
    if (!servicesGrid) return;
    
    // Clear existing content
    servicesGrid.innerHTML = '';
    
    // Add service cards from data
    websiteData.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <div class="service-hover">
                <div class="tech-tags">
                    ${service.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
}

function populateProjects() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;
    
    // Clear existing content
    productsGrid.innerHTML = '';
    
    // Add project cards from data
    websiteData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'product-card';
        if (project.isFeatured) {
            projectCard.classList.add('featured');
        } else {
            projectCard.classList.add('minimal');
        }
        
        // Determine layout based on featured status
        if (project.isFeatured) {
            projectCard.innerHTML = `
                <div class="product-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="product-features">
                        ${project.features.map(feature => `<span>${feature}</span>`).join('')}
                    </div>
                    <a href="${project.github}" class="product-btn" target="_blank">
                        <i class="fab fa-github"></i>
                        View on GitHub
                    </a>
                </div>
                <div class="product-image">
                    <i class="${project.icon}"></i>
                </div>
            `;
        } else {
            projectCard.innerHTML = `
                <div class="product-image">
                    <i class="${project.icon}"></i>
                </div>
                <div class="product-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="product-features">
                        ${project.features.map(feature => `<span>${feature}</span>`).join('')}
                    </div>
                    <a href="${project.github}" class="product-btn" target="_blank">
                        <i class="fab fa-github"></i>
                        View on GitHub
                    </a>
                </div>
            `;
        }
        
        productsGrid.appendChild(projectCard);
    });
}

function populateCourses() {
    const coursesGrid = document.querySelector('.courses-grid');
    if (!coursesGrid) return;
    
    // Clear existing content
    coursesGrid.innerHTML = '';
    
    // Add course cards from data
    websiteData.courses.forEach(course => {
        // Generate random price if not provided (for demo purposes)
        const originalPrice = course.originalPrice || `$${Math.floor(Math.random() * 70) + 130}`;
        const currentPrice = course.price || `$${Math.floor(Math.random() * 50) + 79}`;
        const discount = course.discount || Math.floor(Math.random() * 30) + 20;
        const rating = course.rating || (Math.random() * (5 - 4) + 4).toFixed(1);
        const students = course.students || Math.floor(Math.random() * 8000) + 2000;
        
        // Create a fallback image URL in case the primary one fails
        const fallbackImage = `https://via.placeholder.com/800x450/${course.isFeatured ? '2c5fd0' : '4a90e2'}/ffffff?text=${encodeURIComponent(course.title)}`;
        
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        if (course.isFeatured) {
            courseCard.classList.add('featured');
        }
        
        // Generate HTML for stars based on rating
        let starsHTML = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
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
        
        // Format student numbers (e.g., 1200 to 1.2k)
        const formattedStudents = students >= 1000 ? 
            (students / 1000).toFixed(1) + 'k' : 
            students;
        
        courseCard.innerHTML = `
            ${course.isFeatured ? '<div class="featured-badge" style="position: absolute; top: 0; right: 1.5rem; background: linear-gradient(45deg, #ff7b00, #ff9500); color: white; padding: 0.5rem 1rem; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(255, 123, 0, 0.3); z-index: 10;">Popular</div>' : ''}
            <div class="course-image" style="position: relative; width: 100%; height: 200px; overflow: hidden; background-color: #f0f5ff;">
                <img src="${course.image}" alt="${course.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease;" onerror="this.onerror=null; this.src='${fallbackImage}';">
                <div class="course-level" style="position: absolute; top: 1rem; left: 1rem; background: rgba(0, 0, 0, 0.6); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.8rem; font-weight: 500; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); backdrop-filter: blur(4px); z-index: 2;">${course.level}</div>
            </div>
            <div class="course-content" style="padding: 1.5rem;">
                <h3 style="font-size: 1.4rem; color: var(--primary); margin-bottom: 0.7rem; font-weight: 700;">${course.title}</h3>
                
                <div style="display: flex; align-items: center; gap: 0.3rem; margin-bottom: 1rem;">
                    <div style="color: #ffb900; font-size: 0.95rem; display: flex; gap: 0.1rem;">
                        ${starsHTML}
                    </div>
                    <span style="font-size: 0.9rem; color: #666; margin-left: 0.5rem;">${rating} (${formattedStudents} students)</span>
                </div>
                
                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; border-bottom: 1px solid rgba(44, 95, 208, 0.1); padding-bottom: 1rem;">
                    <p class="course-duration" style="font-size: 0.9rem; color: var(--dark); display: flex; align-items: center; gap: 0.5rem;">
                        <i class="far fa-clock"></i> ${course.duration}
                    </p>
                    <div style="position: relative; font-weight: 700; color: var(--primary); font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 0.9rem; color: #888; text-decoration: line-through; font-weight: normal;">${originalPrice}</span>
                        ${currentPrice}
                        <div style="position: absolute; top: -10px; right: -20px; background: #ff4757; color: white; font-size: 0.7rem; padding: 0.2rem 0.5rem; border-radius: 4px; transform: rotate(10deg); font-weight: 600;">${discount}% OFF</div>
                    </div>
                </div>
                
                <p class="course-description" style="font-size: 1rem; line-height: 1.6; color: var(--dark); margin-bottom: 1.5rem; flex-grow: 1;">${course.description}</p>
                
                <div class="course-features" style="display: flex; flex-direction: column; gap: 0.7rem; margin-bottom: 1.5rem; background: rgba(44, 95, 208, 0.05); padding: 1rem; border-radius: 10px;">
                    ${course.features.map(feature => `
                        <span style="font-size: 0.9rem; color: var(--dark); display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fas fa-check" style="color: var(--primary); font-size: 1rem; background: rgba(44, 95, 208, 0.1); width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border-radius: 50%;"></i> 
                            ${feature}
                        </span>
                    `).join('')}
                </div>
                
                <div style="display: flex; gap: 1rem; width: 100%;">
                    <button class="course-btn enroll-btn" style="flex: 1; padding: 0.8rem 1.5rem; background: var(--primary); color: white; border: none; border-radius: 10px; display: flex; align-items: center; justify-content: center; gap: 0.5rem; cursor: pointer; font-size: 1rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                        <i class="fas fa-shopping-cart"></i>
                        Enroll Now
                    </button>
                    <button class="wishlist-btn" style="width: 45px; height: 45px; border-radius: 10px; border: 1px solid var(--primary); background: transparent; color: var(--primary); display: flex; align-items: center; justify-content: center; cursor: pointer;">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        
        coursesGrid.appendChild(courseCard);
        
        // Add hover effect to course image
        const courseImage = courseCard.querySelector('.course-image img');
        courseCard.addEventListener('mouseenter', () => {
            courseImage.style.transform = 'scale(1.1)';
        });
        courseCard.addEventListener('mouseleave', () => {
            courseImage.style.transform = 'scale(1)';
        });
    });
    
    // Add event listeners to course buttons
    document.querySelectorAll('.enroll-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const courseCard = e.target.closest('.course-card');
            const courseName = courseCard.querySelector('h3').textContent;
            const coursePrice = courseCard.querySelector('.course-content > div:nth-child(3)').textContent.trim().split('\n')[1].trim();
            
            // Show a toast notification instead
            showToast(`You're interested in the "${courseName}" course for ${coursePrice}. Please contact us for enrollment details.`);
        });
    });
    
    // Add wishlist functionality
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const heartIcon = btn.querySelector('i');
            if (heartIcon.classList.contains('far')) {
                heartIcon.classList.remove('far');
                heartIcon.classList.add('fas');
                heartIcon.style.color = '#ff6b6b';
                
                // Show a toast notification
                showToast('Course added to wishlist!');
            } else {
                heartIcon.classList.remove('fas');
                heartIcon.classList.add('far');
                heartIcon.style.color = '';
                
                // Show a toast notification
                showToast('Course removed from wishlist');
            }
            
            // Prevent event from bubbling up to the course card
            e.stopPropagation();
        });
    });
}

// Helper function for toast notifications
function showToast(message) {
    // Check if a toast container exists, if not create one
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        toastContainer.style.position = 'fixed';
        toastContainer.style.bottom = '20px';
        toastContainer.style.right = '20px';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }
    
    // Create and show toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.background = 'rgba(44, 95, 208, 0.9)';
    toast.style.color = 'white';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '8px';
    toast.style.marginTop = '10px';
    toast.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '10px';
    toast.style.transform = 'translateX(100%)';
    toast.style.opacity = '0';
    toast.style.transition = 'all 0.3s ease';
    toast.style.backdropFilter = 'blur(4px)';
    
    toast.innerHTML = `<i class="fas fa-check-circle"></i>${message}`;
    toastContainer.appendChild(toast);
    
    // Show the toast after a small delay
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
        toast.style.opacity = '1';
    }, 100);
    
    // Remove the toast after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function populateTeam() {
    // Populate leadership section
    const leadershipSection = document.querySelector('.leadership');
    if (leadershipSection) {
        const { name, position, image, socials, goals } = websiteData.team.leadership;
        
        const leaderHtml = `
            <div class="leader-simple">
                <div class="leader-img">
                    <img src="${image}" alt="${name}">
                </div>
                <div class="leader-details">
                    <h3>${name}</h3>
                    <span>${position}</span>
                    <div class="leader-socials">
                        <a href="${socials.github}" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="${socials.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="${socials.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                    <div class="leader-goals">
                        <p><i class="fas fa-eye"></i> ${goals[0]}</p>
                        <p><i class="fas fa-flag"></i> ${goals[1]}</p>
                    </div>
                </div>
            </div>
        `;
        
        leadershipSection.innerHTML = leaderHtml;
    }
    
    // Populate team members
    const teamMembersContainer = document.querySelector('.team-members');
    if (teamMembersContainer) {
        teamMembersContainer.innerHTML = '';
        
        websiteData.team.members.forEach((member, index) => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card';
            if (index < 2) memberCard.classList.add('scroll-animate');
            
            memberCard.innerHTML = `
                <div class="member-image">
                    <img src="${member.image}" alt="${member.name}">
                    <div class="social-links">
                        <a href="${member.socials.github}" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="${member.socials.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                        
                    </div>
                </div>
                <h3>${member.name}</h3>
                <span>${member.position}</span>
            `;
            
            teamMembersContainer.appendChild(memberCard);
        });
        
        // Reinitialize team slider after population
        initializeTeamSlider();
    }
}

function populateEvents() {
    // Populate live events
    populateEventColumn('.events-column:nth-child(1)', websiteData.events.liveEvents, true);
    
    // Populate upcoming events
    populateEventColumn('.events-column:nth-child(2)', websiteData.events.upcomingEvents, false);
    
    // Populate past events
    populateEventColumn('.events-column:nth-child(3)', websiteData.events.pastEvents, false, true);
}

function populateEventColumn(selector, eventsArray, isLive = false, isPast = false) {
    const column = document.querySelector(selector);
    if (!column) return;
    
    // Keep the header and remove the events
    const columnHeader = column.querySelector('.column-header');
    column.innerHTML = '';
    column.appendChild(columnHeader);
    
    // Check if we have events to display
    if (!eventsArray || eventsArray.length === 0) {
        // Add a fallback "no events" message
        const noEventsCard = document.createElement('div');
        noEventsCard.className = 'event-card empty-events';
        
        let emptyMessage, emptyIcon, actionText;
        
        if (isLive) {
            emptyMessage = "No Live Events Right Now";
            emptyIcon = "fas fa-broadcast-tower";
            actionText = "Check Back Soon";
        } else if (isPast) {
            emptyMessage = "No Past Events Yet";
            emptyIcon = "fas fa-history";
            actionText = "Stay Tuned";
        } else {
            emptyMessage = "No Upcoming Events";
            emptyIcon = "fas fa-calendar-alt";
            actionText = "Get Notified";
        }
        
        noEventsCard.innerHTML = `
            <div class="empty-events-content">
                <i class="${emptyIcon}"></i>
                <h4>${emptyMessage}</h4>
                <p>We're working on exciting new events.<br>Subscribe to stay updated!</p>
                <a href="#contact" class="event-btn">
                    <i id="sub-icon" class="fas fa-bell"></i>
                    ${actionText}
                </a>
            </div>
        `;
        
        column.appendChild(noEventsCard);
        return;
    }
    
    // Add event cards
    eventsArray.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        if (isLive) eventCard.classList.add('live');
        if (isPast) eventCard.classList.add('past');
        
        let cardContent = '';
        
        // Add live badge if it's a live event
        if (isLive) {
            cardContent += `<div class="live-badge"><span>LIVE</span></div>`;
        }
        
        // Add image if it's a past event
        if (isPast && event.image) {
            cardContent += `<img src="${event.image}" alt="${event.title}" class="event-img">`;
        }
        
        // Add common event details
        cardContent += `
            <h4>${event.title}</h4>
            <p class="event-date"><i class="far fa-calendar-alt"></i> ${event.date}</p>
            <p class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
            <p class="event-description">${event.description}</p>
        `;
        
        // Add appropriate button style
        let btnClass = '';
        if (isLive) btnClass = 'primary-btn';
        else if (isPast) btnClass = 'secondary-btn';
        
        // Add button with icon based on event type
        let btnIcon = isLive ? 'fas fa-video' : isPast ? 'fas fa-photo-video' : 'fas fa-ticket-alt';
        if (event.buttonText === 'Get Notified') btnIcon = 'fas fa-bell';
        
        cardContent += `
            <a href="${event.link}" class="event-btn ${btnClass}">
                <i class="${btnIcon}"></i>
                ${event.buttonText}
            </a>
        `;
        
        eventCard.innerHTML = cardContent;
        column.appendChild(eventCard);
    });
}

function initializeTeamSlider() {
    // Call the team slider functionality again to reinitialize
    const teamSlider = document.querySelector('.team-members');
    const prevTeamBtn = document.querySelector('.prev-team');
    const nextTeamBtn = document.querySelector('.next-team');

    if (teamSlider && prevTeamBtn && nextTeamBtn) {
        // ... team slider code (reuse existing code)
        // This will be initialized in the existing code
    }
}

// Team slider functionality with improved touch support
const teamSlider = document.querySelector('.team-members');
const prevTeamBtn = document.querySelector('.prev-team');
const nextTeamBtn = document.querySelector('.next-team');

if (teamSlider && prevTeamBtn && nextTeamBtn) {
    const cards = Array.from(teamSlider.querySelectorAll('.member-card'));
    
    // Set animation delay for staggered appearance
    cards.forEach((card, index) => {
        card.style.setProperty('--i', index);
    });
    
    // Calculate the correct card width including gap
    const cardWidth = cards[0].offsetWidth;
    const cardGap = parseInt(window.getComputedStyle(teamSlider).columnGap || '32');
    const slideAmount = cardWidth + cardGap;
    
    // Calculate how many cards to show based on viewport width
    const getVisibleCards = () => {
        const viewportWidth = window.innerWidth;
        if (viewportWidth <= 768) return 1;
        if (viewportWidth <= 1024) return 2;
        return 3;
    };
    
    let currentPosition = 0;
    let maxScroll;
    
    // Touch variables
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    let isDragging = false;
    let isHorizontalScroll = null; // Set to null initially (not determined)
    let startPosition = 0;
    let startTime = 0;
    let isTouchScrolling = false;
    let scrollDirectionDecided = false;
    
    // Function to update maxScroll based on current viewport
    const updateMaxScroll = () => {
        const visibleCards = getVisibleCards();
        maxScroll = Math.max(0, (cards.length - visibleCards) * slideAmount);
    };
    
    updateMaxScroll();
    
    // Update slider position and enable/disable buttons
    const updateSliderPosition = (useTransition = true) => {
        if (useTransition) {
            teamSlider.style.transition = 'transform 0.3s ease';
        } else {
            teamSlider.style.transition = 'none';
        }
        
        teamSlider.style.transform = `translateX(${-currentPosition}px)`;
        
        // Enable/disable buttons based on position
        prevTeamBtn.disabled = currentPosition <= 0;
        nextTeamBtn.disabled = currentPosition >= maxScroll;
        
        // Visual feedback for disabled buttons
        prevTeamBtn.style.opacity = prevTeamBtn.disabled ? "0.5" : "1";
        nextTeamBtn.style.opacity = nextTeamBtn.disabled ? "0.5" : "1";
        
        // Reset transition after animation completes
        if (useTransition) {
            setTimeout(() => {
                teamSlider.style.transition = '';
            }, 300);
        }
    };
    
    // Initialize button state
    updateSliderPosition(false);
    
    // Add scroll indicator for mobile
    if (window.innerWidth <= 768) {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        teamSlider.parentNode.appendChild(indicator);
    }
    
    // Navigation event handlers
    nextTeamBtn.addEventListener('click', () => {
        if (currentPosition < maxScroll) {
            currentPosition += slideAmount;
            if (currentPosition > maxScroll) currentPosition = maxScroll;
            updateSliderPosition();
        }
    });
    
    prevTeamBtn.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition -= slideAmount;
            if (currentPosition < 0) currentPosition = 0;
            updateSliderPosition();
        }
    });
    
    // FIXED TOUCH HANDLING with better vertical scroll priority
    teamSlider.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        startPosition = currentPosition;
        startTime = Date.now();
        isDragging = true;
        isHorizontalScroll = null;
        scrollDirectionDecided = false;
        
        // Don't prevent default - allow normal touch behavior
    }, { passive: true });
    
    teamSlider.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        touchEndX = e.touches[0].clientX;
        touchEndY = e.touches[0].clientY;
        
        // Calculate the horizontal and vertical distances
        const diffX = Math.abs(touchStartX - touchEndX);
        const diffY = Math.abs(touchStartY - touchEndY);
        
        // Only make a decision once per touch to avoid flip-flopping
        if (!scrollDirectionDecided) {
            // Heavily favor vertical scrolling - only consider horizontal if 
            // horizontal movement is significantly greater than vertical
            isHorizontalScroll = diffX > diffY * 2.5;
            scrollDirectionDecided = true;
            
            // Only apply visual feedback if it's horizontal scrolling
            if (isHorizontalScroll) {
                teamSlider.classList.add('dragging');
                teamSlider.style.transition = 'none';
            }
        }
        
        // ONLY handle horizontal scrolling if we've determined it's horizontal
        // For vertical movement, do nothing (let the browser handle it)
        if (isHorizontalScroll) {
            e.preventDefault(); // Prevent default only for horizontal
            
            const moveX = touchStartX - touchEndX;
            let newPosition = startPosition + moveX;
            
            // Add resistance when dragging beyond limits
            if (newPosition < 0) {
                newPosition = startPosition + moveX * 0.2;
            } else if (newPosition > maxScroll) {
                const overScroll = moveX - (maxScroll - startPosition);
                newPosition = startPosition + (moveX - overScroll * 0.8);
            }
            
            currentPosition = newPosition;
            teamSlider.style.transform = `translateX(${-currentPosition}px)`;
        }
    }, { passive: false }); // Non-passive is needed to call preventDefault
    
    const finishTouchScroll = () => {
        if (!isDragging) return;
        
        isDragging = false;
        teamSlider.classList.remove('dragging');
        
        // Only snap if we were scrolling horizontally
        if (isHorizontalScroll) {
            // Get velocity for flick/swipe detection
            const endTime = Date.now();
            const timeElapsed = endTime - startTime;
            const touchDiff = touchStartX - touchEndX;
            const velocity = Math.abs(touchDiff / timeElapsed);
            
            if (velocity > 0.5) {
                // Fast swipe - move in the direction of the swipe
                if (touchDiff > 50) {
                    // Swipe left - move right
                    currentPosition += slideAmount;
                } else if (touchDiff < -50) {
                    // Swipe right - move left
                    currentPosition -= slideAmount;
                }
            } else {
                // Slow drag - snap to nearest card
                const cardIndex = Math.round(currentPosition / slideAmount);
                currentPosition = cardIndex * slideAmount;
            }
            
            // Ensure we don't go beyond bounds
            if (currentPosition < 0) currentPosition = 0;
            if (currentPosition > maxScroll) currentPosition = maxScroll;
            
            // Apply smooth transition for snapping
            updateSliderPosition(true);
        }
        
        // Reset all touch-related variables
        setTimeout(() => {
            isHorizontalScroll = null;
            scrollDirectionDecided = false;
        }, 300);
    };
    
    teamSlider.addEventListener('touchend', finishTouchScroll, { passive: true });
    teamSlider.addEventListener('touchcancel', finishTouchScroll, { passive: true });
    
    // Recalculate on window resize
    window.addEventListener('resize', () => {
        updateMaxScroll();
        
        // Reset position if we're past the maximum scroll
        if (currentPosition > maxScroll) {
            currentPosition = maxScroll;
        }
        
        updateSliderPosition(false);
        
        // Update scroll indicator visibility
        const indicator = document.querySelector('.scroll-indicator');
        if (indicator) {
            indicator.style.display = window.innerWidth <= 768 ? 'block' : 'none';
        }
    });
}

// Scroll to top button functionality
const scrollToTopButton = document.getElementById('scroll-to-top');

// Show button only when scrolled down
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('active');
    } else {
        scrollToTopButton.classList.remove('active');
    }
});

// Scroll to top when clicked
scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.querySelector('.form-success');
    const resetFormButton = document.querySelector('.reset-form');
    
    if (!contactForm) return;
    
    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form fields
        if (!name || !email || !subject || !message) {
            showToast('Please fill in all fields', 'error');
            return;
        }
        
        // Simple email validation
        if (!validateEmail(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission (in real app, you'd send data to a server)
        const submitBtn = contactForm.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('i');
        
        // Show loading state
        btnText.textContent = 'Sending...';
        btnIcon.className = 'fas fa-spinner fa-spin';
        submitBtn.disabled = true;
        
        // Simulate network request
        setTimeout(() => {
            // Reset button state
            btnText.textContent = 'Send Message';
            btnIcon.className = 'fas fa-paper-plane';
            submitBtn.disabled = false;
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            if (formSuccess) {
                formSuccess.classList.add('active');
            } else {
                showToast('Message sent successfully!', 'success');
            }
        }, 1500);
    });
    
    // Reset form button functionality
    if (resetFormButton) {
        resetFormButton.addEventListener('click', () => {
            formSuccess.classList.remove('active');
            contactForm.reset();
        });
    }
}

// Helper function to validate email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

// Enhanced toast notification function to handle different types (success/error)
function showToast(message, type = 'success') {
    // Check if a toast container exists, if not create one
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        toastContainer.style.position = 'fixed';
        toastContainer.style.bottom = '20px';
        toastContainer.style.right = '20px';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }
    
    // Create and show toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    // Set background color based on type
    if (type === 'error') {
        toast.style.background = 'rgba(220, 53, 69, 0.9)'; // Bootstrap danger color
        toast.innerHTML = `<i class="fas fa-exclamation-circle"></i>${message}`;
    } else {
        toast.style.background = 'rgba(44, 95, 208, 0.9)'; // Default success color
        toast.innerHTML = `<i class="fas fa-check-circle"></i>${message}`;
    }
    
    // Common toast styles
    toast.style.color = 'white';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '8px';
    toast.style.marginTop = '10px';
    toast.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '10px';
    toast.style.transform = 'translateX(100%)';
    toast.style.opacity = '0';
    toast.style.transition = 'all 0.3s ease';
    toast.style.backdropFilter = 'blur(4px)';
    toast.style.minWidth = '250px';
    
    toastContainer.appendChild(toast);
    
    // Show the toast after a small delay
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
        toast.style.opacity = '1';
    }, 100);
    
    // Remove the toast after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
