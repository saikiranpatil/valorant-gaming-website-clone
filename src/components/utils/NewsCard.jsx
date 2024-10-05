import React from "react";

const NewsCard = ({ date, category, title, imglink }) => (
  <div className="news-card m-3">
    <div className="w-[30vw] min-w-[500px] h-[100%] relative mr-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={imglink} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-white">
        <span className="text-gray-400 text-sm">{date}</span>
        <span className="ml-4 text-blue-500 font-semibold">{category}</span>
        <h3 className="my-2 font-bold text-lg">{title}</h3>
      </div>
    </div>
  </div>
);

export default NewsCard;
