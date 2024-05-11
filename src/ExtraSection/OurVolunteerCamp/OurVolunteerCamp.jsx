import vl1 from '../../assets/vl1.jpg'
import vl2 from '../../assets/vl2.jpg'
import vl3 from '../../assets/vl3.jpg'
import { CiStopwatch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
const OurVolunteerCamp = () => {
    return (
        <div>

            <h2 className="font-bold font-poppins text-center my-4"> Our Upcoming Volunteer Campaign </h2>

            <section id="volunteerCont" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                <div id='card' className='border'>
                    <div className='p-4'>
                        <img className='w-full' src={vl1} alt="" />
                    </div>

                    <div id='content' className='px-4 pl-4'>
                        <h6 className='font-semibold text-[20px]'> Uniting Hearts through Volunteerism</h6>
                        <span className='text-[gray] flex gap-2 text-[16px] items-center'> <CiStopwatch /> May 9, 2024 @ 11:03-01:00 </span>
                        <span className='text-[gray] flex gap-2 text-[16px] items-center'> <IoLocationOutline /> 85 Preston Rd. Inglewood</span>
                    </div>

                    <div className='w-[90%] h-[7px] bg-red-400 rounded-xl m-4' ></div>
                </div>
                <div id='card' className='border'>
                    <div className='p-4'>
                        <img className='w-full' src={vl2} alt="" />
                    </div>

                    <div id='content' className='px-4 pl-4'>
                        <h6 className='font-semibold text-[20px]'> Volunteer for a Brighter Tomorrow</h6>
                        <span className='text-[gray] flex gap-2 text-[16px] items-center'> <CiStopwatch /> May 9, 2024 @ 11:03-01:00 </span>
                        <span className='text-[gray] flex gap-2 text-[16px] items-center'> <IoLocationOutline /> 85 Preston Rd. Inglewood</span>
                    </div>

                    <div className='w-[90%] h-[7px] bg-red-400 rounded-xl m-4' ></div>
                </div>
                <div id='card' className='border'>
                    <div className='p-4'>
                        <img className='w-full' src={vl3} alt="" />
                    </div>

                    <div id='content' className='px-4 pl-4'>
                        <h6 className='font-semibold text-[20px]'>  Joining Hands for Change</h6>
                        <span className='text-[gray] flex gap-2 text-[16px] items-center'> <CiStopwatch /> May 9, 2024 @ 11:03-01:00 </span>
                        <span className='text-[gray] flex gap-2 text-[16px] items-center'> <IoLocationOutline /> 85 Preston Rd. Inglewood</span>
                    </div>

                    <div className='w-[90%] h-[7px] bg-red-400 rounded-xl m-4' ></div>
                </div>
            </section>

        </div>
    );
};

export default OurVolunteerCamp;