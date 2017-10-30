import uuidv4 from 'uuid/v4';

const TRACKING_ID = 'UA-46884111-4';
const TRACKING_VERSION = '1';
const NULL_VALUE = '(not set)';

const dimensions = {
  TRACKING_VERSION: 'dimension1',
  CLIENT_ID: 'dimension2',
  WINDOW_ID: 'dimension3',
  HIT_ID: 'dimension4',
  HIT_TIME: 'dimension5',
  HIT_TYPE: 'dimension6',
  HIT_SOURCE: 'dimension7',
  VISIBILITY_STATE: 'dimension8',
};

const metrics = {
  RESPONSE_END_TIME: 'metric1',
  DOM_LOAD_TIME: 'metric2',
  WINDOW_LOAD_TIME: 'metric3',
};

function createTracker() {
  window.ga('create', TRACKING_ID, 'auto');
  window.ga('set', 'transport', 'beacon');
}

function sendInitialPageview() {
  window.ga('send', 'pageview', {
    [dimensions.HIT_SOURCE]: 'pageload',
  });
}

function sendNavigationTimingMetrics() {
  if (!(window.performance && window.performance.timing)) {
    return;
  }

  if (document.readyState !== 'complete') {
    window.addEventListener('load', sendNavigationTimingMetrics);

    return;
  }

  const nt = performance.timing;
  const navStart = nt.navigationStart;

  const responseEnd = Math.round(nt.responseEnd - navStart);
  const domLoaded = Math.round(nt.domContentLoadedEventStart - navStart);
  const windowLoaded = Math.round(nt.loadEventStart - navStart);

  function allValuesAreValid(...values) {
    return values.every(value => value > 0 && value < 6e6);
  }

  if (allValuesAreValid(responseEnd, domLoaded, windowLoaded)) {
    window.ga('send', 'event', {
      eventCategory: 'Navigation Timing',
      eventAction: 'track',
      eventLabel: NULL_VALUE,
      nonInteraction: true,
      [metrics.RESPONSE_END_TIME]: responseEnd,
      [metrics.DOM_LOAD_TIME]: domLoaded,
      [metrics.WINDOW_LOAD_TIME]: windowLoaded,
    });
  }
}

function trackCustomDimensions() {
  Object.keys(dimensions).forEach((key) => {
    window.ga('set', dimensions[key], NULL_VALUE);
  });

  window.ga((tracker) => {
    tracker.set({
      [dimensions.CLIENT_ID]: tracker.get('clientId'),
      [dimensions.TRACKING_VERSION]: TRACKING_VERSION,
      [dimensions.WINDOW_ID]: uuidv4(),
    });
  });

  window.ga((tracker) => {
    const originalBuildHitTask = tracker.get('buildHitTask');

    tracker.set('buildHitTask', (model) => {
      const queueTime = model.get('queueTime') || 0;

      model.set(dimensions.HIT_ID, uuidv4(), true);
      model.set(dimensions.HIT_TIME, String(new Date() - queueTime), true);
      model.set(dimensions.HIT_TYPE, model.get('hitType'), true);
      model.set(dimensions.VISIBILITY_STATE, document.visibilityState, true);

      originalBuildHitTask(model);
    });
  });
}

function trackError(err = {}, fieldsObj = {}) {
  window.ga('send', 'event', Object.assign({
    eventCategory: 'Error',
    eventAction: err.name || '(no error name)',
    eventLabel: `${err.message}\n${err.stack || '(no stack trace)'}`,
    nonInteraction: true,
  }, fieldsObj));
}

function trackErrors() {
  const loadErrorEvents = window.__e && window.__e.q || [];

  function trackErrorEvent(event) {
    const fieldsObj = {
      eventCategory: 'Uncaught Error',
    };
    const err = event.error || {
      message: `${event.message} (${event.lineno}:${event.colno})`,
    };

    trackError(err, fieldsObj);
  }

  for (const event of loadErrorEvents) {
    trackErrorEvent(event);
  }

  window.addEventListener('error', trackErrorEvent);
}

function googleAnalytics() {
  window.ga = window.ga || ((...args) => (window.ga.q = window.ga.q || []).push(args));

  createTracker();
  sendInitialPageview();
  sendNavigationTimingMetrics();
  trackCustomDimensions();
  trackErrors();
}

export default googleAnalytics;
