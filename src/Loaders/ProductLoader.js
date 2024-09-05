export async function ProductLoader({ params }) {
  const { id } = params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();
  return { product };
}
