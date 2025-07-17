// import donation_2 from '../../../src/assets/donation/alexander-simonsen-pPDzeITv26o-unsplash.jpg';
// import { FaRegStar, FaQuoteRight } from "react-icons/fa";
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './TestimonialPage.css';

// // Testimonial Card Component
// const TestimonialCard = ({ text, name, role, image }) => {
//     return (
//         <aside className="bg-[#eae8e8] p-9 rounded-3xl shadow-md mt-7">
//             {/* Quotation */}
//             <blockquote className="text-sm text-gray-600 italic mb-6">
//                 &quot;{text}&quot;
//             </blockquote>

//             {/* User Info */}
//             <div className="flex items-center gap-4">
//                 <img
//                     className="rounded-full w-12 h-12 object-cover"
//                     src={image}
//                     alt={name}
//                 />
//                 <div>
//                     <h1 className="font-semibold text-gray-800 text-[20px]">{name}</h1>
//                     <p className="text-xs uppercase text-gray-500">{role}</p>
//                 </div>
//             </div>

//             {/* Inverted Icon */}
//             <div className="flex justify-end mt-4">
//                 <FaQuoteRight className="text-3xl text-gray-400 opacity-50" />
//             </div>
//         </aside>
//     );
// };

// // Testimonial Page Component
// const TestimonialPage = () => {
//     const testimonials = [
//         {
//             text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
//             name: 'Mr. John Doe',
//             role: 'Charity Recipient',
//             image: donation_2,
//         },
//         {
//             text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
//             name: 'Mr. Jane Doe',
//             role: 'Charity Recipient',
//             image: donation_2,
//         },
//     ];

//     // React Slick settings
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         arrows: false,


//     };

//     return (
//         <div className="bg-background min-h-screen md:px-6 relative">
//             <div id="parent" className=" grid grid-cols-2 md:flex gap-6  justify-center">
//                 {/* Left Section */}
//                 <div className="md:w-[45%] col-span-2 md:col-span-1">
//                     <img
//                         className="h-full w-full rounded-lg object-cover"
//                         src={donation_2}
//                         alt="Inspiring man"
//                     />
//                 </div>

//                 {/* Right Section */}
//                 <div className="md:w-[55%] col-span-2 md:col-span-1 relative">
//                     <div className="ml-9 relative ">
//                         {/* Spinning Star */}
//                         <FaRegStar
//                             className="text-yellow-500 text-4xl animate-spin"
//                             style={{
//                                 animation: "spin 2s linear infinite",
//                             }}
//                         />

//                         {/* Spinning Circles */}
//                         <div className="relative flex justify-center items-center ">
//                             <div className="w-[40px] h-[40px] rounded-full border-[3px] border-yellow-400 animate-spin-slow"></div>
//                             <div className="absolute w-[35px] h-[35px] rounded-full border-[3px] border-pink-400 animate-spin-reverse"></div>
//                         </div>
//                     </div>

//                     {/* Section Title */}
//                     <div className="flex items-center mt-10 opacity-50">
//                         <div className="w-[70px] h-[2px] bg-neutral-500"></div>
//                         <h1 className="uppercase font-semibold text-[14px] ml-3">
//                             Stories of Change
//                         </h1>
//                     </div>

//                     {/* Content Section */}
//                     <div className="mt-2">
//                         <h1 className="text-3xl font-bold">
//                             Read inspiring stories of individuals and communities.
//                         </h1>
//                         <p className="opacity-75 mt-3 text-[16px] leading-[1.3]">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//                         </p>
//                     </div>

//                     {/* Testimonial Slider */}
//                     <Slider {...settings} className="mt-6 md:absolute left-0 md:left-[-120px]">
//                         {testimonials.map((card, index) => (
//                             <div key={index} className='px-2'>
//                                 <TestimonialCard


//                                     text={card.text}
//                                     name={card.name}
//                                     role={card.role}
//                                     image={card.image}
//                                 />
//                             </div>

//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TestimonialPage;










// import donation_2 from '../../../src/assets/donation/alexander-simonsen-pPDzeITv26o-unsplash.jpg';
// import { FaRegStar, FaQuoteRight } from "react-icons/fa";
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './TestimonialPage.css';

// // Testimonial Card Component
// const TestimonialCard = ({ text, name, role, image }) => {
//     return (
//         <aside className=" p-9 rounded-3xl shadow-md mt-7">
//             {/* Quotation */}
//             <blockquote className="text-sm text-gray-600 italic mb-6">
//                 &quot;{text}&quot;
//             </blockquote>

//             {/* User Info */}
//             <div className="flex items-center gap-4">
//                 <img
//                     className="rounded-full w-12 h-12 object-cover"
//                     src={image}
//                     alt={name}
//                 />
//                 <div>
//                     <h1 className="font-semibold text-gray-800 text-[20px]">{name}</h1>
//                     <p className="text-xs uppercase text-gray-500">{role}</p>
//                 </div>
//             </div>

//             {/* Inverted Icon */}
//             <div className="flex justify-end mt-4">
//                 <FaQuoteRight className="text-3xl text-gray-400 opacity-50" />
//             </div>
//         </aside>
//     );
// };

// // Testimonial Page Component
// const TestimonialPage = () => {
//     const testimonials = [
//         {
//             text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
//             name: 'Mr. John Doe',
//             role: 'Charity Recipient',
//             image: donation_2,
//         },
//         {
//             text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
//             name: 'Mr. Jane Doe',
//             role: 'Charity Recipient',
//             image: donation_2,
//         },
//     ];

