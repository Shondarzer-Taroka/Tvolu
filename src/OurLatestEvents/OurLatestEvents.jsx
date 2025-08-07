import donation_4 from '../../src/assets/donation/blk.jpg';
import { FaPlay } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import donation_5 from '../../src/assets/donation/pexels-liza-summer-6348129.jpg';
import './OurLatestEvents.css'
const OurLatestEvents = () => {
    return (
        <section
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .8) 56%, rgba(0, 0, 0, 0) 50%), url(${donation_5})`,
                backgroundAttachment: 'fixed', // Key for parallax effect
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
            className="relative md:h-[700px]"
        >
            <aside className='text-white p-4'>
                <h1 className='text-4xl font-bold uppercase'>
                    Stay up-to-date with our latest <br /> events and community initiatives.
                </h1>
                <div className="flex items-center mt-10 opacity-70">
                    <div className="w-[70px] h-[2px] bg-neutral-500"></div>
                    <h1 className="uppercase font-semibold text-[14px] ml-3">
                        Upcoming Events
                    </h1>
                </div>

                <div id='content' className=' grid grid-cols-1 md:flex gap-2'>
                    {[1, 2, 3].map((_, idx) => (
                        <div key={idx} className=" md:w-[300px] relative rounded-xl border-[8px] border-white">
                            <img className='w-full rounded' src={donation_4} alt="Event Thumbnail" />
                            <button className='absolute top-2 left-2 uppercase text-[20px] bg-[#748e54] px-3 py-1 rounded-full text-white'>
                                Upcoming
                            </button>
                            <button className='hover:bg-brown-400 absolute top-0 right-0 bg-white px-4 py-3 rounded-bl-3xl rounded-tr'>
                                <FaPlay className='text-[20px] text-black -mt-1' />
                            </button>
                            <div className='reminder-cont absolute md:left-3 bottom-0 md:bottom-[-90px] w-full md:w-[260px] rounded-t-2xl md:rounded-3xl p-4 text-[23px] space-y-4 bg-white text-black'>
                                <h1 className='font-semibold leading-[1.4]'>
                                    Community Cleanup Day Events
                                </h1>
                                <p className='leading-[1.4] opacity-55 text-[15px]'>
                                    Lorem ipsum dolor sit amet consectetur
                                </p>
                                <button className='reminder-btn uppercase flex items-center text-[13px] text-brown-400'>
                                    Get Reminder <FaArrowRightLong className="ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
        </section>

    );
};

export default OurLatestEvents;
