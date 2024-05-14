import { NavLink } from "react-router-dom";

const MyProfile = () => {
    return (
        <div>

            {/* <p>uhg</p> */}

            {/* <div className="flex justify-center items-center my-4 mb-24">            
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={'handleSortNo'}><a>sort bt No</a></li>
                    <li onClick={'handleSortYes'}><a>sort by yes</a></li>
                </ul>
            </div> 
            </div> */}

            <div className="dropdown z-50">
                <div tabIndex={0} role="button" className="m-1 w-max">My Profile</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <NavLink to={'/addvolunteer'}> <button className="p-2"> Add Volunteer Post </button> </NavLink>
                    <NavLink to={'/managepost'}> <button className="p-2"> Manage My Post </button> </NavLink>
                </ul>
            </div>

        </div>
    );
};

export default MyProfile;