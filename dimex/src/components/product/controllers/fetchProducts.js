export const fetchProducts = async () => {
  let data = await fetch("http://localhost:8081/api/products");
  data = await data.json();
  return data;
};
