export type Attendees = Pick<Resident, "id" | "firstName" | "lastName">[];

export type ResidentMap = {
  [residentId: string]: Pick<Resident, "firstName" | "lastName">;
};

export interface ProgramWithAttendees {
  id: number;
  name: string;
  location: string;
  attendees: Attendees;
  start: string;
  facilitators: string[];
  levelOfCare: string[];
  tags: string[];
}

type LevelOfCare = "INDEPENDENT" | "ASSISTED" | "MEMORY" | "LONGTERM";

export interface Attendance {
  programId: number;
  residentId: number;
  status: "Active" | "Passive" | "Declined" | "Undefined";
}

export interface Resident {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  preferredName: null | string;
  status: null | string;
  room: string;
  levelOfCare: LevelOfCare;
  ambulation: "NOLIMITATIONS" | "CANE" | "WALKER" | "WHEELCHAIR";
  birthDate: string;
  moveInDate: string;
  createdAt: string;
  updatedAt: string;
  applicantId: number;
  attendance: Attendance[];
}

interface Recurrence {
  byMonth: number;
  interval: number;
  frequency: string;
  byMonthday: number;
}

export interface Program {
  id: number;
  parentId: null | number;
  name: string;
  location: string;
  allDay: boolean;
  start: string;
  end: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  dimension: string;
  facilitators: string[];
  levelOfCare: LevelOfCare[];
  hobbies: string[];
  recurrence: null | Recurrence;
  isRepeated: boolean;
  applicantId: null | number;
  attendance: Attendance[];
}
