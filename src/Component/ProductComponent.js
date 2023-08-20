import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Box, Stack } from "@mui/system";
import { Container } from "@mui/material";

function ProductComponent() {
  const param = useParams();
  const products = useSelector((state) => state.allProduct.product);

  return (
    <Container maxWidth="lg">
      {console.log("param is", param.productId)}
      <Grid container spacing={4}>
        {products.map((product1, index) => {
          return (
            <Grid item xs={4} key={index}>
              <Link to={`/product/${product1.id}`}>
                <Card sx={{ maxWidth: 500, height: 560, direction: "row" }}>
                  <Box sx={{ alignContent: "center" }}>
                    <CardMedia
                      sx={{
                        height: "300px",
                        width: "100%",
                        textAlign: "center",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                      image={product1.image}
                      title={product1.title}
                    ></CardMedia>
                  </Box>
                  <CardContent>
                    <Stack className="header">
                      <h3>{product1.title}</h3>
                    </Stack>
                    <Stack className="meta_price">$ {product1.price}</Stack>
                    <Stack className="meta">{product1.category}</Stack>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default ProductComponent;
