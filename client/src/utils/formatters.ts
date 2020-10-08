export function formatProductsPrice(cents: number) {
  return (cents / 100).toFixed(2);
}
