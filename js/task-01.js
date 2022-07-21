const countNumberCategories = function () {
    const item = document.querySelectorAll(".item");
    console.log(`Number of categories: ${item.length}`)
};

countNumberCategories();

const showsCategoriesAndItems = function () {
    const item = document.querySelector(".item");
    const headers = document.querySelectorAll(".item > h2");
    // console.log(`Category: ${headers.textContent}`); выводит в консоль то что нужно
    console.log(headers);
    for (const header of headers) {
        console.log(`Category: ${header.textContent}`);
    }

};

showsCategoriesAndItems()

