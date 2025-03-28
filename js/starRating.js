function generateStars(rating) {
    const fullStars = Math.floor(rating || 0);  // Hypertek sitesindeki ürün kartlarında beliren toplam Değerlendirme verisini API cevabında bulamadım
    const starsHtml = Array.from({ length: 5 }, (_, i) =>
        i < fullStars
            ? '<i class="bi bi-star-fill text-warning"></i>'
            : '<i class="bi bi-star-fill text-warning"></i>' // Normalde bu şekilde gözükmesi gerekirken örnek proye benzerlik sağlanması amacıyla modifiye edildi
            // : '<i class="bi bi-star text-muted"></i>'
    ).join("");
    return starsHtml;
}
