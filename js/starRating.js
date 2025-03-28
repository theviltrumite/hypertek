function generateStars(rating) {
    const fullStars = Math.floor(rating || 0); // Default to 0 if rating is missing
    const starsHtml = Array.from({ length: 5 }, (_, i) =>
        i < fullStars
            ? '<i class="bi bi-star-fill text-warning"></i>'
            : '<i class="bi bi-star text-muted"></i>'
    ).join("");
    return starsHtml;
}
