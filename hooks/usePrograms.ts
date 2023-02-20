import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import { Program } from "@/types";

export default function usePrograms() {
  const {
    data: programs,
    error: programsError,
    mutate: programsRefresh,
  } = useSWR<Program[]>("/api/programs", fetcher);

  const addResidentToProgram = async (
    programId: number,
    residentId: number
  ) => {
    await fetch("/api/register-resident", {
      method: "POST",
      body: JSON.stringify({
        programId,
        residentId,
        status: "Active",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return { programs, programsError, programsRefresh, addResidentToProgram };
}
