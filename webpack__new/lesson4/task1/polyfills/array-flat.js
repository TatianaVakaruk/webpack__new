console.log('polyfill for flat');

window.Array.prototype.flat =
  Array.prototype.flat ||
  function flat(depth = 1) {
  return this.reduce((acc, val) => {
    if (Array.isArray(val) && depth > 0) {
      acc.push(...val.flat(depth - 1)); // Рекурсивный вызов с уменьшением глубины
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
}
