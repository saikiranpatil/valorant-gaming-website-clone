import styles, { layout } from "../../style";
import { news } from "../../constants";
import { homePageReview } from "../../constants";
import icon from "./icon.svg";
import "./home.css";

const News = () => (
  <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth} sm:py-6 py-4`}>
      <section id="news" className="mx-4">
        <h1 className="relative text-[#FF4655] font-bold md:text-[80px] sm:text-xl text-[30px] text-center mb-8">
          THE LATEST
        </h1>
        <div className="all-news flex sm:flex-row flex-col overflow-x-scroll none overflow-y-hidden scrollbar-hidden">
          {homePageReview.map((review) => (
            <div
              key={review.id}
              className="sm:m-3 sm:p-6 m-2 p-3 bg-[#1F1F1F] rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img className="sm:w-12 w-6 my-1 sm:my-4" src={icon} alt="Icon" />
              <span className="sm:block sm:text-2xl font-bold text-[#FF4655]">{review.name}</span>
              <div className="sm:mt-2">
                <blockquote className="text-gray-400 italic">
                  <span>{review.words}</span>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default News;
