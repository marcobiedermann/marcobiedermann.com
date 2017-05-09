import lazysizes     from 'lazysizes';
import svg4everybody from 'svg4everybody';
import easing        from './easing';
import scrollTo      from './scroll-to';

// Google Analytics
window.ga = window.ga || function() {
  (ga.q = ga.q || []).push(arguments)
};

ga.l = +new Date;

ga('create', 'UA-46884111-4', 'auto');
ga('send', 'pageview');

// Toggle
document.querySelector('.js-toggle').addEventListener('click', function() {
  document.querySelector(this.getAttribute('data-target')).classList.toggle('active');
})

// ScrollTo
const elementsScrollTo = document.querySelectorAll('.js-scroll-to');

Array.prototype.forEach.call(elementsScrollTo, element => {
  element.addEventListener('click', () => {
    scrollTo(document.getElementById(element.href.split('#')[1]).offsetTop, 600, easing.easeInOutCubic);
  })
});

// Svg4Everybody
svg4everybody();

// Pagination
const paginationPrevious = document.querySelector('.pagination__previous a');
const paginationNext     = document.querySelector('.pagination__next a');

window.addEventListener('keydown', event => {
  switch (event.keyCode) {
  case 37:
    if (paginationPrevious) {
      window.location = paginationPrevious.href;
    }
    break;
  case 39:
    if (paginationNext) {
      window.location = paginationNext.href;
    }
    break;
  }
});
