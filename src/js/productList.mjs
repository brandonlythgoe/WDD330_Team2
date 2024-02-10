import { getData } from "./productData.mjs"
import { renderListWithTemplate } from "./utils.mjs";

export default async function productList(category = "tents", selector = ".product-list") {
    const data = await getData(category);
    renderList(data, selector);
  }

function productCardTemplate(product) {

    if (product.Id !== "989CG" && product.Id !== "880RT") {
      return `<li class="product-card">
      <a href="product_pages/index.html?product=${product.Id}">
      <img
        src="${product.Image}"
        alt="Image of ${product.Name}"
      />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.NameWithoutBrand}</h2>
      <p class="product-card__price">$${product.FinalPrice}</p></a>
      </li>`; 
    }
}

function renderList(dataList, selector) {
  const elm = document.querySelector(selector);
  // const htmlItems = dataList.map((product) => productCardTemplate(product));
  // document.querySelector(selector).innerHTML = htmlItems.join("");
  renderListWithTemplate(productCardTemplate, elm, dataList);
}