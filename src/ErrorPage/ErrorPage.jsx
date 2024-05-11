import { useNavigate } from 'react-router-dom';
 import errorPage from '../../src/assets/notfo.png'
const ErrorPage = () => {
    let navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }
    function goHome() {
        navigate('/')
    }

    return (
        <div className='flex items-center justify-center'>

            <div className='flex justify-center items-center flex-col h-[400px]'>
                <div className=''>

                <div>
                <img className='md:w-[400px]' id='customImg' src={errorPage} alt="" />
            </div>
                    {/* <h1 className='text-[80px] font-bold font-poppins text-center'>404</h1> */}
                    <div className='flex text-center justify-center mt-3'>
                                       <button className='btn btn-info mr-2' onClick={goBack}>Go Back</button>
                    <button className='btn btn-info' onClick={goHome}>Home</button>
                    </div>
     
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;