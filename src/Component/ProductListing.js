import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts } from "../redux/actions/productAction";
import { Container } from "@mui/material";

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("prouct---------------", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("products", products);
  return (
    <Container maxWidth="lg">
      <ProductComponent />
    </Container>
  );
}

export default ProductListing;
