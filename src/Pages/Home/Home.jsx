import { Helmet } from "react-helmet-async";
import OurVolunteerCamp from "../../ExtraSection/OurVolunteerCamp/OurVolunteerCamp";
import OurExparter from "../../OurExparter/OurExparter";
import VolunteerNeedsNow from "../../VolunteerNeedsNow/VolunteerNeedsNow";
// import Banner from "../Banner/Banner";
import SecondBanner from "../SecondBanner/SecondBanner";
import DonationPage from "../DonationPage/DonationPage";
import TestimonialPage from "../TestimonialPage/TestimonialPage";

import NewsPage from "../NewsPage/NewsPage";
import OurLatestEvents from "../../OurLatestEvents/OurLatestEvents";
import ImpactStories from "../ImpactStories/ImpactStories";
import FAQ from '../../../src/Pages/FAQ/FAQ'


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
            <ImpactStories/>
            <VolunteerNeedsNow></VolunteerNeedsNow>
            <OurVolunteerCamp></OurVolunteerCamp>
            <OurExparter></OurExparter>
        </div>
    );
};

export default Home;