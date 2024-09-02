import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs/server";
import { use } from "react";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <div className=" mt-24 mx-12 flex flex-col gap-1">
          <h2 className="wrapper h2-bold text-center sm:text-left">
            Create Event
          </h2>

        <div className="wrapper">
          <EventForm userId={userId} type="Create" />
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
