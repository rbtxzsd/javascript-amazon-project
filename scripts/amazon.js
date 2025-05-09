import { products } from "../data/products.js";

document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.querySelector(".js-products-grid");
    products.forEach((product) => {
      const productElement = createProductsHtml(product);
      productsContainer.appendChild(productElement);
    });
});

function createProductsHtml(product) {
  const productContainer = document.createElement("div");
  productContainer.className = "product-container";

  // Adiciona a imagem do produto
  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = product.name;
  productImage.className = "product-image";

  const productImageContainer = document.createElement("div");
  productImageContainer.className = "product-image-container";
  productImageContainer.appendChild(productImage);

  // Adiciona o nome do produto
  const productName = document.createElement("p");
  productName.textContent = product.name;
  productName.className = "product-name limit-text-to-2-lines";

  // Adiciona a avaliação do produto
  const productRatingContainer = document.createElement("div");
  productRatingContainer.className = "product-rating-container";

  const productRating = document.createElement("img");
  const transformRating = product.rating.stars*10; 
  productRating.src = `images/ratings/rating-${transformRating}.png `;
  productRating.alt = `Rating ${transformRating}`;
  productRating.className = "product-rating-stars ";

  const productRatingText = document.createElement("p");
  productRatingText.textContent = `${product.rating.count}`;
  productRatingText.className = "product-rating-count link-primary";

  productRatingContainer.appendChild(productRating);
  productRatingContainer.appendChild(productRatingText);

  // Adiciona o preço do produto
  const productPrice = document.createElement("p");
  productPrice.textContent = `$${(product.priceCents / 100).toFixed(2)}`;
  productPrice.className = "product-price";

  // Adiciona o seletor de quantidade do produto
  const productQuantityContainer = document.createElement("div");
  productQuantityContainer.className = "product-quantity-container";
  const productQuantitySelect = document.createElement("select");
    
  for (let i = 1; i <= 10; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        productQuantitySelect.appendChild(option);
    }
    productQuantityContainer.appendChild(productQuantitySelect);

    // Adiciona o botão de adicionar ao carrinho
    const addToCartButton = document.createElement("button");
    addToCartButton.className = "add-to-cart-button button-primary";
    addToCartButton.textContent = "Add to Cart";
    

  // Adiciona todos os elementos ao contêiner do produto
  productContainer.appendChild(productImageContainer);
  productContainer.appendChild(productName);
  productContainer.appendChild(productRatingContainer);
  productContainer.appendChild(productPrice);
  productContainer.appendChild(productQuantityContainer);
  productContainer.appendChild(addToCartButton);

  return productContainer;
}