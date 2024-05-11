import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import tm1 from '../../src/assets/tm1.jpg'
import tm2 from '../../src/assets/tm2.jpg'
import tm3 from '../../src/assets/tm3.jpg'
import tm4 from '../../src/assets/tm4.jpg'

const OurExparter = () => {
    return (
        <div>

            <h1 className="font-bold my-7 text-center"> IRREPLACEABLE EXPERIENCE NOW </h1>

            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>

                <aside className='border'>
                    <div>
                        <img src={tm1} alt="" />
                    </div>
                    <div className=''>
                        <div className='flex items-center flex-col gap-0 leading-[27px] pt-2'>
                            <h6 className='font-thin text-[26px]'> James Gree</h6>
                            <p className='text-[16px] text-gray-400'> Senior Volunteer Advisor </p>
                        </div>
                        <div className='flex gap-2 justify-center mt-3 pb-2'>
                          <FaFacebook className=' hover:text-[white] transition duration-700  border p-2 hover:bg-[red]'></FaFacebook>
                          <FaTwitter className=' hover:text-[white] transition duration-700  border p-2 hover:bg-[red]'></FaTwitter>
                          <FaYoutube className=' hover:text-[white] transition duration-700  border p-2 hover:bg-[red]'></FaYoutube>
                          <FaPinterest className=' hover:text-[white]  transition duration-700  border p-2 hover:bg-[red]'></FaPinterest>
                        </div>
                    </div>
                </aside>
                <aside className='border'>
                    <div>
                        <img src={tm2} alt="" />
                    </div>
                    <div className=''>
                        <div className='flex items-center flex-col gap-0 leading-[27px] pt-2'>
                            <h6 className='font-thin text-[26px]'> David Smith </h6>
                            <p className='text-[16px] text-gray-400'> Volunteer Trainer </p>
                        </div>
                        <div className='flex gap-2 justify-center mt-3 pb-2'>
                          <FaFacebook className=' hover:text-[white] transition duration-700  border p-2 hover:bg-[red]'></FaFacebook>
                          <FaTwitter className=' hover:text-[white] transition duration-700  border p-2 hover:bg-[red]'></FaTwitter>
                          <FaYoutube className=' hover:text-[white] transition duration-700  border p-2 hover:bg-[red]'></FaYoutube>
                          <FaPinterest className=' hover:text-[white]  transition duration-700  border p-2 hover:bg-[red]'></FaPinterest>
                        </div>
                    </div>
                </aside>
                <aside className='border'>
                    <div>
                        <img src={tm3} alt="" />
                    </div>
                    <div className=''>
                        <div className='flex items-center flex-col gap-0 leading-[27px] pt-2'>
                            <h6 className='font-thin text-[26px]'> Jessica Brown</h6>
                            <p className='text-[16px] text-gray-400'> Volunteer Mentor</p>
                        </div>
                        <div className='flex gap-2 justify-center mt-3 pb-2'>
                          <FaFacebook className=' hover:text-[white] transition duration-700  border p-2 hover:bg-[red]'></FaFacebook>
                          <FaTwitter className=' hover:text-[white] transition duration-700  border p-2 hover:bg-[red]'></FaTwitter>
                          <FaYoutube className=' hover:text-[white] transition duration-700  border p-2 hover:bg-[red]'></FaYoutube>
                          <FaPinterest className=' hover:text-[white]  transition duration-700  border p-2 hover:bg-[red]'></FaPinterest>
                        </div>
                    </div>
                </aside>
                <aside className='border'>
                    <div>
                        <img src={tm4} alt="" />
                    </div>
                    <div className=''>
                        <div className='flex items-center flex-col gap-0 leading-[27px] pt-2'>
                            <h6 className='font-thin text-[26px]'> Sarah Johnson</h6>
                            <p className='text-[16px] text-gray-400'>Volunteer Coordinator</p>
                        </div>
                        <div className='flex gap-2 justify-center mt-3 pb-2'>
                          <FaFacebook className=' hover:text-[white] transition duration-700  border p-2 hover:bg-[red]'></FaFacebook>
                          <FaTwitter className=' hover:text-[white] transition duration-700  border p-2 hover:bg-[red]'></FaTwitter>
                          <FaYoutube className=' hover:text-[white] transition duration-700  border p-2 hover:bg-[red]'></FaYoutube>
                          <FaPinterest className=' hover:text-[white]  transition duration-700  border p-2 hover:bg-[red]'></FaPinterest>
                        </div>
                    </div>
                </aside>

            </section>
        </div>
    );
};

export default OurExparter;