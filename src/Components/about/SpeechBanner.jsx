import './SpeechBanner.css'; // CSS for marquee animation

export default function SpeechBanner() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://reform.axiomthemes.com/splash/src/img/marquee/bg.jpg"
        alt="Speech Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Marquee Text */}
      <div className="absolute bottom-12 w-full z-10 overflow-hidden">
        <div className="marquee whitespace-nowrap text-white text-3xl md:text-4xl font-bold">
          <span className="mx-4">Free Lifetime Updates</span>
          <span className="mx-4">*</span>
          <span className="mx-4">Free Lifetime Updates</span>
          <span className="mx-4">*</span>
          <span className="mx-4">Free Lifetime Updates</span>
          <span className="mx-4">Free Lifetime Updates</span>
          <span className="mx-4">*</span>
          <span className="mx-4">Free Lifetime Updates</span>
          <span className="mx-4">*</span>
          <span className="mx-4">Free Lifetime Updates</span>
        </div>
      </div>
    </section>
  );
}
