// import { Fade } from "react-awesome-reveal";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import { Keyboard, Navigation, Autoplay } from "swiper/modules";

// const SecondBanner = () => {
//     return (
//         <div className="relative mt-9">
//             <Swiper
//                 autoplay={{ 
//                     delay: 5000, 
//                     disableOnInteraction: false,
//                     pauseOnMouseEnter: true 
//                 }}
//                 speed={1000}
//                 loop={true}
//                 slidesPerView={1}
//                 keyboard={{ enabled: true }}
//                 navigation={{
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                 }}
//                 modules={[Keyboard, Navigation, Autoplay]}
//                 className="h-[700px]"
//             >
//                 {/* Slide 1 - Hero Impact */}
//                 <SwiperSlide>
//                     <div className="relative w-full h-full bg-cover bg-center" 
//                          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop)` }}>
//                         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40">
//                             <div className="container mx-auto flex flex-col justify-center items-start h-full px-6 lg:px-16 text-white">
//                                 <Fade cascade damping={0.2} direction="up">
//                                     <span className="text-lg md:text-xl font-semibold text-blue-300 mb-2">Join The Movement</span>
//                                     <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 max-w-2xl">
//                                         Empower Change <br/> Through <span className="text-blue-400">Volunteering</span>
//                                     </h1>
//                                     <p className="text-lg md:text-xl max-w-xl mb-8">
//                                         Discover meaningful opportunities to make a real difference in your community and beyond.
//                                     </p>
//                                     <div className="flex flex-col sm:flex-row gap-4">
//                                         <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
//                                             Find Opportunities
//                                         </button>
//                                         <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/20 rounded-lg font-semibold transition-all duration-300">
//                                             Learn More
//                                         </button>
//                                     </div>
//                                 </Fade>
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>

//                 {/* Slide 2 - Community Focus */}
//                 <SwiperSlide>
//                     <div className="relative w-full h-full bg-cover bg-center" 
//                          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop)` }}>
//                         <div className="absolute inset-0 bg-gradient-to-l from-green-900/70 to-green-900/40">
//                             <div className="container mx-auto flex flex-col justify-center items-end h-full px-6 lg:px-16 text-white">
//                                 <Fade cascade damping={0.2} direction="up">
//                                     <span className="text-lg md:text-xl font-semibold text-green-300 mb-2">Build Together</span>
//                                     <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-right max-w-2xl">
//                                         Stronger <span className="text-green-400">Communities</span> Start With You
//                                     </h1>
//                                     <p className="text-lg md:text-xl max-w-xl mb-8 text-right">
//                                         Connect with local organizations and create lasting impact where it matters most.
//                                     </p>
//                                     <div className="flex flex-col sm:flex-row gap-4">
//                                         <button className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
//                                             Browse Local Causes
//                                         </button>
//                                         <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/20 rounded-lg font-semibold transition-all duration-300">
//                                             Our Partners
//                                         </button>
//                                     </div>
//                                 </Fade>
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>

//                 {/* Slide 3 - Personal Growth */}
//                 <SwiperSlide>
//                     <div className="relative w-full h-full bg-cover bg-center" 
//                          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop)` }}>
//                         <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-purple-900/40">
//                             <div className="container mx-auto flex flex-col justify-center items-center h-full px-6 text-white text-center">
//                                 <Fade cascade damping={0.2} direction="up">
//                                     <span className="text-lg md:text-xl font-semibold text-purple-300 mb-2">Grow While Giving</span>
//                                     <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 max-w-3xl">
//                                         Develop Skills <br/> While <span className="text-purple-400">Helping Others</span>
//                                     </h1>
//                                     <p className="text-lg md:text-xl max-w-2xl mb-8">
//                                         Volunteering isn't just about giving back - it's about growing personally and professionally.
//                                     </p>
//                                     <div className="flex flex-col sm:flex-row gap-4">
//                                         <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
//                                             Skill-Based Volunteering
//                                         </button>
//                                         <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/20 rounded-lg font-semibold transition-all duration-300">
//                                             Success Stories
//                                         </button>
//                                     </div>
//                                 </Fade>
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>

//                 {/* Custom Navigation Arrows */}
//                 <div className="swiper-button-prev !text-white !left-4 !w-12 !h-12 after:!text-2xl"></div>
//                 <div className="swiper-button-next !text-white !right-4 !w-12 !h-12 after:!text-2xl"></div>
                
