import { useState } from "react";
import { Arrow } from "./Arrow";
import ProgramDetail from "./ProgramDetail";
import AddResidentSelector from "./AddResidentSelector";
import { ProgramWithAttendees } from "@/types";

const ProgramCard = ({
  progamWithAttendees: {
    id,
    name,
    location,
    attendees,
    start,
    facilitators,
    levelOfCare,
    tags,
  },
}: {
  progamWithAttendees: ProgramWithAttendees;
}) => {
  const [showMore, setShowMore] = useState<Boolean>(false);

  function handleShowMore() {
    setShowMore((showMore) => !showMore);
  }

  return (
    <div
      className={`block w-full mx-auto text-center bg-white rounded-lg shadow-md md:flex md:space-x-3 lg:space-x-6 md:mx-0 lg:min-w-md md:text-[16px] text-[12px] text-gray-800 py-3 relative`}
      key={id}
    >
      <div className="relative flex-col w-full">
        <div className="grid items-start w-full grid-cols-5 md:space-x-5 place-items-center">
          <ProgramDetail label="Activity name:"> {name}</ProgramDetail>
          <ProgramDetail label="Location:">{location}</ProgramDetail>
          <ProgramDetail label="Date:">
            {`${new Date(start).toDateString()}`}
          </ProgramDetail>
          <ProgramDetail label="Attendance:">{`${
            attendees.length || 0
          } attendee${`${attendees.length > 1 ? "s" : ""}`}`}</ProgramDetail>
          <Arrow handleClick={handleShowMore} />
        </div>
        {showMore && (
          <div className="grid items-start w-full grid-cols-5 pt-4 md:pt-3 md:space-x-5 place-items-center">
            <ProgramDetail label="Facilitators:">
              {facilitators.map((name, i) => {
                return (
                  <p key={i} className="text-[#61c0c2] p-0">
                    {name}
                    {i === facilitators.length - 1 ? "" : ","}
                  </p>
                );
              })}
            </ProgramDetail>
            <ProgramDetail label="Level Of Care:">
              {levelOfCare.map((loc, i) => {
                return (
                  <p key={i} className="text-[#61c0c2] p-0">
                    {loc.toLowerCase()}
                    {i === levelOfCare.length - 1 ? "" : ","}
                  </p>
                );
              })}
            </ProgramDetail>
            <ProgramDetail label="Tags:">
              {tags.length > 0 &&
                tags.map((tag, i) => {
                  return (
                    <p key={i} className="text-[#61c0c2] p-0">
                      {tag}
                    </p>
                  );
                })}
              {tags.length === 0 && <p className="text-[#61c0c2]">no tags</p>}
            </ProgramDetail>
            <ProgramDetail label="Resident Names:">
              {attendees.length > 0 &&
                attendees.map((attendee, i) => (
                  <p key={i} className="text-[#61c0c2] p-0">
                    {attendee.firstName} {attendee.lastName}
                  </p>
                ))}
              {attendees.length === 0 && (
                <p className="text-[#61c0c2]">No registrations yet</p>
              )}
            </ProgramDetail>
            <AddResidentSelector programId={id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramCard;
