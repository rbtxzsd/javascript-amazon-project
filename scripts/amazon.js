import { products } from "../data/products"

function createProductsHtml (product){

    const productContainer = document.createElement("div");
    productContainer.className = "product-container";

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.className = "product-image";

    const productImageContainer = document.createElement("div"); 
    productImageContainer.className = "product-image-container";
    productImageContainer.appendChild(productImage);

    const productName = document.createElement("p");
    productName.textContent = product.name;
    productName.className = "product-name limit-text-to-2-lines";

    const productRatingContainer = document.createElement("div");
    productRatingContainer.className = "product-rating-container";

    const productRating = document.createElement("img");
    const transformRating = product.rating.stars;
    productRating.src = `images/rating-${transformRating}.png`;
    productRating.alt = `Rating ${transformRating}`;
    productRating.className = "product-rating-container";

    const productRatingText = document.createElement("p");
    productRatingText.textContent = `${product.rating.count} `;
    productRatingText.className = "product-rating-count link-primary";
    productRatingText.appendChild(productRating);

    productRatingContainer.appendChild(productRating);
     
    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;
    productPrice.className = "product-price";

    const productQuantityContainer = document.createElement("div");
    productQuantityContainer.className = "product-quantity-container";

    const productQuantity = document.createElement("select");

    for (let i = 1; i <= 10; i++) {
        const productQuantityOption = document.createElement("option");
        productQuantityOption.value = i;
        productQuantityOption.textContent = i;
        productQuantity.appendChild(productQuantityOption);
    }
    productQuantityContainer.appendChild(productQuantity);

    const divSpace = document.createElement("div");
    divSpace.className = "product-spacer";

    const  productAddedToCart = document.createElement("div");
    productAddedToCart.className = "added-to-cart";
    const imageAdded = document.createElement("img");
    imageAdded.src = "images/icons/checkmark.png";
    imageAdded.alt = "Added to cart";
    productAddedToCart.appendChild(imageAdded);

    const productAddButton = document.createElement("button");
    productAddButton.textContent = "Add to cart";
    productAddButton.className = "add-to-cart-button button-primary";
    productAddedToCart.appendChild(productAddButton);

    productContainer.appendChild(productImageContainer);
    productContainer.appendChild(productName);
    productContainer.appendChild(productRatingContainer);
    productContainer.appendChild(productPrice);
    productContainer.appendChild(productQuantityContainer);
    productContainer.appendChild(divSpace);
    productContainer.appendChild(productAddedToCart);

    return productContainer;
}
const productsContainer = document.createElement("div");
productsContainer.className = "product-container";
productsContainer.appendChild(createProductsHtml());