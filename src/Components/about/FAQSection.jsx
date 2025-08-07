import  { useState, forwardRef } from 'react';

const faqs = [
  { question: 'Is it a 1-time purchase?', answer: 'You can reach support by clicking on this link.' },
  { question: 'Are there any hidden fees?', answer: 'You can reach support by clicking on this link.' },
  { question: 'What is in the package?', answer: 'You can reach support by clicking on this link.' },
  { question: 'What if I face any difficulties?', answer: 'You can reach support by clicking on this link.' },
  { question: 'How can I reach your support team?', answer: 'You can reach support by clicking on this link.' },
  { question: 'How can I leave feedback for the updates?', answer: 'You can reach support by clicking on this link.' },
];

// eslint-disable-next-line react/display-name
const FAQSection = forwardRef((props, ref) => {
  const [openIndex, setOpenIndex] = useState(4);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={ref} className="bg-[#f7f7ff] md:h-[700px]py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-sm font-semibold bg-white text-[#0f172a] px-4 py-1 rounded-full inline-block mb-4">
          COMMON QUESTIONS
        </span>
        <h2 className="text-4xl font-bold text-[#0f172a] mb-4 leading-tight">
          Frequently Asked <br /> Questions
        </h2>
        <p className="text-[#64748b] text-base">
          Find answers to the most common questions about our theme, including pricing,
          features, and support. We&#39;ve got you covered!
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-12 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-xl shadow-sm transition-all ${
              openIndex === index ? 'pt-6 pb-3' : 'py-6'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="font-semibold text-[#0f172a] text-base">
                {faq.question}
              </span>
              <span className="text-xl text-[#0f172a] font-bold">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-sm text-[#64748b]">
                You can reach support by clicking on this{' '}
                <a href="#" className="text-[#0f172a] underline font-medium">
                  link
                </a>
                .
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default FAQSection;
