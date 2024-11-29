import { Helmet } from "react-helmet-async";
import OurVolunteerCamp from "../../ExtraSection/OurVolunteerCamp/OurVolunteerCamp";
import OurExparter from "../../OurExparter/OurExparter";
import VolunteerNeedsNow from "../../VolunteerNeedsNow/VolunteerNeedsNow";
// import Banner from "../Banner/Banner";
import SecondBanner from "../SecondBanner/SecondBanner";
import DonationPage from "../DonationPage/DonationPage";
import TestimonialPage from "../TestimonialPage/TestimonialPage";
import FAQ from "../FAQ/FAQ";
import NewsPage from "../NewsPage/NewsPage";
import OurLatestEvents from "../../OurLatestEvents/OurLatestEvents";



const Home = () => {
    return (
        <div className="text-4xl">

            <Helmet>
                <title> Home</title>
            </Helmet>
          
            {/* <Banner></Banner> */}

            <SecondBanner></SecondBanner>
            <DonationPage/>
            <TestimonialPage/>
            <FAQ/>
            <NewsPage/>
            <OurLatestEvents/>
            <VolunteerNeedsNow></VolunteerNeedsNow>
            <OurVolunteerCamp></OurVolunteerCamp>
            <OurExparter></OurExparter>
        </div>
    );
};

export default Home;