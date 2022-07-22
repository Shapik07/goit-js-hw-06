const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 1. нужно получить доступ к #ingredients
const parentNode = document.querySelector("#ingredients");
// 2. нужно создать внутри ingredients - li
const createElements = ingredients.map((value) => {
  const createElement = document.createElement("li");
//  * 3. нужно присвоить имя li по по порядку как в ingredients
  createElement.textContent = value
//  * нужно присвоить класс 'item' всем элементам
  createElement.classList.add('item')
  return createElement;
});
//  * Добавить в документ все элементы за одну операцию!
parentNode.append(...createElements);


/**
 * Действия для решения задачи:
 *
 * 1. нужно получить доступ к #ingredients
 *
 * 2. нужно создать внутри ingredients - li
 *
 * 3. нужно присвоить имя li по по порядку как в ingredients
 *
 * нужно присвоить класс 'item' всем элементам
 *
 * Добавить в документ все элементы за одну операцию!
 *
 */



