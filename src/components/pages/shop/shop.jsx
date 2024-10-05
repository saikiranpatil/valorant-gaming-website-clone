import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css'; 
import './shop.css'; 

export const Shop = () => {
  // Slider values for min and max price range
  const [priceRange, setPriceRange] = useState([0, 15000]);

  // State to hold filtered products
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  // useEffect to automatically filter and sort products when priceRange changes
  useEffect(() => {
    const filteredAndSortedProducts = PRODUCTS.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    ).sort((a, b) => a.price - b.price); // Sorting by price in ascending order

    setFilteredProducts(filteredAndSortedProducts);
  }, [priceRange]); // Runs whenever priceRange changes

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
