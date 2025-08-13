// 'use client';
// import { useState, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// const panels = 8; 
// const transitionDuration = 1; 
// const autoSlideInterval = 6000; 

// // Your volunteering slides data
// const slides = [
//   {
//     imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
//     gradientFrom: "black/70",
//     gradientTo: "black/40",
//     accentColor: "blue-400",
//     preTitle: "Join The Movement",
//     title: "Empower Change Through Volunteering",
//     highlightedText: "Volunteering",
//     description: "Discover meaningful opportunities to make a real difference in your community and beyond.",
//     textAlignment: "left",
//     primaryButton: { 
//       text: "Find Opportunities",
//       path: "/opportunities" 
//     },
//     secondaryButton: { 
//       text: "Learn More",
//       path: "/about" 
//     }
//   },
//   {
//     imageUrl: "https://images.unsplash.com/photo-1549923746-c502d488b3ea",
//     gradientFrom: "green-900/70",
//     gradientTo: "green-900/40",
//     accentColor: "green-400",
//     preTitle: "Build Together",
//     title: "Stronger Communities Start With You",
//     highlightedText: "Communities",
//     description: "Connect with local organizations and create lasting impact where it matters most.",
//     textAlignment: "right",
//     primaryButton: { 
//       text: "Browse Local Causes",
//       path: "/local-causes",
//       bg:'bg-white'
//     },
//     secondaryButton: { 
//       text: "Our Partners",
//       path: "/partners" 
//     }
//   },
//   {
//     imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
//     gradientFrom: "purple-900/70",
//     gradientTo: "purple-900/40",
//     accentColor: "purple-400",
//     preTitle: "Grow While Giving",
//     title: "Develop Skills While Helping Others",
//     highlightedText: "Helping Others",
//     description: "Volunteering isn't just about giving back - it's about growing personally and professionally.",
//     textAlignment: "center",
//     primaryButton: { 
//       text: "Skill-Based Volunteering",
//       path: "/skill-volunteering",
//       bg:'bg-white'
//     },
//     secondaryButton: { 
//       text: "Success Stories",
//       path: "/success-stories" 
//     }
//   }
// ];

// export default function HeroSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isHovering, setIsHovering] = useState(false);


//   const goToSlide = useCallback(
//     (newIndex) => {
//       if (newIndex < 0) {
//         setDirection(-1);
//         newIndex = slides.length - 1;
//       } else if (newIndex >= slides.length) {
//         setDirection(1);
//         newIndex = 0;
//       } else {
//         setDirection(newIndex > currentIndex ? 1 : -1);
//       }
//       setCurrentIndex(newIndex);
//     },
//     [currentIndex]
//   );

//   const pauseAutoPlay = () => {
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), autoSlideInterval * 2);
//   };

//   const handlePrev = () => {
//     goToSlide(currentIndex - 1);
//     pauseAutoPlay();
//   };

//   const handleNext = () => {
//     goToSlide(currentIndex + 1);
//     pauseAutoPlay();
//   };

//   useEffect(() => {
//     let interval;
//     if (isAutoPlaying && !isHovering) {
//       interval = setInterval(() => {
//         goToSlide(currentIndex + 1);
//       }, autoSlideInterval);
//     }
//     return () => clearInterval(interval);
//   }, [currentIndex, isAutoPlaying, isHovering, goToSlide]);

//   const currentSlide = slides[currentIndex];

//   return (
//     <div
//       className="relative w-full h-[400px] md:h-[700px]  overflow-hidden bg-black select-none"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-no-repeat ">
//         <img
//           src={currentSlide.imageUrl}
//           alt={currentSlide.title}
//           className="w-full h-full object-cover b"
//           style={{backgroundRepeat:'no-repeat'}}
//           draggable={false}
//         />
//         <div
//           className={`absolute  inset-0 bg-gradient-to-t from-${currentSlide.gradientFrom} to-${currentSlide.gradientTo}`}
//         />
//       </div>

//       {/* Animated Panels */}
//       <div className="absolute inset-0 flex pointer-events-none">
//         {Array.from({ length: panels }).map((_, i) => {
//           const variants = {
//             enter: (direction) => ({
//               y: direction > 0 ? '120%' : '-120%',
//               x: i % 2 === 0 ? '60%' : '-60%',
//               opacity: 0,
//               rotate: direction > 0 ? i * 3 : i * -3,
//             }),
//             center: {
//               y: '0%',
//               x: '0%',
//               opacity: 1,
//               rotate: 0,
//             },
//             exit: (direction) => ({
//               y: direction > 0 ? '-120%' : '120%',
//               x: i % 2 === 0 ? '-60%' : '60%',
//               opacity: 0,
//               rotate: direction > 0 ? i * -3 : i * 3,
//             }),
//           };

