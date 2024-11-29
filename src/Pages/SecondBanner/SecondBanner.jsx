// import { Fade } from "react-awesome-reveal";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Keyboard, Navigation, } from 'swiper/modules';

// const SecondBanner = () => {
//     return (
//         <div>

//             <Swiper 
            
//             autoplay={{ delay: 2000, disableOnInteraction: false }}
//                 speed={1500}
//                 loop={true}
//                 slidesPerView={1}
//                 spaceBetween={30}
//                 keyboard={{
//                     enabled: true,
//                 }}

//                 navigation={true}
//                 modules={[Keyboard, Navigation]}>
            
//             <SwiperSlide>

//             <div className=" rounded-lg w-full h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.ibb.co/BjQdYgz/pexels-rdne-6647037-1.jpg)` }}>

//                 <div className="w-[100%] h-full bg-[#080707c0]">
//                     <div className="md:w-[90%] h-full  mx-auto p-3 md:p-4">

           
//                     <div className="flex justify-center  flex-col gap-4 w-[100%] h-full text-white ">
                      
//                       <Fade direction="left">
//                         <h3 className="font-poppins text-[34px] font-bold ">
//                        Welcome to the Tvolu,
//                         </h3>
//                       </Fade>
                        
//                         <Fade direction="top" delay={2000}>
//                         <p className="text-[21px] text-[#f5f1f1] md:w-[300px]">where every click echoes with the symphony of service.Tvolu is the epitome of volunteerism redefined.</p>
//                         </Fade>
                       
//                         <Fade direction="left" delay={3000}>
//                                <button className="btn btn-info w-max">Get started</button>
//                         </Fade>
                     
//                     </div>
//                     </div>
        
//                 </div>

//             </div>


//             </SwiperSlide>



//             {/* 2nd */}
//             <SwiperSlide>

//             <div className=" rounded-lg w-full h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.ibb.co/ryFnyKQ/pexels-rdne-6646918-1.jpg)` }}>

//                 <div className="w-[100%] h-full bg-[#080707c0]">
//                     <div className="md:w-[90%] h-full  mx-auto p-3 md:p-4">

           
//                     <div className="flex justify-center  flex-col gap-4 w-[100%] h-full text-white ">
                      
//                       <Fade direction="left">
//                         <h3 className="font-poppins text-[34px] font-bold ">
//                         Welcome to the Tvolu,
//                         </h3>
//                       </Fade>
                        
//                         <Fade direction="top" delay={2000}>
//                         <p className="text-[21px] text-[#f5f1f1] md:w-[300px]"> Discover meaningful opportunities to make a difference in your community. Together, we can create positive change, one volunteer at a time.</p>
//                         </Fade>
                       
//                         <Fade direction="left" delay={3000}>
//                                <button className="btn btn-info w-max">Get started</button>
//                         </Fade>
                     
//                     </div>
//                     </div>
        
//                 </div>

//             </div>


//             </SwiperSlide>



//             <SwiperSlide>

// <div className=" rounded-lg w-full h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.ibb.co/2vyYDpM/volb3-1.jpg)` }}>

//     <div className="w-[100%] h-full bg-[#080707c0]">
//         <div className="md:w-[90%] h-full  mx-auto p-3 md:p-4">


//         <div className="flex justify-center  flex-col gap-4 w-[100%] h-full text-white ">
          
//           <Fade direction="left">
//             <h3 className="font-poppins text-[34px] font-bold ">
//             Welcome to the Tvolu,
//             </h3>
//           </Fade>
            
//             <Fade direction="top" delay={2000}>
//             <p className="text-[21px] text-[#f5f1f1] md:w-[300px]">Explore diverse volunteer opportunities tailored to your interests and skills. Join us in building stronger communities.</p>
//             </Fade>
           
//             <Fade direction="left" delay={3000}>
//                    <button className="btn btn-info w-max">Get started</button>
//             </Fade>
         
//         </div>
//         </div>

//     </div>

// </div>


// </SwiperSlide>

//             </Swiper>



//         </div>
//     );
// };

// export default SecondBanner;









import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Keyboard, Navigation, Autoplay } from "swiper/modules";

const SecondBanner = () => {
    return (
        <div>
            <Swiper
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1500}
                loop={true}
                slidesPerView={1}
                keyboard={{ enabled: true }}
                navigation={true}
                modules={[Keyboard, Navigation, Autoplay]}
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        className="rounded-lg w-full h-screen bg-cover bg-center"
                        style={{ backgroundImage: `url(https://i.ibb.co/BjQdYgz/pexels-rdne-6647037-1.jpg)` }}
                    >
                        <div className="w-full h-full bg-black/50">
                            <div className="container mx-auto flex flex-col justify-center items-center h-full p-6 text-center text-white">
                                <Fade direction="left">
                                    <h3 className="text-4xl md:text-5xl font-bold mb-4">
                                        Welcome to Tvolu
                                    </h3>
                                </Fade>
                                <Fade direction="top" delay={1000}>
                                    <p className="text-lg md:text-xl max-w-md">
                                        Where every click echoes with the symphony of service. Tvolu is the epitome of volunteerism redefined.
                                    </p>
                                </Fade>
                                <Fade direction="left" delay={1500}>
                                    <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300">
                                        Get Started
                                    </button>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        className="rounded-lg w-full h-screen bg-cover bg-center"
                        style={{ backgroundImage: `url(https://i.ibb.co/ryFnyKQ/pexels-rdne-6646918-1.jpg)` }}
                    >
                        <div className="w-full h-full bg-black/50">
                            <div className="container mx-auto flex flex-col justify-center items-center h-full p-6 text-center text-white">
                                <Fade direction="left">
                                    <h3 className="text-4xl md:text-5xl font-bold mb-4">
                                        Welcome to Tvolu
                                    </h3>
                                </Fade>
                                <Fade direction="top" delay={1000}>
                                    <p className="text-lg md:text-xl max-w-md">
                                        Discover meaningful opportunities to make a difference in your community. Together, we can create positive change, one volunteer at a time.
                                    </p>
                                </Fade>
                                <Fade direction="left" delay={1500}>
                                    <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300">
                                        Get Started
                                    </button>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div
                        className="rounded-lg w-full h-screen bg-cover bg-center"
                        style={{ backgroundImage: `url(https://i.ibb.co/2vyYDpM/volb3-1.jpg)` }}
                    >
                        <div className="w-full h-full bg-black/50">
                            <div className="container mx-auto flex flex-col justify-center items-center h-full p-6 text-center text-white">
                                <Fade direction="left">
                                    <h3 className="text-4xl md:text-5xl font-bold mb-4">
                                        Welcome to Tvolu
                                    </h3>
                                </Fade>
                                <Fade direction="top" delay={1000}>
                                    <p className="text-lg md:text-xl max-w-md">
                                        Explore diverse volunteer opportunities tailored to your interests and skills. Join us in building stronger communities.
                                    </p>
                                </Fade>
                                <Fade direction="left" delay={1500}>
                                    <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300">
                                        Get Started
                                    </button>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SecondBanner;
