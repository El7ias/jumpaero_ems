/* ═══════════════════════════════════════════════════════════
   JUMP AERO — EMS PUBLIC PAGE
   Interactive Behaviors & Animations
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── NAVBAR SCROLL EFFECT ─── */
    const navbar = document.getElementById('main-nav');
    const handleNavScroll = () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();


    /* ─── MOBILE NAV TOGGLE ─── */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });


    /* ─── SMOOTH SCROLL FOR ANCHOR LINKS ─── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = document.getElementById('main-nav').offsetHeight;
                const extraPadding = 24; // breathing room below navbar
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - extraPadding;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });


    /* ─── STAT COUNTER ANIMATION ─── */
    const animateCounters = () => {
        const counters = document.querySelectorAll('.hero-stat-number[data-target]');
        counters.forEach(counter => {
            if (counter.dataset.animated) return;
            const target = parseInt(counter.dataset.target);
            const duration = 2000;
            const startTime = performance.now();

            const update = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease-out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                counter.textContent = Math.round(target * eased);

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                    counter.dataset.animated = 'true';
                }
            };

            requestAnimationFrame(update);
        });
    };


    /* ─── SCROLL-TRIGGERED REVEALS ─── */
    const revealElements = () => {
        // Add .reveal to section cards, timeline steps, etc.
        const selectors = [
            '.crisis-card',
            '.timeline-step',
            '.impact-card',
            '.club-card',
            '.club-why',
            '.club-signup',
            '.human-cost-header',
            '.hc-legend',
            '.hc-source',
            '.impact-flow',
            '.impact-stats-row',
            '.potential-impact-img',
            '.mission-feature',
            '.trust-item',
            '.contact-form',
            '.contact-reasons',
            '.mission-image-wrapper',
            '.section-header',
            '.parallax-text'
        ];

        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => {
                if (!el.classList.contains('reveal')) {
                    el.classList.add('reveal');
                }
            });
        });
    };

    revealElements();

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Stagger animations for grid children
                const parent = entry.target.parentElement;
                if (parent) {
                    const siblings = Array.from(parent.children).filter(c => c.classList.contains('reveal'));
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 100}ms`;
                }
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });


    /* ─── HERO STAT COUNTERS ON VISIBLE ─── */
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(heroStats);
    }


    /* ─── COVERAGE RING SVG ANIMATION ─── */
    const coverageRing = document.querySelector('.coverage-progress');
    if (coverageRing) {
        const ringObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate to ~80% fill
                    coverageRing.style.transition = 'stroke-dashoffset 1.5s ease-out';
                    coverageRing.style.strokeDashoffset = '67.86'; // ~80% of circumference
                    ringObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        ringObserver.observe(coverageRing.closest('.impact-card'));
    }


    /* ─── HUMAN COST BAR CHART ANIMATION ─── */
    const humanCostChart = document.querySelector('.human-cost-chart');
    if (humanCostChart) {
        const barObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bars = humanCostChart.querySelectorAll('.hc-bar');
                    bars.forEach((bar, index) => {
                        setTimeout(() => {
                            bar.classList.add('animated');
                        }, index * 120);
                    });
                    barObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        barObserver.observe(humanCostChart);
    }


    /* ─── PARALLAX EFFECT ─── */
    const parallaxImg = document.querySelector('.parallax-img');
    if (parallaxImg) {
        window.addEventListener('scroll', () => {
            const section = parallaxImg.closest('.parallax-divider');
            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (rect.top < viewportHeight && rect.bottom > 0) {
                const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
                const offset = (progress - 0.5) * 60;
                parallaxImg.style.transform = `translateY(${offset}px)`;
            }
        }, { passive: true });
    }


    /* ─── ACTIVE NAV LINK HIGHLIGHTING ─── */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const highlightNav = () => {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNav, { passive: true });


    /* ─── CREDIT CARD INPUT FORMATTING ─── */

    const cardNumberInput = document.getElementById('club-card-number');
    const cardExpiryInput = document.getElementById('club-card-expiry');
    const cardCvcInput = document.getElementById('club-card-cvc');

    if (cardNumberInput) {
        // Format card number: add space every 4 digits
        cardNumberInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.substring(0, 16);
            let formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = formatted;

            // Detect card brand and highlight icon
            const icons = document.querySelectorAll('.card-icon');
            icons.forEach(icon => icon.classList.remove('active'));

            if (value.startsWith('4')) {
                document.querySelector('.card-icon--visa')?.classList.add('active');
            } else if (/^5[1-5]/.test(value) || /^2[2-7]/.test(value)) {
                document.querySelector('.card-icon--mc')?.classList.add('active');
            } else if (value.startsWith('3')) {
                document.querySelector('.card-icon--amex')?.classList.add('active');
            }
        });
    }

    if (cardExpiryInput) {
        // Format expiry: MM / YY
        cardExpiryInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.substring(0, 4);
            if (value.length >= 2) {
                value = value.substring(0, 2) + ' / ' + value.substring(2);
            }
            e.target.value = value;
        });
    }

    if (cardCvcInput) {
        // CVC: numbers only
        cardCvcInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
        });
    }
});


/* ─── FORM HANDLERS ─── */

function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMsg = document.getElementById('contact-success');

    // Simulate submission
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        form.style.display = 'none';
        successMsg.style.display = 'flex';
    }, 1500);
}

function handleMerchNotify(e) {
    e.preventDefault();
    const form = e.target;
    const input = form.querySelector('input');
    const btn = form.querySelector('button');
    const originalText = btn.textContent;

    btn.textContent = 'Subscribed! ✓';
    btn.style.background = '#22c55e';
    input.value = '';
    input.disabled = true;
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        input.disabled = false;
        btn.disabled = false;
    }, 3000);
}


/* ─── JUMP AERO CLUB PLAN SELECTION ─── */



function handleClubSignup(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMsg = document.getElementById('club-success');

    // Simulate submission
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;

    setTimeout(() => {
        // Hide form fields, show success
        const formElements = form.querySelectorAll('.form-row, .form-group, .club-plan-display, .club-form-note, button[type="submit"]');
        formElements.forEach(el => el.style.display = 'none');
        successMsg.style.display = 'flex';
    }, 1800);
}
