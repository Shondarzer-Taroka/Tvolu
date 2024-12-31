import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import tm1 from '../../src/assets/tm1.jpg';
import tm2 from '../../src/assets/tm2.jpg';
import tm3 from '../../src/assets/tm3.jpg';
import tm4 from '../../src/assets/tm4.jpg';

const OurExparter = () => {
  return (
    <div>
      <h1 className="font-bold my-7 text-center text-3xl md:text-4xl">Irreplaceable Experience Now</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border rounded-lg shadow-lg overflow-hidden">
          <img src={tm1} alt="James Gree" className="w-full h-64 object-cover" />
          <div className="p-4">
            <div className="text-center">
              <h6 className="font-semibold text-xl text-gray-800">James Gree</h6>
              <p className="text-sm text-gray-500">Senior Volunteer Advisor</p>
            </div>
            <div className="flex gap-3 justify-center mt-3">
              <FaFacebook className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-blue-600" />
              <FaTwitter className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-blue-400" />
              <FaYoutube className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-red-600" />
              <FaPinterest className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-red-500" />
            </div>
          </div>
        </div>

        <div className="border rounded-lg shadow-lg overflow-hidden">
          <img src={tm2} alt="David Smith" className="w-full h-64 object-cover" />
          <div className="p-4">
            <div className="text-center">
              <h6 className="font-semibold text-xl text-gray-800">David Smith</h6>
              <p className="text-sm text-gray-500">Volunteer Trainer</p>
            </div>
            <div className="flex gap-3 justify-center mt-3">
              <FaFacebook className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-blue-600" />
              <FaTwitter className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-blue-400" />
              <FaYoutube className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-red-600" />
              <FaPinterest className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-red-500" />
            </div>
          </div>
        </div>

        <div className="border rounded-lg shadow-lg overflow-hidden">
          <img src={tm3} alt="Jessica Brown" className="w-full h-64 object-cover" />
          <div className="p-4">
            <div className="text-center">
              <h6 className="font-semibold text-xl text-gray-800">Jessica Brown</h6>
              <p className="text-sm text-gray-500">Volunteer Mentor</p>
            </div>
            <div className="flex gap-3 justify-center mt-3">
              <FaFacebook className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-blue-600" />
              <FaTwitter className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-blue-400" />
              <FaYoutube className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-red-600" />
              <FaPinterest className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-red-500" />
            </div>
          </div>
        </div>

        <div className="border rounded-lg shadow-lg overflow-hidden">
          <img src={tm4} alt="Sarah Johnson" className="w-full h-64 object-cover" />
          <div className="p-4">
            <div className="text-center">
              <h6 className="font-semibold text-xl text-gray-800">Sarah Johnson</h6>
              <p className="text-sm text-gray-500">Volunteer Coordinator</p>
            </div>
            <div className="flex gap-3 justify-center mt-3">
              <FaFacebook className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-blue-600" />
              <FaTwitter className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-blue-400" />
              <FaYoutube className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-red-600" />
              <FaPinterest className="text-gray-600 hover:text-white transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-red-500" />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default OurExparter;
