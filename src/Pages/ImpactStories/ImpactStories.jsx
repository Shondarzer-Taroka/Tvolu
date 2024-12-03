// import { useState } from 'react';
// import { TiTick } from "react-icons/ti";
// import { IoClose } from "react-icons/io5";
// import { FaPlay } from 'react-icons/fa6';
// import donation_5 from '../../../src/assets/donation/madeleine-maguire-T1bT4Os3t3w-unsplash.jpg';

// const ImpactStories = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handlePlayClick = () => {
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <section>



//             <div className='flex items-center gap-2'>
//                 <aside className='w-[50%] h-full'>
//                     <div className="relative h-full">
//                         <img src={donation_5} alt="" className="w-full h-full rounded-3xl" />
//                         {/* Play Icon */}
//                         <div
//                             className="absolute inset-0 flex justify-center items-center"
//                             onClick={handlePlayClick}
//                         >
//                             <div className="bg-white rounded-full p-4 shadow-lg cursor-pointer hover:scale-105 transition-transform">
//                                 <FaPlay className="text-black text-2xl" />
//                             </div>
//                         </div>
//                     </div>
//                 </aside>


//                 <aside className='w-[50%]'>
//                     <div className="flex items-center mt-10 opacity-50">
//                         <div className="w-[70px] h-[2px] bg-neutral-500"></div>
//                         <h1 className="uppercase font-semibold text-[14px] ml-3">
//                             Impact Stories
//                         </h1>
//                     </div>

//                     <h1 className='text-4xl font-bold'>
//                         Discover how we're making a difference and how you can get involved.
//                     </h1>

//                     <p className='opacity-70 text-[19px]'>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         Ut elit tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
//                     </p>
//                     <div>
//                         <p className='flex gap-1'><TiTick className='text-[#553739]' />  <span className='opacity-70 text-[18px]'>Lorem ipsum dolor sit amet</span> </p>
//                         <p className='flex gap-1'><TiTick className='text-[#553739]' /> <span className='opacity-70 text-[18px]'>Lorem ipsum dolor sit amet</span> </p>
//                         <button className='uppercase text-[15px] font-semibold bg-[#553739] px-4 py-2 rounded-full text-white'>Learn More</button>
//                     </div>
//                 </aside>

//             </div>
//             {/* Modal */}
//             {isModalOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//                     <div className="relative w-[80%] h-[60%] bg-white rounded-lg overflow-hidden">
//                         <iframe
//                             width="100%"
//                             height="100%"
//                             src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                             title="YouTube video player"
//                             frameBorder="0"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                         ></iframe>
//                         <button
//                             className="absolute top-0 right-0 rounded-full "
//                             onClick={handleCloseModal}
//                         >
//                             <IoClose />
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default ImpactStories;








// import { useState } from "react";
// import { TiTick } from "react-icons/ti";
// import { IoClose } from "react-icons/io5";
// import { FaPlay } from "react-icons/fa6";
// import donation_5 from "../../../src/assets/donation/madeleine-maguire-T1bT4Os3t3w-unsplash.jpg";

// const ImpactStories = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handlePlayClick = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <section className="py-16">
//       <div className="flex items-center gap-6 container mx-auto px-6 lg:px-20">
//         {/* Left Section: Image with Play Icon */}
//         <aside className="w-1/2 relative">
//           <div className="relative rounded-3xl overflow-hidden shadow-lg">
//             <img
//               src={donation_5}
//               alt="Impact story"
//               className="w-full h-full object-cover"
//             />
//             <div
//               className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-all cursor-pointer"

//             >
//               <div className="bg-white rounded-full p-5 shadow-lg hover:scale-110 transition-transform">
//                 <FaPlay className="text-black text-3xl" onClick={handlePlayClick}/>
//               </div>
//             </div>
//           </div>
//         </aside>

//         {/* Right Section: Content */}
//         <aside className="w-1/2 space-y-6">
//           <div className="flex items-center opacity-70">
//             <div className="w-16 h-[2px] bg-neutral-500"></div>
//             <h2 className="uppercase font-semibold text-sm ml-3 tracking-wider">
//               Impact Stories
//             </h2>
//           </div>
//           <h1 className="text-4xl font-bold leading-tight">
//             Discover how we're making a difference and how you can get involved.
//           </h1>
//           <p className="opacity-70 text-lg">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//             tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
//           </p>
//           <div className="space-y-2">
//             <p className="flex gap-2 items-center">
//               <TiTick className="text-[#553739] text-xl" />
//               <span className="opacity-70 text-lg">Lorem ipsum dolor sit amet</span>
//             </p>
//             <p className="flex gap-2 items-center">
//               <TiTick className="text-[#553739] text-xl" />
//               <span className="opacity-70 text-lg">Lorem ipsum dolor sit amet</span>
//             </p>
//           </div>
//           <button className="uppercase text-sm font-semibold bg-[#553739] px-6 py-2 rounded-full text-white shadow-md hover:bg-opacity-90 transition-all">
//             Learn More
//           </button>
//         </aside>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//           <div className="relative w-[90%] lg:w-[60%] aspect-video bg-white rounded-lg overflow-hidden shadow-xl">
//             <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <button
//               className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all"
//               onClick={handleCloseModal}
//             >
//               <IoClose className="text-xl text-black" />
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ImpactStories;




