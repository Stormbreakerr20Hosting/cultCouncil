import React from "react";
import Wheel from "@/components/shared/Wheel";

const page = () => {
  return (
    <div className="flex justify-start lg:items-center max-lg:mt-24 h-full">
      <div className="w-full lg:w-1/2 ml-12 sm:ml-24 p-4 lg:p-0 max-md:ml-0 max-md:text-center">
        <div className=" mb-8">
          <p className="text-lg lg:text-xl">
            This is the Cultural Society, IIT Mandi
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            About the council
          </h1>
        </div>
        <p className="text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          placerat mauris at magna pellentesque cursus. Vivamus elementum tellus
          id odio gravida, ac hendrerit felis dictum. Duis diam mi, ornare vel
          varius et, placerat et ligula. Nullam id sapien ullamcorper, cursus
          quam at, dapibus quam. Suspendisse et tortor vel risus sodales
          tincidunt. Proin ex felis, iaculis vel hendrerit in, tempor sit amet
          tortor. Aliquam et odio facilisis, commodo erat et, eleifend est.
          Donec in venenatis lacus. Nullam ut tristique magna. Proin lacinia
          pretium augue ac malesuada.
        </p>
      </div>

      <Wheel />
    </div>
  );
};

export default page;
