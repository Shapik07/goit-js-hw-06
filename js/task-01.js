const countNumberCategories = function () {
  const item = document.querySelectorAll(".item");
  console.log(`Number of categories: ${item.length}`);
};

const showsCategoriesAndItems = function () {

    const domEls = document.querySelector("#categories");
    const items = domEls.querySelectorAll('.item')

    for (const item of items) {
        console.log(`Category: ${item.firstElementChild.textContent}`);
        console.log(`Elements: ${item.lastElementChild.children.length}`)
    }
};


countNumberCategories();
showsCategoriesAndItems();


