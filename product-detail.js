const productContainer = document.getElementById("product-detail");
const product = JSON.parse(localStorage.getItem("selectedProduct"));

if (product) {
  productContainer.innerHTML = `
    <div class="col-md-6">
      <img src="${product.image}" alt="${product.title}" class="img-fluid rounded" />
    </div>
    <div class="col-md-6">
      <h2 class="text-white">${product.title}</h2>
      <p class="text-light fs-5">Price: ${product.price}</p>
      <p class="text-light">${product.description}</p>
      <button class="btn btn-outline-light mt-3">Add to Cart</button>
    </div>
  `;
} else {
  productContainer.innerHTML = "<p class='text-center'>Product not found!</p>";
}