import donation_6 from '../../../src/assets/donation/2148637984.jpg';
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";
import donation_5 from "../../../src/assets/donation/madeleine-maguire-T1bT4Os3t3w-unsplash.jpg";
import { FaPlus } from "react-icons/fa6";

const ImpactStories = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlayClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="py-16">
            <div className="container mx-auto  flex justify-between items-stretch gap-6 relative">
                {/* Left Section: Image with Play Icon */}
                <aside className="w-1/2 relative flex items-stretch">
                    <div className="relative rounded-3xl overflow-hidden shadow-lg flex-1">
                        <img
                            src={donation_5}
                            alt="Impact story"
                            className="w-full h-full object-cover"
                        />
                        <div
                            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-all cursor-pointer"
                        >
                            <div
                                className="bg-white rounded-full p-5 shadow-lg hover:scale-110 transition-transform"
                                onClick={handlePlayClick}
                            >
                                <FaPlay className="text-black text-3xl" />
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Right Section: Content */}
                <aside className="w-1/2 flex flex-col justify-center space-y-6 bg-white rounded-3xl shadow-lg p-8">
                    <div className="flex items-center opacity-70">
                        <div className="w-16 h-[2px] bg-neutral-500"></div>
                        <h2 className="uppercase font-semibold text-sm ml-3 tracking-wider">
                            Impact Stories
                        </h2>
                    </div>
                    <h1 className="text-4xl font-bold leading-tight">
                        Discover how we're making a difference and how you can get involved.
                    </h1>
                    <p className="opacity-70 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className="space-y-2">
                        <p className="flex gap-2 items-center">
                            <TiTick className="text-[#553739] text-xl" />
                            <span className="opacity-70 text-lg">Lorem ipsum dolor sit amet</span>
                        </p>
                        <p className="flex gap-2 items-center">
                            <TiTick className="text-[#553739] text-xl" />
                            <span className="opacity-70 text-lg">Lorem ipsum dolor sit amet</span>
                        </p>
                    </div>
                    <button className="uppercase text-sm font-semibold bg-[#553739] px-6 py-2 rounded-full text-white shadow-md hover:bg-opacity-90 transition-all">
                        Learn More
                    </button>
                </aside>


            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative w-[90%] lg:w-[60%] aspect-video bg-white rounded-lg overflow-hidden shadow-xl">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button
                            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all"
                            onClick={handleCloseModal}
                        >
                            <IoClose className="text-xl text-black" />
                        </button>
                    </div>
                </div>
            )}

            <article >
                <div className="bg-[#232020] rounded-t-3xl flex gap-5">


                    <div className="relative p-12">

                        <div className="relative">
                            <h1 className=" text-3xl font-bold text-[#9c914f]">10,000 </h1>
                            <FaPlus className="text-white text-[17px] absolute top-1 left-[100px] opacity-75" />
                        </div>

                        <div className="leading-[1.5] mt-7">
                            <h2 className="text-white text-[20px] font-semibold">Volunteer Hours Logged</h2>
                            <p className="text-white text-[20px] opacity-60">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className="relative p-12">

                        <div className="relative">
                            <h1 className=" text-3xl font-bold text-[#9c914f]">10,000 </h1>
                            <FaPlus className="text-white text-[17px] absolute top-1 left-[100px] opacity-75" />
                        </div>

                        <div className="leading-[1.5] mt-7">
                            <h2 className="text-white text-[20px] font-semibold">Volunteer Hours Logged</h2>
                            <p className="text-white text-[20px] opacity-60">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className="relative p-12">

                        <div className="relative">
                            <h1 className=" text-3xl font-bold text-[#9c914f]">10,000 </h1>
                            <FaPlus className="text-white text-[17px] absolute top-1 left-[100px] opacity-75" />
                        </div>

                        <div className="leading-[1.5] mt-7">
                            <h2 className="text-white text-[20px] font-semibold">Volunteer Hours Logged</h2>
                            <p className="text-white text-[20px] opacity-60">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .5) 56%, rgba(0, 0, 0, 0) 50%), url(${donation_6})`,
                        backgroundAttachment: 'fixed', // Key for parallax effect
                        backgroundPosition: 'top',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                    className="relative min-h-screen"
                >



                </div>
            </article>
        </section>
    );
};

export default ImpactStories;
