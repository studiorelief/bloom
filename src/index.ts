import './index.css';

import { parallaxAnim, roadPath, stepAnim, teamAnim } from '$utils/gsap';
import { blogCategories, copyBlog, hideEmpty, spanCMS, swipeElement } from '$utils/jquery';
import { loadScript } from '$utils/loadScript';
import { swiperLogoLoop, swiperReferal } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  /*
  ! Call functions
  */
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-toc@1/toc.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-socialshare@1/socialshare.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-richtext@1/richtext.js'),
    loadScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js'
    ),
  ]);

  spanCMS();
  swiperReferal();
  swiperLogoLoop();
  blogCategories();
  swipeElement();
  hideEmpty();
  copyBlog();

  parallaxAnim();

  if (window.location.pathname === '/') {
    roadPath();
  }

  if (window.location.pathname.includes('/offres')) {
    stepAnim();
  }

  if (window.location.pathname.includes('/a-propos')) {
    teamAnim();
  }
});
