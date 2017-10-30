function navigation() {
  document.querySelector('.js-toggle').addEventListener('click', function () {
    document.querySelector(this.getAttribute('data-target')).classList.toggle('active');
  });
}

export default navigation;
