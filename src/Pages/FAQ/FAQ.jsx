'use client';

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
      question: "Can I donate goods or supplies instead of money?",
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

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="md:h-[700px] py-16  bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="relative z-10">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30 dark:border-gray-700/30">
            <h1 className="text-sm uppercase tracking-widest text-primary dark:text-primary-light mb-4">
              Question Answer
            </h1>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-gradient-to-r from-primary to-primary-dark dark:from-primary-light dark:to-primary text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
              Get Answered →
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          {/* FAQ Panel */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/30 dark:border-gray-700/30 lg:absolute lg:-left-20 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20">
            {faqs.map((faq, index) => (
              <Disclosure key={index} as="div" defaultOpen={openIndex === index}>
                {() => (
                  <div className="mb-4 last:mb-0">
                    <Disclosure.Button
                      className={`flex justify-between items-center w-full px-5 py-4 text-left text-lg font-medium rounded-xl transition-colors ${
                        openIndex === index
                          ? "bg-primary/10 text-primary dark:bg-primary-light/20 dark:text-primary-light"
                          : "bg-gray-100/70 dark:bg-gray-700/70 text-gray-800 dark:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-600/50"
                      }`}
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`ml-4 transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </Disclosure.Button>
                    {openIndex === index && (
                      <Disclosure.Panel className="px-5 py-4 text-gray-600 dark:text-gray-300 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg mt-1">
                        {faq.answer}
                      </Disclosure.Panel>
                    )}
                  </div>
                )}
              </Disclosure>
            ))}
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px] w-full mt-8 lg:mt-0">
            <img
              className="w-full h-full object-cover"
              src={donation_3}
              alt="Volunteer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
