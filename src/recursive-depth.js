module.exports = class DepthCalculator {
  calculateDepth(arr, currentDepth = 1, result = []) {
    result.push(currentDepth);
    for (const el of arr) {
      if (Array.isArray(el)) {
        this.calculateDepth(el, currentDepth + 1, result);
      }
    }
    return Math.max(...result);
  }
};
