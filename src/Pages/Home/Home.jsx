import Banner from "./Banner";
import Coupon from "./Coupon/Coupon";
import Features from "./Features";
import Location from "./Location";
import ProjectOverview from "./ProjectOverview";
import WelcomeHome from "./WelcomeHome";
import WeProvide from "./WeProvide";
import Appartment from "./Apartments/Apartment"
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet-async";
// import Company from "./Company";

export default function Home() {
  return (
    <div className="w-full">
      <Helmet><title>SkyTower | Home</title></Helmet>
      <Banner></Banner>
      <WelcomeHome></WelcomeHome>
      <ProjectOverview></ProjectOverview>
      <Appartment></Appartment>
      <Coupon></Coupon>
      <Features></Features>
      <WeProvide></WeProvide>
      <Testimonial></Testimonial>
      <Location></Location>
      {/* <Company></Company> */}
    </div>
  );
}
