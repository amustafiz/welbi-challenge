import {
  Attendees,
  Program,
  Resident,
  Attendance,
  ProgramWithAttendees,
  ResidentMap,
} from "@/types";

const createResidentMap = (residents: Resident[]) => {
  return residents?.reduce((residentMapAcc, resident) => {
    const { id, firstName, lastName } = resident;

    residentMapAcc[id] = { firstName, lastName };

    return residentMapAcc;
  }, {} as ResidentMap);
};

const createAttendees = (
  attendance: Attendance[],
  residentMap: ResidentMap
) => {
  return attendance.reduce(
    (attendeeAccumulator: Attendees, attendenceRelation) => {
      const { residentId } = attendenceRelation;
      const { firstName, lastName } = residentMap[residentId];

      attendeeAccumulator.push({ id: residentId, firstName, lastName });

      return attendeeAccumulator;
    },
    []
  );
};

export default function createProgramsWithAttendees(
  programs: Program[],
  residents: Resident[]
) {
  const residentMap = createResidentMap(residents);

  return programs?.reduce(
    (programsWithAttendeesAccumulator, program: Program) => {
      const attendees = createAttendees(program.attendance, residentMap);

      programsWithAttendeesAccumulator.push({
        id: program.id,
        name: program.name,
        location: program.location,
        attendees,
        start: program.start,
        facilitators: program.facilitators,
        levelOfCare: program.levelOfCare,
        tags: program.tags,
      });

      return programsWithAttendeesAccumulator;
    },
    [] as ProgramWithAttendees[]
  );
}
