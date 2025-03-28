async function fetchProducts() {
    const apiUrl = "https://api.hyperteknoloji.com.tr/products/list";
    const encodedToken = "ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5Sk1iMmRwYmxSNWNHVWlPaUl4SWl3aVEzVnpkRzl0WlhKSlJDSTZJalUxTnpJMElpd2lSbWx5YzNST1lXMWxJam9pUkdWdGJ5SXNJa3hoYzNST1lXMWxJam9pU0hsd1pYSWlMQ0pGYldGcGJDSTZJbVJsYlc5QWFIbHdaWEl1WTI5dElpd2lRM1Z6ZEc5dFpYSlVlWEJsU1VRaU9pSXpNaUlzSWtselVtVnpaV3hzWlhJaU9pSXdJaXdpU1hOQlVFa2lPaUl4SWl3aVVtVm1aWEpoYm1ObFNVUWlPaUlpTENKU1pXZHBjM1JsY2tSaGRHVWlPaUl6THpJMUx6SXdNalVnTVRvd01EbzBPQ0JRVFNJc0ltVjRjQ0k2TWpBMU5EQTFPVE14T0N3aWFYTnpJam9pYUhSMGNITTZMeTlvZVhCbGNuUmxhMjV2Ykc5cWFTNWpiMjBpTENKaGRXUWlPaUpvZEhSd2N6b3ZMMmg1Y0dWeWRHVnJibTlzYjJwcExtTnZiU0o5LjN2bXVET0NWam9MVUMtc2NrOGJ4MXpETENoMlFoV2I3Mjl0cWE5RDZKcVE=";
    const token = atob(encodedToken);

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        const valorantProducts = data.data.filter(product =>
            product.productName.toLowerCase().includes("valorant")
        );

        console.log("Valorant Products:", valorantProducts);
        return valorantProducts;
    } catch (error) {
        console.error("Error fetching products:", error.message);
        return [];
    }
}