//           return (
//             <motion.div
//               key={`${currentIndex}-${i}`}
//               className="relative flex-1 h-full  "
//               custom={direction}
//               variants={variants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{
//                 duration: transitionDuration,
//                 ease: [0.22, 1, 0.36, 1],
//                 delay: i * 0.02,
//               }}
//               style={{
//                 zIndex: panels - i,
//                 backgroundImage: `url(${currentSlide.imageUrl})`,
//                 backgroundPosition: `${(100 / (panels - 1)) * i}% center`,
//                 backgroundSize: '800%',
//               }}
//             >
//               <div className="absolute inset-0 bg-black/20" />
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Text Content */}
//       <AnimatePresence mode="wait" custom={direction}>
//         <motion.div
//           key={currentIndex}
//           className={`absolute inset-0 flex items-center px-6 md:px-12 z-10   ${
//             currentSlide.textAlignment === "center"
//               ? "justify-center text-center"
//               : currentSlide.textAlignment === "right"
//               ? "justify-end text-right"
//               : "justify-start text-left"
//           }`}
//           custom={direction}
//           initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
//           transition={{ duration: transitionDuration * 0.6, ease: 'easeInOut' }}
//         >
//           <div className="text-white max-w-xl max-xs:space-y-2 space-y-4">
//             <motion.span
//               className={`uppercase tracking-wide max-xs:text-lg text-${currentSlide.accentColor} font-semibold `}
//               initial={{ y: 20 }}
//               animate={{ y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               {currentSlide.preTitle}
//             </motion.span>
//             <motion.h1
//               className=" md:text-5xl max-xs:text-xl font-bold leading-tight"
//               initial={{ y: 20 }}
//               animate={{ y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               {currentSlide.title.replace(
//                 currentSlide.highlightedText,
//                 ``
//               )}
//               <span className={`text-${currentSlide.accentColor}`}>
//                 {currentSlide.highlightedText}
//               </span>
//             </motion.h1>
//             <motion.p
//               className="text-lg  opacity-90"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               {currentSlide.description}
//             </motion.p>
//             <div className="flex gap-4 justify-start max-xs:items-center">
//               <motion.a
//                 href={currentSlide.primaryButton.path}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`px-6 py-3 rounded-full bg-${currentSlide.accentColor} ${currentSlide.primaryButton.bg} text-black   font-semibold`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 {currentSlide.primaryButton.text}
//               </motion.a>
//               <motion.a
//                 href={currentSlide.secondaryButton.path}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="max-xs:px-1 max-xs:py-2 md:px-6 md:py-3 max-xs:text-[10px] max-xs:rounded-md rounded-full border border-white text-white font-semibold"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//               >
//                 {currentSlide.secondaryButton.text}
//               </motion.a>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Nav Buttons */}
//       <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
//         <motion.button
//           onClick={handlePrev}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="bg-white/10 rounded-full p-3 md:p-4"
//         >
//           <FaArrowLeft className="text-white text-lg" />
//         </motion.button>
//         <motion.button
//           onClick={handleNext}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="bg-white/10 rounded-full p-3 md:p-4"
//         >
//           <FaArrowRight className="text-white text-lg" />
//         </motion.button>
//       </div>

//       {/* Pagination Dots */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {slides.map((_, i) => (
//           <motion.button
//             key={i}
//             onClick={() => {
//               goToSlide(i);
//               pauseAutoPlay();
//             }}
//             whileHover={{ scale: 1.3 }}
//             whileTap={{ scale: 0.9 }}
//             className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//               i === currentIndex ? 'bg-white w-8' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Progress bar */}
//       <motion.div
//         className="absolute bottom-0 left-0 h-1 bg-white/50 z-20"
//         initial={{ width: 0 }}
//         animate={{ width: '100%' }}
//         transition={{ duration: autoSlideInterval / 1000, ease: 'linear' }}
//         key={currentIndex}
//       />
//     </div>
//   );
// }
























'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const panels = 8; 
const transitionDuration = 1; 
const autoSlideInterval = 6000; 

