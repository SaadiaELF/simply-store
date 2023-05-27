export default function getTotal(array) {
  return (
    array.length &&
    array.reduce((sum, item) => {
      return sum + item.price;
    }, 0)
  );
}
