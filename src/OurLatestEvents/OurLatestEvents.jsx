import donation_4 from '../../src/assets/donation/blk.jpg'
import { FaPlay } from "react-icons/fa6";


const OurLatestEvents = () => {
    //   const events = [
    //     {
    //       title: "Community Cleanup Day Events",
    //       description: "Lorem ipsum dolor sit amet consectetur",
    //       image: "https://via.placeholder.com/150", // Replace with actual image URL
    //     },
    //     {
    //       title: "Food Drive For The Homeless",
    //       description: "Lorem ipsum dolor sit amet consectetur",
    //       image: "https://via.placeholder.com/150", // Replace with actual image URL
    //     },
    //     {
    //       title: "Fundraising Gala: A Night Of Giving",
    //       description: "Lorem ipsum dolor sit amet consectetur",
    //       image: "https://via.placeholder.com/150", // Replace with actual image URL
    //     },
    //   ];

    return (
        <section>
            <aside className='bg-black'>
                <div >
                    <div className='w-[300px] relative rounded-xl border-[8px] border-white '>
                        <img className='w-full rounded' src={donation_4} alt="" />
                        <button className='absolute top-2 left-2 uppercase text-[20px] bg-[#748e54] px-3 py-1 rounded-full text-white'>upcoming</button>
                      <button className=' hover:bg-brown-400 absolute top-0 right-0 bg-white px-4 py-3  rounded-bl-3xl  rounded-tr'><FaPlay className='text-[20px] -mt-1' /></button>
                    </div>
                </div>
            </aside>
        </section>
    );
};

export default OurLatestEvents;
