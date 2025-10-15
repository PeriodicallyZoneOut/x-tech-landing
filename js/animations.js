// Animation and Interaction Scripts

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add animation classes to features on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('feature-item');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all feature divs
    document.querySelectorAll('section > div > div').forEach(feature => {
        observer.observe(feature);
    });

    // CTA Button click handlers
    const ctaButtons = document.querySelectorAll('.bg-gradient-to-r');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add pulse animation
            this.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
            
            // Show alert (replace with your actual action)
            console.log('CTA Button clicked!');
        });
    });

    // Add hover effect to feature icons
    const iconContainers = document.querySelectorAll('.bg-gradient-to-br');
    iconContainers.forEach(icon => {
        icon.classList.add('icon-container');
    });

    // Add arrow bounce animation
    const arrows = document.querySelectorAll('svg[viewBox="0 0 24 24"]');
    arrows.forEach(arrow => {
        if (arrow.querySelector('path[d*="M17 8l4 4"]')) {
            arrow.classList.add('arrow-animate');
        }
    });

    // Parallax effect for devices showcase
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const deviceShowcase = document.querySelector('.device-showcase');
        
        if (deviceShowcase) {
            const rect = deviceShowcase.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const scrollDiff = scrollTop - lastScrollTop;
                const tablet = document.querySelector('.device-tablet');
                const mobile = document.querySelector('.device-mobile');
                const desktop = document.querySelector('.device-desktop');
                
                if (tablet) {
                    const currentTransform = tablet.style.transform || '';
                    tablet.style.transform = currentTransform + ` translateY(${-scrollDiff * 0.1}px)`;
                }
                if (mobile) {
                    const currentTransform = mobile.style.transform || '';
                    mobile.style.transform = currentTransform + ` translateY(${-scrollDiff * 0.15}px)`;
                }
                if (desktop) {
                    const currentTransform = desktop.style.transform || '';
                    desktop.style.transform = currentTransform + ` translateY(${-scrollDiff * 0.08}px)`;
                }
            }
        }
        lastScrollTop = scrollTop;
    }, { passive: true });

    // Add social icon animations
    const socialIcons = document.querySelectorAll('footer a[href="#"]');
    socialIcons.forEach(icon => {
        icon.classList.add('social-icon');
    });

    // Logo rotation on hover
    const logo = document.querySelector('.grid.grid-cols-2.gap-1');
    if (logo) {
        logo.classList.add('logo-grid');
        logo.style.transformOrigin = 'center';
        
        logo.addEventListener('mouseenter', function() {
            this.style.animation = 'logoRotate 2s linear infinite';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    }

    // Add testimonial box styling
    const testimonialBox = document.querySelector('.bg-gray-50.rounded-2xl');
    if (testimonialBox) {
        testimonialBox.classList.add('testimonial-box');
    }

    // CTA button glow effect
    ctaButtons.forEach(button => {
        button.classList.add('cta-button');
    });

    // Lazy load effect simulation
    const allSections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.animation = 'fadeIn 0.8s ease forwards';
            }
        });
    }, { threshold: 0.1 });

    allSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Add ripple CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes rippleEffect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .cta-button {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    ctaButtons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Console log for debugging
    console.log('X-TECH LANDING - All animations initialized');
    console.log('Features observed:', document.querySelectorAll('section > div > div').length);
    console.log('CTA Buttons:', ctaButtons.length);
});

// Window load event for final adjustments
window.addEventListener('load', function() {
    // Ensure all images are loaded before triggering animations
    console.log('Page fully loaded');
    
    // Add a slight delay to ensure smooth initial animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Resize handler for responsive adjustments
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Recalculate positions if needed
        console.log('Window resized - adjusting layouts');
    }, 250);
});
