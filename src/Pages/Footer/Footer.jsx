import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCall } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Quick Links</h2>
            <ul>
              <li><Link to="/" className="hover:underline text-gray-400">Home</Link></li>
              <li><Link to="/need" className="hover:underline text-gray-400">Need Volunteer</Link></li>
              <li><Link to="/managepost" className="hover:underline text-gray-400">Manage My Post</Link></li>
              <li><Link to="/addvolunteer" className="hover:underline text-gray-400">Add Volunteer</Link></li>
              <li><Link to="/login" className="hover:underline text-gray-400">Log In</Link></li>
              <li><Link to="/register" className="hover:underline text-gray-400">Register</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Contact Information</h2>
            <p className="flex items-center mb-2 text-gray-400"><TfiEmail className="mr-2" /> abc@gmail.com</p>
            <p className="flex items-center mb-2 text-gray-400"><PiPhoneCall className="mr-2" /> +8801896867578</p>
            <p className="flex items-center text-gray-400"><FaHome className="mr-2" /> Nikunja-1, Dhaka, Bangladesh</p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Follow Us</h2>
            <div className="flex gap-4">
              <FaFacebook className="text-2xl hover:text-blue-600 cursor-pointer transition-transform transform hover:scale-110" />
              <FaGithub className="text-2xl hover:text-gray-600 cursor-pointer transition-transform transform hover:scale-110" />
              <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer transition-transform transform hover:scale-110" />
              <FaYoutube className="text-2xl hover:text-red-600 cursor-pointer transition-transform transform hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-8 bg-gray-700 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">Subscribe to Our Newsletter</h2>
          <p className="mb-4 text-gray-400">Stay updated with the latest news and events from Tvolu. Enter your email below:</p>
          <div className="flex items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-1/2 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none transition-all">Subscribe</button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6">
          <small className="text-gray-400">© 2024 Tvolu. All Rights Reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
