// Создаем функцию-плагин
function interceptRequests() {
  // Сохраняем оригинальную функцию fetch
  const originalFetch = window.fetch;

  // Переопределяем функцию fetch
  window.fetch = function (url, options) {
    // Выводим URL запроса в консоль
    console.log('Запрос URL:', url);
    
    // Вызываем оригинальную функцию fetch с переданными параметрами
    return originalFetch.apply(this, arguments);
  };
}

// Запускаем плагин
interceptRequests();
