import { IoClose } from "react-icons/io5";

const FeedBack = ({handleToggle,handlefeedback,feedback,myDisable,setMyDisable}) => {
    return (
        <div>
        <div>
            <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="p-2" onClick={() => document.getElementById('my_modal_5').showModal()}>Add feedback </button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                        {/* <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p> */}
                        <div className="mt-4">
                            <form onSubmit={handlefeedback} >

                                <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                                    <textarea onChange={handleToggle} ref={feedback} className="w-full h-full outline-none" placeholder="write here your feedback" name="feedback" id="" cols="30" rows="5"></textarea>
                                </div>


                                <button disabled={myDisable} className="btn btn-info mt-3"> Send </button>

                            </form>
                        </div>

                        <div className="absolute top-0 right-1 pb-4">
                            <form method="dialog" >

                                <button className=""
                                > <IoClose className="text-3xl font-bold"></IoClose> </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
          
        </div>
        </div>
    );
};

export default FeedBack;