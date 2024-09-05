import React from "react";
import Wheel from "@/components/shared/Wheel";

const page = () => {
  return (
    <div className="flex justify-start lg:items-center h-full mt-20 max-lg:mt-32">
      <div className="w-full lg:w-2/3 ml-12 max-md:ml-0 p-4 max-md:text-center">
        <div className="mb-8">
          <p className="text-lg lg:text-xl">
            This is the Cultural Society, IIT Mandi
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            About The Council
          </h1>
        </div>
        <p className="text-sm md:text-base lg:text-lg mb-20">
          The Cultural Council at IIT Mandi is a vibrant hub for students
          passionate about arts, culture, and creativity. It plays a pivotal
          role in fostering a diverse cultural atmosphere on campus, organizing
          events that range from music and dance performances to drama and
          literary activities. The council provides a platform for students to
          showcase their talents, learn new skills, and engage in cultural
          exchanges, thereby enriching the campus experience. By promoting
          various cultural activities, the Cultural Council helps in building a
          close-knit community where students can explore their interests and
          celebrate the rich diversity of cultural expressions.
        </p>
      </div>

      {/* <Wheel /> */}
    </div>
  );
};

export default page;
