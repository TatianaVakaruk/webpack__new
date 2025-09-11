console.log('polyfill for flatMap');

window.Array.prototype.flatMap =
  Array.prototype.flatMap ||
  function flatMap(callback, thisArg) {
    return this.map(function(element, index, array) {
      // Применяем функцию к элементу, получаем массив результатов
      const mappedArray = callback.call(thisArg, element, index, array);

      // Если результат не является массивом, он помещается в новый массив
      // иначе объединяется с уже существующим массивом
      return mappedArray.flat ? mappedArray.flat(1) : [].concat.apply([], mappedArray);
    }).flat(1); // Создаем плоский массив из результатов
  };
