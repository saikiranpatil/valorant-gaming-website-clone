import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css'; // Import slider styles
import './shop.css'; // Import your custom styles

export const Shop = () => {
  // Slider values for min and max price range
  const [priceRange, setPriceRange] = useState([0, 15000]);

  const handlePriceFilter = () => {
    setFilteredProducts(
      PRODUCTS.filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      )
    );
  };

  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  return (
    <div className="shop">
      <div className="shopTitle">
        {/* <h1>Our Shop</h1> */}
      </div>

      {/* Price Filter Section with Single Range Slider */}
      <div className="price-filter">
        <div className="slider-container">
          <label>
            Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
          </label>
          <RangeSlider
            min={0}
            max={15000}
            step={3000}
            value={priceRange}
            onInput={setPriceRange}
            thumbsDisabled={[false, false]} // Both ends can be moved
            rangeSlideDisabled={false} // Enable range selection
          />
        </div>
      <button className="btn mt-16" onClick={handlePriceFilter}>
        <span className="btn__inner">
          <span className="btn__slide"></span>
          <span className="btn__content text-secondary">
            Apply Filter
          </span>
        </span>
      </button>
      </div>

      {/* Display filtered products */}
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <Product key={product.id} data={product} />)
        ) : (
          <p>No products found in this price range.</p>
        )}
      </div>
    </div>
  );
};
