const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  const sampleActivityNumber = parseFloat(sampleActivity);

  if (Number.isNaN(sampleActivityNumber)
    || sampleActivityNumber > MODERN_ACTIVITY
    || sampleActivityNumber < 1
  ) return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / (0.693 / HALF_LIFE_PERIOD));
};