//                 {/* Pagination */}
//                 <div className="swiper-pagination !bottom-8 [&>.swiper-pagination-bullet]:!bg-white [&>.swiper-pagination-bullet]:!opacity-50 [&>.swiper-pagination-bullet-active]:!bg-blue-400 [&>.swiper-pagination-bullet-active]:!opacity-100"></div>
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
  // Internal slides data
  const slides = [
    {
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      gradientFrom: "black/70",
      gradientTo: "black/40",
      accentColor: "blue-400",
      preTitle: "Join The Movement",
      title: "Empower Change Through Volunteering",
      highlightedText: "Volunteering",
      description: "Discover meaningful opportunities to make a real difference in your community and beyond.",
      textAlignment: "left",
      primaryButton: { text: "Find Opportunities" },
      secondaryButton: { text: "Learn More" }
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1549923746-c502d488b3ea",
      gradientFrom: "green-900/70",
      gradientTo: "green-900/40",
      accentColor: "green-400",
      preTitle: "Build Together",
      title: "Stronger Communities Start With You",
      highlightedText: "Communities",
      description: "Connect with local organizations and create lasting impact where it matters most.",
      textAlignment: "right",
      primaryButton: { text: "Browse Local Causes" },
      secondaryButton: { text: "Our Partners" }
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      gradientFrom: "purple-900/70",
      gradientTo: "purple-900/40",
      accentColor: "purple-400",
      preTitle: "Grow While Giving",
      title: "Develop Skills While Helping Others",
      highlightedText: "Helping Others",
      description: "Volunteering isn't just about giving back - it's about growing personally and professionally.",
      textAlignment: "center",
      primaryButton: { text: "Skill-Based Volunteering" },
      secondaryButton: { text: "Success Stories" }
    }
  ];

  // Helper functions
  const getGradientDirection = (alignment) => {
    switch (alignment) {
      case "left": return "r";
      case "right": return "l";
      case "center": return "b";
      default: return "r";
    }
  };

  const getButtonColor = (accentColor) => {
    return accentColor.split("-")[1] + "-600";
  };

  const getButtonHoverColor = (accentColor) => {
    return accentColor.split("-")[1] + "-700";
  };

  return (
    <div className="relative mt-9">
      <Swiper
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        speed={1000}
        loop={true}
        slidesPerView={1}
        keyboard={{ enabled: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Keyboard, Navigation, Autoplay]}
        className="h-[700px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-${getGradientDirection(slide.textAlignment)} from-${slide.gradientFrom} to-${slide.gradientTo}`}
              >
                <div
                  className={`container mx-auto flex flex-col justify-center h-full px-6 lg:px-16 text-white ${
                    slide.textAlignment === "left" ? "items-start" :
                    slide.textAlignment === "right" ? "items-end" :
                    "items-center text-center"
                  }`}
                >
                  <Fade cascade damping={0.2} direction="up">
                    <span className={`text-lg md:text-xl font-semibold mb-2 text-${slide.accentColor}`}>
                      {slide.preTitle}
                    </span>
                    <h1
                      className={`text-4xl md:text-6xl font-bold leading-tight mb-4 max-w-2xl ${
                        slide.textAlignment === "right" ? "text-right" : ""
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: slide.title.replace(
                          slide.highlightedText,
                          `<span class="text-${slide.accentColor}">${slide.highlightedText}</span>`
                        )
                      }}
                    />
                    <p
                      className={`text-lg md:text-xl max-w-xl mb-8 ${
                        slide.textAlignment === "right" ? "text-right" : ""
                      }`}
                    >
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        className={`px-8 py-3 bg-${getButtonColor(slide.accentColor)} hover:bg-${getButtonHoverColor(slide.accentColor)} rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        {slide.primaryButton.text}
                      </button>
                      <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/20 rounded-lg font-semibold transition-all duration-300">
                        {slide.secondaryButton.text}
                      </button>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="swiper-button-prev !text-white !left-4 !w-12 !h-12 after:!text-2xl"></div>
        <div className="swiper-button-next !text-white !right-4 !w-12 !h-12 after:!text-2xl"></div>
        
        {/* Pagination */}
        <div className="swiper-pagination !bottom-8 [&>.swiper-pagination-bullet]:!bg-white [&>.swiper-pagination-bullet]:!opacity-50 [&>.swiper-pagination-bullet-active]:!bg-blue-400 [&>.swiper-pagination-bullet-active]:!opacity-100"></div>
      </Swiper>
    </div>
  );
};

export default SecondBanner;