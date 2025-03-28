function createProductCard(product) {
	const rating = product.rating || 0;
	return `
        <div class="card border-0 custom-card">
            <img src="${product.productData.productMainImage}" 
                class="card-img-top blur-on-hover" 
                alt="${product.productName}">
            <img src="https://bursagb.s3.eu-central-1.amazonaws.com/riot_1676276362.svg" 
                alt="Riot Games Logo" 
                class="top-right-icon">
            <div class="card-body p-4 text-center">
                <p class="card-text fw-semibold price-tag">${product.salePrice.toFixed(2)} TL</p>
            </div>
            <div class="hover-overlay">
                <h5 class="overlay-text">${product.productName}</h5>
                <div class="overlay-stars d-flex align-items-center">
                    ${generateStars(rating)}
                    <span class="overlay-rating ms-2 text-white fw-semibold" 
                          style="font-size: 12px;">(0)</span>
                </div>
                <button 
                    class="d-flex btn btn-primary ripple-btn mt-3 text-center align-items-center justify-content-between">
                    <img width="20" class="me-1" style="color: white;" 
                        src="https://cdn-icons-png.flaticon.com/128/3236/3236907.png" alt="">
                    <a href="${product.productSlug}" 
                        class="text-white" 
                        style="text-decoration: none; font-size: 12px; font-weight: 500;">GÖRÜNTÜLE</a>
                </button>
                <button 
                    class="d-flex btn btn-primary ripple-btn mt-2 text-center align-items-center justify-content-between">
                    <img width="20" class="me-1" style="color: white;" 
                        src="https://cdn-icons-png.flaticon.com/512/3336/3336049.png" alt="">
                    <a href="${product.productSlug}" 
                        class="text-white" 
                        style="text-decoration: none; font-size: 12px; font-weight: 500;">SEPETE EKLE</a>
                </button>
            </div>
        </div>
    `;
}
