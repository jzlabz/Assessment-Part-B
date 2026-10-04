function deepFreeze(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  for (const key of Object.keys(obj)) {
    deepFreeze(obj[key]);
  }

  Object.freeze(obj);
  return obj;
}

const config = deepFreeze({
  api: { baseUrl: 'https://x.com', retries: 3 },
  debug: false
});

try {
  config.api.baseUrl = 'https://changed.com';
  config.debug = true;
} catch (e) {}

console.log(config.api.baseUrl, config.debug);
console.log(Object.isFrozen(config.api)); 