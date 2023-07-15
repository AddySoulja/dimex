import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Bolt, CurrencyRupee } from "@mui/icons-material";
import "./card.css";

const Card = ({ product }) => {
  return (
    <Box className="card" key={product.id}>
      <Box className="card-banner">
        <img
          src={product.images[0]}
          width="230"
          height="230"
          loading="lazy"
          alt={product.title}
          className="img-cover"
        />
        <Link to={`/explore/${product.id}`} className="view-btn">
          <Bolt />
          View
        </Link>
      </Box>

      <Box className="card-info">
        <Typography className="card-brand">{product.brand}</Typography>
        <Link to="/" className="title-sm card-title link:hover">
          {product.title}
        </Link>
      </Box>

      <Box className="card-meta">
        <Box>
          <Typography className="meta-property">Price</Typography>
          <div className="meta-value">
            <CurrencyRupee /> {product.price}.00/-
          </div>
        </Box>
        <Box>
          <Typography className="meta-property">Discount</Typography>
          <div className="meta-value">
            <CurrencyRupee /> {product.discountPercentage} %
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
