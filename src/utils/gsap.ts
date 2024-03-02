import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
/*
 * * Global parallax
 */

export function parallaxAnim() {
  gsap.registerPlugin(ScrollTrigger);

  // Déterminez la valeur de déplacement en fonction de la largeur de l'écran
  const displacement = window.innerWidth <= 768 ? '2.5rem' : '5rem'; // Utilisez 768px comme point de rupture pour mobile

  document.querySelectorAll('[scroll="gsap-top"]').forEach((element) => {
    if (!element.classList.contains('chiffres_decorative')) {
      // Suppression du point pour 'contains'
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: `-${displacement}`,
        clearProps: 'all',
      });
    }
  });

  document.querySelectorAll('[scroll="gsap-bottom"]').forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      y: displacement,
    });
  });
}

/*
 * * Page Offre
 */
export function stepAnim() {
  // Scale effect
  gsap.set('.step_content', { y: '2rem', opacity: 0.1 });
  gsap.set('.step_shape', { scale: 0.5, rotateZ: 180, opacity: 0.1 });

  // Animation for each step_content
  document.querySelectorAll('.step_content').forEach(function (cardStep) {
    gsap.to(cardStep, {
      scrollTrigger: {
        markers: false,
        trigger: cardStep,
        start: 'top 75%',
        end: 'bottom 75%',
        scrub: true,
      },
      y: '0rem',
      opacity: 1,
      duration: 2,
      ease: 'linear',
    });
  });

  // Assuming step_shape is related to step_content in DOM structure
  // If not, adjust the selector logic as needed.
  document.querySelectorAll('.step_shape').forEach(function (cardShape, index) {
    const triggerElement = document.querySelectorAll('.step_content')[index]; // Match each shape to a content

    if (triggerElement) {
      // Ensure there is a corresponding trigger element
      gsap.to(cardShape, {
        scrollTrigger: {
          markers: false,
          trigger: triggerElement, // Use the matched step_content as trigger
          start: '-50% 75%', // Adjust these values as needed
          end: '50% 75%',
          scrub: 2,
        },
        scale: 1,
        rotateZ: 0,
        opacity: 1,
        duration: 4,
        ease: 'linear',
      });
    }
  });
}

/*
 * * Home Road
 */
export function roadPath() {
  gsap.to('.accroche_bullet', {
    scrollTrigger: {
      markers: false,
      trigger: '#road',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
    duration: 20,
    ease: 'power1.inOut',
    motionPath: {
      path: '#road',
      align: '#road',
      autoRotate: true,
      alignOrigin: [0.45, 1.2],
      end: -1,
    },
  });
}

/*
 * * Page A propos
 */
export function teamAnim() {
  gsap.set('.ecosystem_collection-item', { y: '1rem', opacity: 0.1 });

  gsap.to('.ecosystem_collection-item', {
    scrollTrigger: {
      trigger: '.ecosystem_collection-list-wrapper',
      start: 'top 85%',
      end: 'bottom 85%',
      scrub: 1,
      markers: false,
    },
    y: '0rem',
    opacity: 1,
    duration: 2,
    ease: 'linear',
    stagger: 1, // Applique un décalage de 0.2 secondes entre chaque animation
  });
}

/*
 * * Bullet Home
 */
export function bulletHeroHomeAnim() {
  gsap.set('.hero_bullet.is-home', { y: '0rem' });

  gsap.to('.hero_bullet.is-home', {
    scrollTrigger: {
      trigger: '.section_hero',
      start: '80% 50%',
      end: '100% 50%',
      scrub: 1,
      markers: false,
    },
    y: '25.75rem',
    ease: 'linear',
  });
}

/*
 * * Bullet Offres
 */
export function bulletHeroInnerAnim() {
  gsap.set('.hero_bullet.is-inner', { y: '0rem' });

  gsap.to('.hero_bullet.is-inner', {
    scrollTrigger: {
      trigger: '.section_hero-i',
      start: '70% 50%',
      end: '100% 50%',
      scrub: 1,
      markers: false,
    },
    y: '21.5rem',
    ease: 'linear',
  });
}

/*
 * * Bullet Hero Component
 */
export function bulletHeroComponentAnim() {
  gsap.set('.hero-c_bullet', { y: '0rem' });

  gsap.to('.hero-c_bullet', {
    scrollTrigger: {
      trigger: '.section_hero-c',
      start: '150% 50%',
      end: '100% 50%',
      scrub: 1,
      markers: false,
    },
    y: '25rem',
    ease: 'linear',
  });
}
