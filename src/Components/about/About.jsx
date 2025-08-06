
import {  FaClock, FaFire, FaRocket, FaMousePointer } from 'react-icons/fa';

export default function About() {
  return (
    <section className="bg-[#0a0a0f] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <div className="inline-block border border-white px-4 py-1 rounded-full text-sm font-semibold tracking-widest mb-4">
              ROCKET SPEED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Experience Unparalleled <br />
              <span className="text-[#ff5823]">Speed and Performance</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              Experience near-instant website load times, making browsing faster and more efficient than ever before.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 text-black px-3 py-1 rounded-md text-sm font-semibold">
                A+
              </div>
              <span className="text-white text-sm">Pingdom Score</span>
            </div>
            <div className="w-72 h-2 bg-[#1a1a1a] rounded-full overflow-hidden mt-2">
              <div className="h-full bg-gradient-to-r from-green-400 to-blue-500 w-[95%] rounded-full"></div>
            </div>
            <div className="flex justify-between w-72 text-xs mt-1 text-gray-400">
              <span className="text-[#22cc66] font-medium">REFORM</span>
              <span>OTHER THEMES</span>
            </div>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {features.map((item, index) => (
            <div key={index} className="bg-[#2c2c2c] p-6 text-center rounded-sm">
              <div className="bg-[#3a3a3a] p-4 w-fit mx-auto mb-4 rounded-sm">
                {item.icon}
              </div>
              <p className="text-white font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: 'Lightweight & Optimized Code',
    icon: <FaMousePointer size={24} />,
  },
  {
    title: 'Cache-Friendly Compatibility',
    icon: <FaClock size={24} />,
  },
  {
    title: 'Efficient Asset Loading',
    icon: <FaFire size={24} />,
  },
  {
    title: 'Optimized for Core Web Vitals',
    icon: <FaRocket size={24} />,
  },
];
