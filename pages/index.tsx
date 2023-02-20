import type { ReactElement } from "react";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import type { NextPageWithLayout } from "./_app";
import ProgramCard from "@/components/ProgramCard";
import createProgramsWithAttendees from "@/utils/mapAttendeesToPrograms";
import usePrograms from "../hooks/usePrograms";
import useResidents from "../hooks/useResidents";
import { ProgramWithAttendees } from "@/types";

const Home: NextPageWithLayout = () => {
  const { programs, programsError } = usePrograms();
  const { residents, residentsError } = useResidents();

  const [progamsWithAttendees, setProgramsWithAttendees] = useState<
    ProgramWithAttendees[]
  >([]);

  const handleSetProgramsWithAttendees = (
    progamsWithAttendees: ProgramWithAttendees[]
  ) => {
    setProgramsWithAttendees(progamsWithAttendees);
  };

  useEffect(() => {
    if (!programs || !residents) {
      return;
    }
    // creates auxillary data structure to map attendees to programs and store together for ease of access
    const programsWithAttendees = createProgramsWithAttendees(
      programs,
      residents
    );

    handleSetProgramsWithAttendees(programsWithAttendees);
  }, [programs, residents]);

  if (programsError || residentsError)
    return (
      <div className="animate-bounce text-[#3d8580] font-[24px]">
        Failed to load programs or residents
      </div>
    );

  if (!programs || !residents)
    return (
      <div className="animate-bounce text-[#3d8580] font-[24px]">
        Loading...
      </div>
    );

  return (
    <div className="w-full h-full mx-auto px-auto">
      <div className="grid h-full gap-y-3 sm:px-auto">
        {progamsWithAttendees.map((progamWithAttendees) => (
          <ProgramCard
            key={progamWithAttendees.id}
            progamWithAttendees={progamWithAttendees}
          />
        ))}
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
