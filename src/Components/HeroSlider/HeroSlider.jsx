'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const panels = 8; // number of vertical slices
const transitionDuration = 1; // Increased duration for smoother effect
const autoSlideInterval = 6000; // Increased interval for better readability

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    title: 'Transform Your Space',
    subtitle: 'Furniture for the Modern Home',
    cta: 'Discover our Collection',
  },
  {
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
    title: 'Timeless Elegance',
    subtitle: 'Crafted for Comfort and Style',
    cta: 'View New Arrivals',
  },
  {
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea',
    title: 'Premium Quality',
    subtitle: 'Designed to Last Generations',
    cta: 'Explore Materials',
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

    const location = useLocation();
  
    useEffect(() => {
      if (location.pathname === "/") {
        const rootElement = document.getElementById("rootelement");
        const outletElement = document.getElementById("main-content-outlet");
        if (rootElement||outletElement) {
          rootElement.classList.remove("max-w-6xl");
          outletElement.classList.remove("max-w-7xl");
          outletElement.classList.remove("mt-[70px]");
        }
      }
    }, [location.pathname]);

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

  return (
    <div
      className="relative w-full h-[400px] md:h-[700px] overflow-hidden bg-black select-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Static background for better performance */}
      <div className="absolute inset-0">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Animated grid overlay with clearer visual cues */}
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
                ease: [0.22, 1, 0.36, 1], // Smoother easing
                delay: i * 0.02, // Faster stagger
              }}
              style={{
                zIndex: panels - i,
                backgroundImage: `url(${slides[currentIndex].image})`,
                backgroundPosition: `${(100 / (panels - 1)) * i}% center`,
                backgroundSize: '800%',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', // Subtle grid lines
              }}
            >
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          );
        })}
      </div>

      {/* Enhanced content with better transitions */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 flex items-center justify-start px-6 md:px-12 z-10 "
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
          transition={{ duration: transitionDuration * 0.6, ease: 'easeInOut' }}
        >
          <div className="text-white space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white rounded-full px-4 py-1 text-sm hover:bg-white/10 transition"
            >
              Furnishing Dreams
            </motion.button>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold leading-tight"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {slides[currentIndex].title} <br />
              with Timeless Design
            </motion.h1>
            <motion.p 
              className="text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slides[currentIndex].subtitle}
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 transition text-white font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {slides[currentIndex].cta}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Improved navigation with better affordance */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <motion.button
          onClick={handlePrev}
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-full p-3 md:p-4 transition"
          aria-label="Previous slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <FaArrowLeft className="text-white text-lg" />
        </motion.button>
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-full p-3 md:p-4 transition"
          aria-label="Next slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <FaArrowRight className="text-white text-lg" />
        </motion.button>
      </div>

      {/* Enhanced pagination with active indicator */}
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
              i === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          />
        ))}
      </div>

      {/* Progress indicator */}
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