import { FaFacebook, FaGithub, FaInstagram, FaYoutube, FaHome } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCall } from "react-icons/pi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, color: "hover:text-blue-600", url: "#" },
    { icon: <FaGithub />, color: "hover:text-gray-600", url: "#" },
    { icon: <FaInstagram />, color: "hover:text-pink-500", url: "#" },
    { icon: <FaYoutube />, color: "hover:text-red-600", url: "#" }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Need Volunteer", path: "/need" },
    { name: "Manage My Post", path: "/managepost" },
    { name: "Add Volunteer", path: "/addvolunteer" },
    { name: "Log In", path: "/login" },
    { name: "Register", path: "/register" }
  ];

  return (
    <div className="bg-[#1a1a1a] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Tvolu
            </h2>
            <p className="text-gray-400">
              Connecting volunteers with meaningful opportunities to create positive change in communities worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -3 }}
                  className={`text-2xl text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-amber-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-amber-500 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <TfiEmail className="text-amber-400 mt-1 mr-3" />
                <div>
                  <p className="text-gray-400 font-medium">Email</p>
                  <a href="mailto:abc@gmail.com" className="text-gray-400 hover:text-amber-400 transition-colors">
                    abc@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <PiPhoneCall className="text-amber-400 mt-1 mr-3" />
                <div>
                  <p className="text-gray-400 font-medium">Phone</p>
                  <a href="tel:+8801896867578" className="text-gray-400 hover:text-amber-400 transition-colors">
                    +880 1896 867578
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <FaHome className="text-amber-400 mt-1 mr-3" />
                <div>
                  <p className="text-gray-400 font-medium">Address</p>
                  <p className="text-gray-400">Nikunja-1, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white border-b border-amber-500 pb-2 inline-block">
              Newsletter
            </h3>
            <p className="text-gray-400">
              Subscribe to get updates on volunteer opportunities and community events.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 px-4 rounded-lg font-medium shadow-lg hover:shadow-amber-500/20 transition-all"
              >
                Subscribe Now
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Tvolu. All rights reserved. | Designed with ❤️ for community service</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;