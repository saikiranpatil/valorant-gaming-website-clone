import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css'; // Ensure the styles for the range slider are imported
import { PRODUCTS } from "../../components/products";
import { Product } from "./product";
import "./shop.css"; // Your custom CSS file

export const Shop = () => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [isFetching, setIsFetching] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 15000]); // Initialize the price range
  const { ref, inView } = useInView({
    threshold: 1.0,
  });
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  
  // State for sorting
  const [sortOption, setSortOption] = useState("default"); // "default", "priceAsc", "priceDesc"

  const hasMoreProducts = visibleProducts < filteredProducts.length;

  // Filter products based on the price range and sort them
  useEffect(() => {
    const filteredAndSortedProducts = PRODUCTS.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products based on the selected sort option
    if (sortOption === "priceAsc") {
      filteredAndSortedProducts.sort((a, b) => a.price - b.price); // Sorting by price ascending
    } else if (sortOption === "priceDesc") {
      filteredAndSortedProducts.sort((a, b) => b.price - a.price); // Sorting by price descending
    }

    setFilteredProducts(filteredAndSortedProducts);
    setVisibleProducts(6); // Reset visible products when price range or sort option changes
  }, [priceRange, sortOption]);

  // Load more products on scroll when inView
  useEffect(() => {
    if (inView && !isFetching && hasMoreProducts) {
      setIsFetching(true);
      const loadMoreProducts = () => {
        setTimeout(() => {
          setVisibleProducts((prevVisible) =>
            Math.min(prevVisible + 6, filteredProducts.length)
          );
          setIsFetching(false);
        }, 300);
      };
      loadMoreProducts();
    }
  }, [inView, isFetching, hasMoreProducts, filteredProducts.length]);

  // Handle price range changes
  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  // Handle sorting option change
  const handleSortChange = (sortby) => {
    setSortOption(sortby);
  };

  return (
    <div className="shop p-6 min-h-screen flex flex-col justify-center items-center">
      <div className="shopTitle text-center">
        <h1 className="font-poppins font-normal text-5xl font-bold text-[#FF4655] m-8 p-12">
          PRODUCT SHOP
        </h1>
      </div>

      {/* Range Slider for selecting price range */}
      <div className="price-filter flex flex-col justify-center items-center my-4">
        <label className="sm:text-xl text-md font-bold m-5 text-red-500">
          Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
        </label>
        <RangeSlider
          min={0}
          max={15000}
          step={3000}
          value={priceRange}
          onInput={handlePriceRangeChange}
          thumbsDisabled={[false, false]} // Both ends can be moved
          rangeSlideDisabled={false} // Enable range selection
          className="z-0"
        />
      </div>

      {/* Sort By Buttons */}
      <div className="p-6 sort-by my-4 absolute top-[42%] right-[5px]">
        <label className="sm:text-xl text-sm font-bold mr-2 text-red-500">Sort By:</label>
        <button
          onClick={() => handleSortChange("default")}
          className={`p-1 ml-2 sm:text-xl text-sm border-none rounded-lg text-white shadow-sm hover:bg-red-300 transition duration-200 ${sortOption === "default" ? "bg-red-500" : ""}`}
        >
          Default
        </button>
        <button
          onClick={() => handleSortChange("priceAsc")}
          className={`p-1 ml-2 sm:text-xl text-sm border-none rounded-lg text-white shadow-sm hover:bg-red-300 transition duration-200 ${sortOption === "priceAsc" ? "bg-red-500" : ""}`}
        >
          Low To High
        </button>
        <button
          onClick={() => handleSortChange("priceDesc")}
          className={`p-1 ml-2 sm:text-xl text-sm border-none rounded-lg text-white shadow-sm hover:bg-red-300 transition duration-200 ${sortOption === "priceDesc" ? "bg-red-500" : ""}`}
        >
          High To Low
        </button>
      </div>

      <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>

      {isFetching && hasMoreProducts && (
        <div className="loading-message fixed bottom-0 left-0 w-full bg-yellow-300 text-gray-900 text-center py-2">
          Loading...
        </div>
      )}

      {hasMoreProducts && (
        <div ref={ref} className="invisible h-8"></div>
      )}
    </div>
  );
};