const slides = [
  {
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    gradientFrom: "from-black/70",
    gradientTo: "to-black/40",
    accentColor: "blue-400",
    preTitle: "Join The Movement",
    title: "Empower Change Through Volunteering",
    highlightedText: "Volunteering",
    description: "Discover meaningful opportunities to make a real difference in your community and beyond.",
    textAlignment: "left",
    primaryButton: { 
      text: "Find Opportunities",
      path: "/opportunities" 
    },
    secondaryButton: { 
      text: "Learn More",
      path: "/about" 
    }
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1549923746-c502d488b3ea",
    gradientFrom: "from-green-900/70",
    gradientTo: "to-green-900/40",
    accentColor: "green-400",
    preTitle: "Build Together",
    title: "Stronger Communities Start With You",
    highlightedText: "Communities",
    description: "Connect with local organizations and create lasting impact where it matters most.",
    textAlignment: "right",
    primaryButton: { 
      text: "Browse Local Causes",
      path: "/local-causes",
      bg: 'bg-white'
    },
    secondaryButton: { 
      text: "Our Partners",
      path: "/partners" 
    }
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    gradientFrom: "from-purple-900/70",
    gradientTo: "to-purple-900/40",
    accentColor: "purple-400",
    preTitle: "Grow While Giving",
    title: "Develop Skills While Helping Others",
    highlightedText: "Helping Others",
    description: "Volunteering isn't just about giving back - it's about growing personally and professionally.",
    textAlignment: "center",
    primaryButton: { 
      text: "Skill-Based Volunteering",
      path: "/skill-volunteering",
      bg: 'bg-white'
    },
    secondaryButton: { 
      text: "Success Stories",
      path: "/success-stories" 
    }
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const goToSlide = useCallback(
    (newIndex) => {
      if (newIndex < 0) {
        setDirection(-1);
        newIndex = slides.length - 1;
      } else if (newIndex >= slides.length) {
        setDirection(1);
        newIndex = 0;
      } else {
        setDirection(newIndex > currentIndex ? 1 : -1);
      }
      setCurrentIndex(newIndex);
    },
    [currentIndex]
  );

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), autoSlideInterval * 2);
  };

  const handlePrev = () => {
    goToSlide(currentIndex - 1);
    pauseAutoPlay();
  };

  const handleNext = () => {
    goToSlide(currentIndex + 1);
    pauseAutoPlay();
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isHovering) {
      interval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, autoSlideInterval);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, isHovering, goToSlide]);

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="relative w-full h-[400px] md:h-[700px] overflow-hidden bg-black select-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background - Fixed the repeating issue by adding background-repeat: no-repeat */}
      <div className="absolute inset-0">
        <img
          src={currentSlide.imageUrl}
          alt={currentSlide.title}
          className="w-full h-full object-contain"
          style={{ backgroundRepeat: 'no-repeat' }}
          draggable={false}
        />
        <div 
          className={`absolute inset-0 bg-gradient-to-t ${currentSlide.gradientFrom} ${currentSlide.gradientTo}`}
        />
      </div>

      {/* Animated Panels */}
      <div className="absolute inset-0 flex pointer-events-none">
        {Array.from({ length: panels }).map((_, i) => {
          const variants = {
            enter: (direction) => ({
              y: direction > 0 ? '120%' : '-120%',
              x: i % 2 === 0 ? '60%' : '-60%',
              opacity: 0,
              rotate: direction > 0 ? i * 3 : i * -3,
            }),
            center: {
              y: '0%',
              x: '0%',
              opacity: 1,
              rotate: 0,
            },
            exit: (direction) => ({
              y: direction > 0 ? '-120%' : '120%',
              x: i % 2 === 0 ? '-60%' : '60%',
              opacity: 0,
              rotate: direction > 0 ? i * -3 : i * 3,
            }),
          };

          return (
            <motion.div
              key={`${currentIndex}-${i}`}
              className="relative flex-1 h-full"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: transitionDuration,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.02,
              }}
              style={{
                zIndex: panels - i,
                backgroundImage: `url(${currentSlide.imageUrl})`,
                backgroundPosition: `${(100 / (panels - 1)) * i}% center`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          );
        })}
      </div>

      {/* Text Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          className={`absolute inset-0 flex items-center px-6 md:px-12 z-10 ${
            currentSlide.textAlignment === "center"
              ? "justify-center text-center"
              : currentSlide.textAlignment === "right"
              ? "justify-end text-right"
              : "justify-start text-left"
          }`}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
          transition={{ duration: transitionDuration * 0.6, ease: 'easeInOut' }}
        >
          <div className="text-white max-w-xl max-xs:space-y-2 space-y-4">
            <motion.span
              className={`uppercase tracking-wide max-xs:text-lg text-${currentSlide.accentColor} font-semibold`}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {currentSlide.preTitle}
            </motion.span>
            <motion.h1
              className="md:text-5xl max-xs:text-xl font-bold leading-tight"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {currentSlide.title.replace(
                currentSlide.highlightedText,
                ``
              )}
              <span className={`text-${currentSlide.accentColor}`}>
                {currentSlide.highlightedText}
              </span>
            </motion.h1>
            <motion.p
              className="text-lg opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {currentSlide.description}
            </motion.p>
            <div className="flex gap-4 justify-start max-xs:items-center">
              <motion.a
                href={currentSlide.primaryButton.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full bg-${currentSlide.accentColor} ${currentSlide.primaryButton.bg || ''} text-black font-semibold`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {currentSlide.primaryButton.text}
              </motion.a>
              <motion.a
                href={currentSlide.secondaryButton.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="max-xs:px-1 max-xs:py-2 md:px-6 md:py-3 max-xs:text-[10px] max-xs:rounded-md rounded-full border border-white text-white font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {currentSlide.secondaryButton.text}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nav Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <motion.button
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/10 rounded-full p-3 md:p-4"
        >
          <FaArrowLeft className="text-white text-lg" />
        </motion.button>
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/10 rounded-full p-3 md:p-4"
        >
          <FaArrowRight className="text-white text-lg" />
        </motion.button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => {
              goToSlide(i);
              pauseAutoPlay();
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-white/50 z-20"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: autoSlideInterval / 1000, ease: 'linear' }}
        key={currentIndex}
      />
    </div>
  );
}