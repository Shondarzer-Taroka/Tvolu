import { FaFacebook, FaGithub, FaHome, FaInstagram, FaYoutube } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
        <section className="bg-[#c1bfbec2]">
   <aside className="">
     <menu className="flex justify-evenly items-center">
       {/* <div className="w-1/3 h-[5px] bg-white"></div> */}
       <div className="text-white font-bold flex items-end"> <span className="font-bold text-black text-5xl">T</span> <small className="text-[hsl(249,100%,72%)] text-3xl">craft</small>  </div>
       {/* <div className="w-1/3 h-[5px] bg-white"></div> */}
     </menu>

     <menu id="content" className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 py-5 lg:justify-items-center items-center">
       <div className="grid grid-cols-2 gap-4">
         <p> <Link className="underline" to={'/'}>Home</Link></p>
         <p> <Link className="underline" to={'/allcraft'}>All art and craft</Link></p>
         <p> <Link className="underline" to={'/mycraft'}> My art and Craft List </Link></p>
         <p> <Link className="underline" to={'/addcraft'}>Add Craft Item</Link></p>
         <p> <Link className="underline" to={'/login'}>Log In</Link></p>
         <p> <Link className="underline" to={'/register'}>Register</Link></p>
        
         
    
       </div>

       <div>
         <h1 className="text-lg font-semibold font-poppins"> Contact Information </h1>
         
          <div className="flex items-center gap-2">
           <TfiEmail></TfiEmail> abc@gmail.com
          </div>
         
          <div className="flex items-center gap-2">
            <PiPhoneCall></PiPhoneCall> +88018976867578
          </div>
          <div className="flex items-center gap-2">
            <FaHome></FaHome> Nikunja-1,Dhaka,Bangladesh
          </div>
         
       </div>
{/* 
       <div>
         
         <Lottie className="w-[200px] h-[200px]" animationData={getInt}>

         </Lottie>

       </div> */}

  

     </menu>

     <menu className="bg-black text-white p-0">
       {/* <div className="w-full h-[6px] bg-white rounded-3xl"></div> */}
       <div>
         <h1 className="text-center mb-2 font-bold ">follow us</h1>
         <div className="flex gap-2 justify-center">
           <FaFacebook className="text-[30px]"></FaFacebook>
           <FaGithub className="text-[30px]"></FaGithub>
           <FaInstagram className="text-[30px]"></FaInstagram>
           <FaYoutube className="text-[30px]"></FaYoutube>
         </div>
       </div>

       <div className="text-center mt-3" >
         {/* <h1 className="text-4xl font-semibold">Fitro</h1> */}
         {/* <small> <span className="text-2xl font-semibold">TaNa House</span> All Rights Reserved</small> */}
       <small>Copyright © 2024 Tcraft. All Rights Reserved.</small>
       </div>
     </menu>

   </aside>
 </section>

   </div>
    );
};

export default Footer;