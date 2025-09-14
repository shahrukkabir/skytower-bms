import Banner from "./Banner";
import Coupon from "./Coupon/Coupon";
import Features from "./Features";
import Location from "./Location";
import ProjectOverview from "./ProjectOverview";
import WelcomeHome from "./WelcomeHome";

export default function Home() {
  return (
    <div className="w-full">
      <Banner></Banner>
      <WelcomeHome></WelcomeHome>
      <ProjectOverview></ProjectOverview>
      <Coupon></Coupon>
      <Features></Features>
      <Location></Location>
    </div>
  );
}
