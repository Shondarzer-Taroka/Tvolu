import OurVolunteerCamp from "../../ExtraSection/OurVolunteerCamp/OurVolunteerCamp";
import OurExparter from "../../OurExparter/OurExparter";
import VolunteerNeedsNow from "../../VolunteerNeedsNow/VolunteerNeedsNow";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className="text-4xl">
           
            <Banner></Banner>
            <VolunteerNeedsNow></VolunteerNeedsNow>
            <OurVolunteerCamp></OurVolunteerCamp>
            <OurExparter></OurExparter>
        </div>
    );
};

export default Home;