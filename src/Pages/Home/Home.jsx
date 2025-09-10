import Banner from "./Banner";
import Coupon from "./Coupon/Coupon";
import ProjectOverview from "./ProjectOverview";
import WelcomeHome from "./WelcomeHome";

export default function Home() {
  return (
    <div className="w-full">
      <Banner></Banner>
      <WelcomeHome></WelcomeHome>
      <ProjectOverview></ProjectOverview>
      <Coupon></Coupon>
    </div>
  );
}
