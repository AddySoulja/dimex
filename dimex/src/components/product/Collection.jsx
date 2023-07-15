import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeProducts } from "../../redux/slices/productsSlice";
import Loading from "../common/Loading";
import { useCallback } from "react";
import Card from "../common/card/Card";

const Collection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const productsInStore = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    const res = await fetch("http://localhost:8081/api/products");
    const data = await res.json();
    if (data.ok) {
      dispatch(storeProducts([...data.data.products]));
    }
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return isLoading ? (
    <Loading />
  ) : (
    productsInStore.products.map((item) => (
      <Card product={item} key={item.id} />
    ))
  );
};

export default Collection;
