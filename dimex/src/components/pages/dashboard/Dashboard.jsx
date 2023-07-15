import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { FastForward } from "@mui/icons-material";
import Navbar from "../../common/navbar/Navbar";
import BackTopBtn from "../../common/backToTop/BackTopBtn";
import Footer from "../../common/footer/Footer";
import Carousel from "../../product/carousel/Carousel";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <section className="hero container">
            <p className="headline">
              Discover Rare Collections
              <br />
              <span className="span">Arts & NFTs</span>
            </p>
            <p className="section-text body-lg">
              We are a huge marketplace dedicated to connecting great artists of
              all Dime-in-Digits with their fans and unique token collectors!
            </p>
            <Link to="/explore" className="explore-btn">
              Explore now
            </Link>
          </section>

          <section className="carousel container">
            <Box className="headline-carousel">
              <p className="carousel-title">Top Collections</p>
              <Link to="/explore" className="btn-link link:hover">
                See More <FastForward />
              </Link>
            </Box>
            <Carousel />
          </section>
        </article>
      </main>
      <Footer />
      <BackTopBtn />
    </>
  );
};

export default Dashboard;
