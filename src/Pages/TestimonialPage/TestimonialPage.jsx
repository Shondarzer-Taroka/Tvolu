import React from 'react';
import donation_2 from '../../../src/assets/donation/alexander-simonsen-pPDzeITv26o-unsplash.jpg'
import { FaRegStar } from "react-icons/fa";
import './TestimonialPage.css'
const TestimonialCard = ({ text, name, role, image }) => {
    return (
        <div className="bg-white shadow-lg p-6 rounded-xl">
            <p className="text-gray-700 italic mb-4">"{text}"</p>
            <div className="flex items-center gap-4">
                <img
                    src={image}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                    <h5 className="text-sm font-bold text-gray-800">{name}</h5>
                    <p className="text-xs text-gray-500">{role}</p>
                </div>
            </div>
        </div>
    );
};





// const TestimonialPage = () => {
   

//     return (
//         <div className="bg-background min-h-screen py-10 px-6">
//             {/* <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
//       </div> */}

//             <div id='parent' className='flex gap-2'>

//                 <div className='w-[45%]'>
//                     <img className='h-full w-full' src={donation_2} alt="inspiring man" />
//                 </div>

//                 <div className='w-[55%]'>
//                     <div className='ml-9'>
//                         <FaRegStar />

//                         <div className='relative flex justify-center'>
//                             <div className='w-[50px] h-[50px] bg-red-400 rounded-full '>
//                             </div>
//                             <div className='w-[50px] h-[50px] bg-red-400 rounded-full border-2 border-gray-300 absolute top-1'>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='flex items-center opacity-50'>
//                         <div className='w-[70px] h-[2px] bg-neutral-500'></div>
//                         <h1 className='uppercase font-semibold text-[14px]'>Stories of Change</h1>
//                     </div>
//                     <div>
//                         <h1 className='text-3xl font-bold'>
//                             Read inspiring stories of individuals and communities.
//                         </h1>
//                         <p className='opacity-75'>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                             Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TestimonialPage;


const TestimonialPage = () => {
    return (
        <div className="bg-background min-h-screen  px-6">
            <div id="parent" className="flex gap-6 justify-center">
                {/* Left Section */}
                <div className="w-[45%]">
                    <img
                        className="h-full w-full rounded-lg object-cover"
                        src={donation_2}
                        alt="Inspiring man"
                    />
                </div>

                {/* Right Section */}
                <div className="w-[55%]">
                    <div className="ml-9 relative ">
                        {/* Spinning Star */}
                        <FaRegStar
                            className="text-yellow-500 text-4xl animate-spin"
                            style={{
                                animation: "spin 2s linear infinite",
                            }}
                        />

                        {/* Spinning Circles */}
                        <div className="relative flex justify-center items-center ">
                            <div className="w-[40px] h-[40px] rounded-full border-[3px] border-yellow-400 animate-spin-slow"></div>
                            <div className="absolute w-[35px] h-[35px] rounded-full border-[3px] border-pink-400 animate-spin-reverse"></div>
                        </div>
                    </div>

                    {/* Section Title */}
                    <div className="flex items-center mt-10 opacity-50">
                        <div className="w-[70px] h-[2px] bg-neutral-500"></div>
                        <h1 className="uppercase font-semibold text-[14px] ml-3">
                            Stories of Change
                        </h1>
                    </div>

                    {/* Content Section */}
                    <div className="mt-2">
                        <h1 className="text-3xl font-bold">
                            Read inspiring stories of individuals and communities.
                        </h1>
                        <p className="opacity-75 mt-3 text-[16px] leading-[1.3]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>


                    
                </div>
            </div>
        </div>
    );
};

export default TestimonialPage;


const testimonials = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        name: 'Mr. John Doe',
        role: 'Charity Recipient',
        image: donation_2,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        name: 'Mr. John Doe',
        role: 'Charity Recipient',
        image: donation_2,
    },
];