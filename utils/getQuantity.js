export default function getQuantity(array) {
  return (
    array.length &&
    array.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0)
  );
}
