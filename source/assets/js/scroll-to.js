function scrollTo(Y, duration, easingFunction, callback) {
  const start   = Date.now();
  const element = document.documentElement.scrollTop ? document.documentElement : document.body;
  const from    = element.scrollTop;

  if (from === Y) {
    callback();

    return;
  }

  function min(a, b) {
    return a < b ? a : b;
  }

  function scroll(timestamp) {
    const currentTime = Date.now();
    const time        = min(1, ((currentTime - start) / duration));
    const easedT      = easingFunction(time);

    element.scrollTop = (easedT * (Y - from)) + from;

    if (time < 1) {
      requestAnimationFrame(scroll);
    } else {

      if (callback) {
        callback();
      }

    }
  }

  requestAnimationFrame(scroll);
}

export default scrollTo;
