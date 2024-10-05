import styles, { layout } from "../../style";
import { news } from "../../constants";
import NewsCard from "../../components/utils/NewsCard";
import icon from "./icon.svg"
import "./home.css";

const review = [
  {
    id: "1",
    name: "devin Joe",
    words: "Lorem ipsum Dorelo, lorem ipsum dolero, lorem ipsum dolre jipms hint gildhin"
  },
  {
    id: "2",
    name: "devin Joe",
    words: "Lorem ipsum Dorelo, lorem ipsum dolero, lorem ipsum dolre jipms hint gildhin"
  },
  {
    id: "3",
    name: "devin Joe",
    words: "Lorem ipsum Dorelo, lorem ipsum dolero, lorem ipsum dolre jipms hint gildhin"
  }
]

const News = () => (
  <div className={`bg-dimBlue ${styles.paddingX} ${styles.flexStart} `}>
    <div className={`${styles.boxWidth} sm:py-6 py-4`}>
      <section id="news" className="mx-4">
        <h1 className="relative text-primary font-bold md:text-[80px] text-[44px] text-black">
          THE LATEST
        </h1>
        <div className="all-news flex flex-row overflow-x-scroll none overflow-y-hidden scrollbar-hidden">
          {review.map((review) => {
            return (
              <div className="m-3 p-3 bg-black rounded-xl">
                <img className="w-10 my-6 py-6" src={icon}></img>
                <span>
                  <span className="text-2xl font-bold">{review.name}</span>
                </span>
                <div>
                  <blockquote>
                    <span>{review.words}</span>
                  </blockquote>
                </div>
              </div>
            )
          })}
        </div>
      </section >
    </div >
  </div >
);

export default News;
