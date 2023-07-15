import React from "react";
import Navbar from "../../common/navbar/Navbar";
import Collection from "../../product/carousel/Carousel";
import Footer from "../../common/footer/Footer";
import BackTopBtn from "../../common/backToTop/BackTopBtn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";

const Explore = () => {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <section class="section discover container">
            <h3 class="headline">Discover Collection</h3>

            <ul class="grid-list">{/* <Collection /> */}</ul>

            <button class="btn-link link:hover">
              <span class="span">Explore More</span>
              <FontAwesomeIcon
                icon={faForward}
                name="arrow-forward"
                aria-hidden="true"
              />
            </button>
          </section>
        </article>
      </main>
      <Footer />
      <BackTopBtn />
    </>
  );
};

export default Explore;
