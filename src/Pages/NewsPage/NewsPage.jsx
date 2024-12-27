import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";

const NewsCard = ({ title, description, image, date, newsContent, category }) => {
    const mydate = new Date(date);
    const day = mydate.toLocaleDateString('en-GB', { day: '2-digit' });
    const month = mydate.toLocaleDateString('en-GB', { month: 'short' });
    return (
        <div>
            <div className="md:max-w-sm rounded-lg shadow-lg bg-white">
                {/* Image Section */}
                <div className="relative">
                    <img
                        className="w-full h-48 object-cover"
                        src={image}
                        alt="Volunteer working"
                    />
                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {category}
                    </div>
                    {/* Date */}
                    <div className="absolute bottom-4 left-[-12px] bg-brown-600 text-white px-3 py-2">
                        <p className="text-xs font-semibold">{day} </p>
                        <p className="text-xs uppercase">{month}</p>
                        {/* Triangle */}
                        <div
                            className="absolute rotate-[135deg] top-[-7px] left-[1px]  w-0 h-0"
                            style={{
                                borderLeft: '8px solid transparent',
                                borderRight: '8px solid transparent',
                                borderBottom: '8px solid #8B4513', // Brown color for the triangle
                            }}
                        ></div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800">
                        A Day In The Life Of A Volunteer
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>

                    {/* Read More */}
                    <a
                        href="#"
                        className="flex items-center text-sm font-medium text-brown-700 mt-4 hover:underline"
                    >
                        Read More <span className="ml-1">&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    );
};




const NewsPage = () => {
    let [news, setNews] = useState([])
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        // async function getData() {
        //     setLoading(true)
        //     let result = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/news-content`)
        //     if (Array.isArray(result.data)) {
        //         console.log(result.data);

        //         setNews(result.data)
        //     }
        //     else{
        //         setNews([])
        //     }

        //     setLoading(false)
        // }
        // getData()
        setLoading(true)
        fetch(`${import.meta.env.VITE_BASE_URL}/api/news-content`)
        .then(res => res.json())
        .then(data => setNews(data)) // No need to call data.json() here, because it's already parsed
        .catch(error => {
          console.error('Error fetching news content:', error);
          // Handle error (e.g., show an error message to the user)
        }).finally(()=> setLoading(false))
       
    }, [])
    console.log(news);

    if (loading) {
        return 'loading....'
    }

    return (
        <section>
            <aside>
                <div className='relative'>
                    <div>
                        <div className='relative'>
                            <div className='w-[30px] h-[30px] border border-gray-300 rounded-full shadow-lg' ></div>
                            <div className='w-[30px] h-[30px] bg-[#955e42] rounded-full absolute top-2 left-2 shadow-lg' ></div>
                        </div>

                    </div>
                    <div className='flex justify-around'>
                        <IoClose className='text-[#748e54] font-bold' />
                        <div className="flex items-center mt-10 opacity-50">
                            <div className="w-[70px] h-[2px] bg-neutral-500"></div>
                            <h1 className="uppercase font-semibold text-[14px] ml-3">
                                OUR NEWS
                            </h1>
                        </div>

                        <div className='relative mt-14'>
                            <div className='w-[30px] h-[30px] border border-gray-300 rounded-full shadow-lg' ></div>
                            <div className='w-[30px] h-[30px] bg-[#955e42] rounded-full absolute top-2 left-2 shadow-lg' ></div>
                        </div>
                    </div>
                </div>

                <h5 className='text-5xl font-bold text-center'>Discover Our Updates & Charity <br /> News Content.</h5>
            </aside>

            <aside className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {news.map(newsCard => <NewsCard key={newsCard._id}
                    title={newsCard.title}
                    description={newsCard.description}
                    category={newsCard.category}
                    image={newsCard.image}
                    date={newsCard.date}
                    newsContent={newsCard.newsContent} />)}
            </aside>

        </section>
    );
};

export default NewsPage;