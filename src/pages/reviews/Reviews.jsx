import React, { useState } from 'react';
import { reviews } from '../../constants/index';
import { XMarkIcon } from '@heroicons/react/24/solid'; // Updated import for Heroicons v2

const Reviews = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div className="bg-black min-h-screen p-6 text-white">
      <h1 className="text-4xl font-bold text-center text-[#FF4655] mb-12">
        Player Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-[#1F1F1F] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 h-12 w-12 bg-[#FF4655] text-white flex items-center justify-center rounded-full font-bold">
                {review.name.charAt(0).toUpperCase()}
              </div>
              <h1 className="ml-4 text-2xl font-semibold text-white">
                {review.name}
              </h1>
            </div>
            <p className="text-gray-400 mb-4 italic">"{review.review}"</p>
            {review.image && (
              <div className='flex justify-center items-center'>
                <img
                src={review.image}
                alt={review.name}
                className="w-[300px] h-[400px] object-cover rounded-lg border-2 border-[#FF4655] cursor-pointer"
                onClick={() => handleImageClick(review.image)}
              />
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 modal-overlay"
          onClick={handleOutsideClick}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
          <button
              className="absolute top-2 right-2 bg-transparent text-white p-2 rounded-full hover:bg-red-500 transition"
              onClick={closeModal}
              aria-label="Close"
            >
              <XMarkIcon className="h-6 w-6" /> {/* Updated icon usage */}
            </button>
        </div>
      )}
    </div>
  );
};

export default Reviews;
