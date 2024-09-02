import TimelineMain from "./Home_Timeline";
import { MainCarousel } from "./MainCarousel";

function LandingSection() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center mt-48 px-5 md:px-12">
        <div className="flex flex-col items-center">
          <div className="text-xl font-medium text-neutral-100/[0.7] text-center">
            This is the Cultural Society, IIT Mandi
          </div>
          <h1 className="text-6xl max-sm:text-3xl max-w-screen-md font-semibold text-center leading-tight">
            Where raw talent meets global exposure
          </h1>
        </div>
        <div className="mt-24 px-12 w-full max-w-screen-lg">
          <MainCarousel />
          {/* <TimelineMain /> */}
        </div>
      </div>
    </>
  );
}

export default LandingSection;
