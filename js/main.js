async function renderProducts() {
    const products = await fetchProducts();
    const productsContainer = document.querySelector("#products-container");

    if (products.length === 0) {
        productsContainer.innerHTML = "<p>Ürün bulunamadı</p>";
        return;
    }

    productsContainer.innerHTML = products
        .map(product => createProductCard(product))
        .join("");
}

renderProducts();
