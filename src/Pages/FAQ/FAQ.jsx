
// import { Disclosure } from "@headlessui/react";
// import { ChevronUpIcon } from "@heroicons/react/24/solid";
// import { useState } from "react";
// import donation_3 from '../../../src/assets/donation/pexels-julia-m-cameron-6994963.jpg'
// function FAQ() {
//   const [faqs] = useState([
//     {
//       question: "How can I volunteer with your organization?",
//       answer:
//         "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
//     },
//     {
//       question: "Can I donate goods or supplies instead of money?",
//       answer:
//         "Yes, you can donate goods and supplies. We accept a wide range of items including clothes, food, and other essential supplies.",
//     },
//     {
//       question: "How are donated funds used?",
//       answer:
//         "Donated funds are utilized for various causes including community projects, education, and disaster relief.",
//     },
//     {
//       question: "Opportunities for groups or corporate teams?",
//       answer:
//         "We offer team-building activities and volunteering opportunities for corporate teams and groups.",
//     },
//   ]);

//   return (
//     <div className="bg-gray-100 min-h-screen py-16 px-6">
//       <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
//         {/* Left Section */}
//         <div>
//           <h1 className="text-sm uppercase text-gray-500 tracking-wide mb-2">
//             Question Answer
//           </h1>
//           <h2 className="text-4xl font-bold text-gray-800">
//             Frequently Asked Question.
//           </h2>
//           <p className="mt-4 text-gray-600 text-lg">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//             tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//           </p>
//           <button className="mt-6 bg-brown-600 text-white px-6 py-2 rounded-lg shadow hover:bg-brown-700 transition">
//             Get Answered →
//           </button>
//         </div>

//         {/* Right Section */}
//         <div className="relative md:static">
//           <img
//             className=" inset-0 w-full h-full object-cover rounded-lg shadow-lg"
//             src={donation_3}// Replace with your image path
//             alt="Volunteer"
//           />
//           <div className=" top-[30%] md:top-[20%] right-4 md:right-0 absolute z-10 w-[450px] ">
//             {faqs.map((faq, index) => (
//               <Disclosure key={index}>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button
//                       className={`flex justify-between text-white items-center w-full px-6 py-4 my-2 text-left text-lg font-medium ${
//                         open
//                           ? "bg-gray-800 text-white"
//                           : "bg-brown-400 text-gray-800"
//                       } rounded-full shadow`}
//                     >
//                       {faq.question}
//                       <ChevronUpIcon
//                         className={`h-5 w-5 transition-transform ${
//                           open ? "rotate-180" : ""
//                         }`}
//                       />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="px-6 py-4 text-gray-600 bg-gray-100 rounded-lg shadow-sm">
//                       {faq.answer}
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FAQ;








import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import donation_3 from "../../../src/assets/donation/pexels-julia-m-cameron-6994963.jpg";

function FAQ() {
  const [faqs] = useState([
    {
      question: "How can I volunteer with your organization?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      question: "donating goods or supplies instead of money?",
      answer:
        "Yes, you can donate goods and supplies. We accept a wide range of items including clothes, food, and other essential supplies.",
    },
    {
      question: "How are donated funds used?",
      answer:
        "Donated funds are utilized for various causes including community projects, education, and disaster relief.",
    },
    {
      question: "Opportunities for groups or corporate teams?",
      answer:
        "We offer team-building activities and volunteering opportunities for corporate teams and groups.",
    },
  ]);

  return (
    <div className="md:bg-gray-100 min-h-screen py-16 md:px-6">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-sm uppercase text-gray-500 tracking-wide mb-2">
            Question Answer
          </h1>
          <h2 className="text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="mt-6 bg-brown-600 text-white px-6 py-2 rounded-lg shadow hover:bg-brown-700 transition">
            Get Answered →
          </button>
        </div>

        {/* Right Section */}
        <div className="relative md:static">
          <img
            className=" inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            src={donation_3}
            alt="Volunteer"
          />
          <div className="top-[30%] md:top-[20%] right-4 md:right-0 absolute hidden md:block z-10 w-[450px]">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`flex justify-between items-center w-full px-6 py-4 my-2 text-left text-lg font-medium ${
                        open
                          ? "bg-gray-800 text-white"
                          : "bg-brown-400 text-gray-800"
                      } rounded-full shadow`}
                    >
                      {faq.question}
                      <span
                        className={`transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 py-4 text-gray-600 bg-gray-100 rounded-lg shadow-sm">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>


        {/* below sections */}

        <div className=" block md:hidden">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`flex justify-between items-center w-full px-6 py-4 my-2 text-left text-lg font-medium ${
                        open
                          ? "bg-gray-800 text-white"
                          : "bg-brown-400 text-gray-800"
                      } rounded-full shadow`}
                    >
                      {faq.question}
                      <span
                        className={`transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 py-4 text-gray-600 bg-gray-100 rounded-lg shadow-sm">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
      </div>
    </div>
  );
}

export default FAQ;