//     // React Slick settings
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 768, // For screens less than 768px
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="bg-background min-h-screen md:px-6 relative">
//             <div id="parent" className="grid grid-cols-2 md:flex gap-6 justify-center">
//                 {/* Left Section */}
//                 <div className="md:w-[45%] col-span-2 md:col-span-1">
//                     <img
//                         className="h-full w-full rounded-lg object-cover"
//                         src={donation_2}
//                         alt="Inspiring man"
//                     />
//                 </div>

//                 {/* Right Section */}
//                 <div className="md:w-[55%] col-span-2 md:col-span-1 relative">
//                     <div className="ml-9 relative">
//                         {/* Spinning Star */}
//                         <FaRegStar
//                             className="text-yellow-500 text-4xl animate-spin"
//                             style={{
//                                 animation: "spin 2s linear infinite",
//                             }}
//                         />

//                         {/* Spinning Circles */}
//                         <div className="relative flex justify-center items-center">
//                             <div className="w-[40px] h-[40px] rounded-full border-[3px] border-yellow-400 animate-spin-slow"></div>
//                             <div className="absolute w-[35px] h-[35px] rounded-full border-[3px] border-pink-400 animate-spin-reverse"></div>
//                         </div>
//                     </div>

//                     {/* Section Title */}
//                     <div className="flex items-center mt-10 opacity-50">
//                         <div className="w-[70px] h-[2px] bg-neutral-500"></div>
//                         <h1 className="uppercase font-semibold text-[14px] ml-3">
//                             Stories of Change
//                         </h1>
//                     </div>

//                     {/* Content Section */}
//                     <div className="mt-2">
//                         <h1 className="text-3xl font-bold">
//                             Read inspiring stories of individuals and communities.
//                         </h1>
//                         <p className="opacity-75 mt-3 text-[16px] leading-[1.3]">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//                         </p>
//                     </div>

//                     {/* Testimonial Slider */}
//                     <Slider {...settings} className="mt-6 md:absolute left-0 md:left-[-120px]">
//                         {testimonials.map((card, index) => (
//                             <div key={index} className="px-2">
//                                 <TestimonialCard
//                                     text={card.text}
//                                     name={card.name}
//                                     role={card.role}
//                                     image={card.image}
//                                 />
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TestimonialPage;












import donation_2 from '../../../src/assets/donation/alexander-simonsen-pPDzeITv26o-unsplash.jpg';
import { FaRegStar, FaQuoteRight } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialPage.css';

// Testimonial Card Component
const TestimonialCard = ({ text, name, role, image }) => {
    return (
        <aside className="bg-base-100 p-9 rounded-3xl shadow-md mt-7 border border-base-300">
            {/* Quotation */}
            <blockquote className="text-sm text-base-content italic mb-6">
                &quot;{text}&quot;
            </blockquote>

            {/* User Info */}
            <div className="flex items-center gap-4">
                <img
                    className="rounded-full w-12 h-12 object-cover"
                    src={image}
                    alt={name}
                />
                <div>
                    <h1 className="font-semibold text-base-content text-[20px]">{name}</h1>
                    <p className="text-xs uppercase text-base-content opacity-70">{role}</p>
                </div>
            </div>

            {/* Inverted Icon */}
            <div className="flex justify-end mt-4">
                <FaQuoteRight className="text-3xl text-base-content opacity-20" />
            </div>
        </aside>
    );
};

// Testimonial Page Component
const TestimonialPage = () => {
    const testimonials = [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            name: 'Mr. John Doe',
            role: 'Charity Recipient',
            image: donation_2,
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattins, pulvinar dapibus leo.',
            name: 'Mr. Jane Doe',
            role: 'Charity Recipient',
            image: donation_2,
        },
    ];

    // React Slick settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-base-100 min-h-screen md:px-6 relative">
            <div id="parent" className="grid grid-cols-2 md:flex gap-6 justify-center py-12">
                {/* Left Section */}
                <div className="md:w-[45%] col-span-2 md:col-span-1">
                    <img
                        className="h-full w-full rounded-lg object-cover"
                        src={donation_2}
                        alt="Inspiring man"
                    />
                </div>

                {/* Right Section */}
                <div className="md:w-[55%] col-span-2 md:col-span-1 relative">
                    <div className="ml-9 relative">
                        {/* Spinning Star */}
                        <FaRegStar
                            className="text-yellow-500 text-4xl animate-spin"
                            style={{
                                animation: "spin 2s linear infinite",
                            }}
                        />

                        {/* Spinning Circles */}
                        <div className="relative flex justify-center items-center">
                            <div className="w-[40px] h-[40px] rounded-full border-[3px] border-yellow-400 animate-spin-slow"></div>
                            <div className="absolute w-[35px] h-[35px] rounded-full border-[3px] border-pink-400 animate-spin-reverse"></div>
                        </div>
                    </div>

                    {/* Section Title */}
                    <div className="flex items-center mt-10">
                        <div className="w-[70px] h-[2px] bg-base-content opacity-20"></div>
                        <h1 className="uppercase font-semibold text-[14px] ml-3 opacity-70">
                            Stories of Change
                        </h1>
                    </div>

                    {/* Content Section */}
                    <div className="mt-2">
                        <h1 className="text-3xl font-bold text-base-content">
                            Read inspiring stories of individuals and communities.
                        </h1>
                        <p className="opacity-75 mt-3 text-[16px] leading-[1.3] text-base-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>

                    {/* Testimonial Slider */}
                    <Slider {...settings} className="mt-6 md:absolute left-0 md:left-[-120px]">
                        {testimonials.map((card, index) => (
                            <div key={index} className="px-2">
                                <TestimonialCard
                                    text={card.text}
                                    name={card.name}
                                    role={card.role}
                                    image={card.image}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default TestimonialPage;