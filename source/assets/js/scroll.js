import easing from './easing';
import scrollTo from './scroll-to';

function scroll() {
  document.querySelectorAll('.js-scroll-to').forEach((element) => {
    element.addEventListener('click', () => {
      scrollTo(document.getElementById(element.href.split('#')[1]).offsetTop, 600, easing.easeInOutCubic);
    });
  });
}

export default scroll;
