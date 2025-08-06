
const ParallaxSection = () => {
  return (
    <div
      className="w-full h-screen bg-fixed bg-center bg-cover flex flex-col justify-center items-center text-center px-4"
      style={{
        backgroundImage: "url('/your-image.jpg')", // Place this image inside /public
      }}
    >
      <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
        Get Reform and <br /> Create a Professional Website Today!
      </h1>
      <button className="bg-[#f54029] text-white px-6 py-3 rounded-full font-semibold text-sm">
        Purchase Theme
      </button>
      <p className="absolute bottom-4 text-white text-xs tracking-wide">
        AXIOMTHEMES © 2025. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default ParallaxSection;
