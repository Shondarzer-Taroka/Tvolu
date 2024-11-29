import React from 'react';
import { IoClose } from "react-icons/io5";

const NewsCard = () => {
    return (
        <div>
            {/* <div className="max-w-sm rounded-lg  shadow-lg bg-white">
         
                <div className="relative">
                    <img
                        className="w-full h-48 object-cover"
                        src="https://via.placeholder.com/350x250"
                        alt="Volunteer working"
                    />
                 
                    <div className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                        CHARITY
                    </div>
                
                    <div className="absolute bottom-4 left-[-10px] bg-brown-600 text-white px-3 py-2">
                        <p className="text-xs font-semibold">03</p>
                        <p className="text-xs uppercase">May</p>
                        <div className='w-[10px] h-[10px] bg-black rotate-6 absolute top-[-10px] left-[0px]'>
                            
                        </div>
                    </div>
                </div>

         
                <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800">
                        A Day In The Life Of A Volunteer
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>

         
                    <a
                        href="#"
                        className="flex items-center text-sm font-medium text-brown-700 mt-4 hover:underline"
                    >
                        Read More <span className="ml-1">&rarr;</span>
                    </a>
                </div>
            </div> */}
            <div className="max-w-sm rounded-lg shadow-lg bg-white">
                {/* Image Section */}
                <div className="relative">
                    <img
                        className="w-full h-48 object-cover"
                        src="https://via.placeholder.com/350x250"
                        alt="Volunteer working"
                    />
                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                        CHARITY
                    </div>
                    {/* Date */}
                    <div className="absolute bottom-4 left-[-12px] bg-brown-600 text-white px-3 py-2">
                        <p className="text-xs font-semibold">03</p>
                        <p className="text-xs uppercase">May</p>
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

            <aside>
                <NewsCard />
            </aside>

        </section>
    );
};

export default NewsPage;