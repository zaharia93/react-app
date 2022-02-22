import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      {/* <h1 className="home__quote">
        You can't buy Happiness but you can buy COFFEE and that's pretty close.
      </h1> */}
      <img className="home__image" src="images/coffee_hearts.jpg" alt="" />

      <div className="home__row">
        <Product
          id="12324"
          title="Some title"
          price={12.49}
          image="images/strategy.png"
        />
        <Product
          id="1245"
          title="Some title"
          price={32.45}
          image="images/chair.png"
        />
      </div>

      <div className="home__row">
        <Product
          id="123544"
          title="Some title"
          price={78.23}
          image="images/hand.png"
        />
        <Product
          id="12324"
          title="Some title"
          price={12.9}
          image="images/magazin.png"
        />
        <Product
          id="12324"
          title="Some title"
          price={12.49}
          image="images/hand.png"
        />
      </div>
      <div className="home__row">
        <Product
          id="12324"
          title="Some title"
          price={12.49}
          image="images/sales.png"
        />
      </div>
    </div>
  );
}

export default Home;
