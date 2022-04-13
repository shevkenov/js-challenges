function addGlobalEvenetListener(type, parent = document, callback, options) {
  parent.addEventListener(
    type,
    (e) => {
      if (e.target.matches(type)) callback(e);
    },
    options
  );
}

function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

function qsa(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

function createElement(domElement, options = {}) {
  const element = document.createElement(domElement);

  Object.entries(options).forEach(([key, value]) => {
    if (key === "class") element.classList.add(value);
    if (key === "value") element.textContent = value;
  });

  return element;
}

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

function randumNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + 1 + min);
}

function memoize(cb) {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if(cache.has(key)) return cache.get(key);
    const result = cb(...args);
    cache.set(key, result);

    return result
  };
}

export {
    qs,
    qsa,
    createElement,
    addGlobalEvenetListener,
    sleep,
    randumNumberBetween,
    memoize
}
