function viewProduct(title, price, image, description) {
  const product = { title, price, image, description };
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product-detail.html";
}
