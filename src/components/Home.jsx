import React from "react";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Embellish</h1>
          <p>Elegant Adornments Redefined with Embellish</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
          Elevate Your Elegance with Embellish Jewelry. Discover exquisite designs that redefine beauty through timeless craftsmanship and captivating allure.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          Embellish Jewelry is more than a brand; it's an embodiment of artistry and passion. With a legacy of crafting exquisite adornments, we bring to you a collection that reflects elegance and refinement. Our pieces are born from a deep appreciation for the beauty of life's moments, meticulously designed to empower your individual style. Embrace the essence of sophistication and grace with Embellish Jewelry.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Collections</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
          
              <p>Essentials</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
           
              <p>Glamour</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              
              <p>Nature</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
             
              <p>Minimalism</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
