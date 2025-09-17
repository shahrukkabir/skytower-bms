import Banner from "./Banner";
import Coupon from "./Coupon/Coupon";
import Features from "./Features";
import Location from "./Location";
import ProjectOverview from "./ProjectOverview";
import WelcomeHome from "./WelcomeHome";
import WeProvide from "./WeProvide";
import Appartment from "./Apartments/Apartment"
import Testimonial from "./Testimonial";
// import Company from "./Company";

export default function Home() {
  return (
    <div className="w-full">
      <Banner></Banner>
      <WelcomeHome></WelcomeHome>
      <ProjectOverview></ProjectOverview>
      <Coupon></Coupon>
      <Features></Features>
      <Location></Location>
      <WeProvide></WeProvide>
      <Appartment></Appartment>
      <Testimonial></Testimonial>
      {/* <Company></Company> */}
    </div>
  );
}
