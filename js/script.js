(function (global) {
  var dc = {};
  var homeHtml = "snippets/home-snippet.html";
  var allCategoriesUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json";
  var menuItemsUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/";

  // Вспомогательная функция для вставки HTML
  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  // Выбор случайной категории
  dc.loadSpecials = function () {
    $ajaxUtils.sendGetRequest(allCategoriesUrl, function (categories) {
      // Генерируем случайный индекс
      var randomIndex = Math.floor(Math.random() * categories.length);
      // Получаем short_name случайной категории (например, "L", "D", "SP")
      var randomCategoryShortName = categories[randomIndex].short_name;
      
      // Вызываем загрузку меню для этой категории
      dc.loadMenuItems(randomCategoryShortName);
    });
  };

  // Функция загрузки меню (заглушка для логики)
  dc.loadMenuItems = function (categoryShortName) {
  console.log("Loading menu for: " + categoryShortName);
  alert("Выбрана случайная категория: " + categoryShortName);
};

  global.$dc = dc;

})(window);
