import axios from "axios";
import "./ProductDetail.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import {
  removeselectProducts,
  fetchProduct,
} from "../redux/actions/productAction";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { Container, Typography } from "@mui/material";

function ProductDetail() {
  const products = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeselectProducts());
    };
  }, [productId]);
  return (
    <div className="container">
      <Stack direction="row">
        <Box>
          <Card sx={{ maxHeight: "500px" }}>
            <img src={products.image} />
          </Card>
        </Box>

        <Box>
          <CardContent sx={{ border: 1, padding: 9 }}>
            <Stack direction="column">
              <h1>{products.title}</h1>
            </Stack>
            <Stack>
              <Button variant="contained" sx={{ height: 33, width: 35 }}>
                ${products.price}
              </Button>
            </Stack>
            <Stack sx={{ border: 1 }}>{products.category}</Stack>
            <Stack>
              <Typography>{products.description}</Typography>
            </Stack>
            <Button variant="contained" color="error">
              {" "}
              Add To Cart
            </Button>
          </CardContent>
        </Box>
      </Stack>
    </div>
  );
}

export default ProductDetail;
