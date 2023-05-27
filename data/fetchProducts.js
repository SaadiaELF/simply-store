export default async function fetchProducts() {
  const request = await fetch(
    "https://mock.shop/api?query={products(first:%2030){edges%20{node%20{id%20title%20description%20featuredImage%20{url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
  );
  const response = await request.json();
  return response.data.products.edges;
}
