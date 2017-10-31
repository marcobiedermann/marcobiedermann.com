import lozad from 'lozad';

function lazyload() {
  const observer = lozad();

  observer.observe();
}

export default lazyload;
