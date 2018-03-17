import cache from './cache';

const dayInSeconds = 24 * 60 * 60;
const getOompasKey = (key) => `oompas-page:${key}`;
const getOompaKey = (id) => `oompa:${id}`;

const isWithinADay = (before, now) => ((now - before) / 1000) < dayInSeconds;

const isValid = ({ timestamp }) => {
  const now = new Date();
  const keyTime = new Date(timestamp);
  return isWithinADay(keyTime, now);
};

function get(key) {
  return cache.get(key)
    .then((valueAsString) => {
      if (valueAsString) {
        const value = JSON.parse(valueAsString);
        if (isValid(value)) {
          return Promise.resolve(value.innerValue);
        }
        cache.del(key);
      }
      return Promise.resolve(null);
    });
}

function set(key, value) {
  const timestamp = new Date();
  const valueWithTimestamp = { timestamp, innerValue: value };
  return cache.set(key, valueWithTimestamp)
    .then(() => value);
}

const oompaStorage = {
  setOompas: ({ current, results }) => {
    const key = getOompasKey(current);
    return set(key, { current, results });
  },
  setOompa: (oompa) => {
    const key = getOompaKey(oompa.id);
    return set(key, oompa);
  },
  getOompas: (page) => {
    const oompasKey = getOompasKey(page);
    return get(oompasKey);
  },
  getOompa: (id) => {
    const oompaKey = getOompaKey(id);
    return get(oompaKey);
  }
};

export default oompaStorage;
