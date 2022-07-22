const countNumberCategories = function () {
  const item = document.querySelectorAll(".item");
  console.log(`Number of categories: ${item.length}`);
};

countNumberCategories();

const showsCategoriesAndItems = function () {
  const headlines = document.querySelectorAll(".item > h2");
  for (const header of headlines) {
    console.log(`Category: ${header.textContent}`);
    const item = document.querySelector(".item > ul");
    console.log(`Elements: ${item.children.length}`);
  }
};

showsCategoriesAndItems();

