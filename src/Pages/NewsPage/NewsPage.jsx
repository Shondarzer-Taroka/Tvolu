/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const NewsCard = ({ title, description, image, date, category, _id }) => {
    // console.log(description.split(''));

    const mydate = new Date(date);
    const day = mydate.toLocaleDateString('en-GB', { day: '2-digit' });
    const month = mydate.toLocaleDateString('en-GB', { month: 'short' });
    return (
        <div>
            <div className="md:max-w-sm rounded-lg shadow-lg  bg-white dark:bg-gray-800 dark:text-white">
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
                <div className="p-5 h-[180px] overflow-hidden flex flex-col justify-end ">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {title}
                    </h3>
                  
                    <p
                        className="text-sm dark:text-white text-gray-600 mt-2 leading-relaxed overflow-hidden text-ellipsis"
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2, // Adjust the number of lines
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {description}
                    </p>
                    
                    {/* Read More */}
                    <Link
                        to={`/readmore/${_id}`}
                        className="flex items-center text-sm font-medium dark:text-white  text-brown-700 mt-4 hover:underline"
                    >
                        Read More <span className="ml-1">&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};




const NewsPage = () => {
    let [news, setNews] = useState([])
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_BASE_URL}/api/news-content`)
            .then(res => res.json())
            .then(data => setNews(data)) // No need to call data.json() here, because it's already parsed
            .catch(error => {
                console.error('Error fetching news content:', error);
                // Handle error (e.g., show an error message to the user)
            }).finally(() => setLoading(false))

    }, [])
    console.log(news);

    if (loading) {
        return 'loading....'
    }

    return (
        <section>
            <aside className='dark:text-white'>
                <div className='relative'>
                    
                    <div className='flex justify-around mt-6'>
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

                <h5 className='text-3xl uppercase md:text-5xl font-bold text-center'>Discover Our Updates & Charity <br /> News Content.</h5>
            </aside>

            <aside className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14'>
                {news.map(newsCard => <NewsCard key={newsCard._id}
                    title={newsCard.title}
                    description={newsCard.description}
                    category={newsCard.category}
                    image={newsCard.image}
                    _id={newsCard._id}
                    date={newsCard.date}
                    newsContent={newsCard.newsContent} />)}
            </aside>

        </section>
    );
};

export default NewsPage;