import React from 'react'
import styles, { layout } from "../../style";
import { news } from "../../constants/index"
import NewsCard from "../../components/utils/NewsCard";

const News = () => {
    return (
        <div className={`${styles.paddingX} ${styles.flexStart} `}>
            <div className={`${styles.boxWidth} sm:py-6 py-4`}>
                <section id="news" className="mx-4">
                    <h1 className="relative text-blue-500 font-bold md:text-[80px] text-[44px]">
                        THE LATEST <span className='text-primary'>NEWS</span>
                    </h1>
                    <div className='flex justify-around items-center'>
                        <div className="all-news grid grid-cols-2 gap-y-6 overflow-x-hidden">
                            {news.map((newsItem) => (
                                <NewsCard
                                    key={newsItem.id}
                                    title={newsItem.title}
                                    category={newsItem.category}
                                    date={newsItem.date}
                                    imglink={newsItem.imglink}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default News