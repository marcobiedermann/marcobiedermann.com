function analytics() {
  window.ga = window.ga || function () {
    (ga.q = ga.q || []).push(arguments);
  };

  ga.l = +new Date();

  ga('create', 'UA-46884111-4', 'auto');
  ga('send', 'pageview');
}

export default analytics;
