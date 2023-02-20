import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import { Resident } from "@/types";

export default function useResidents() {
  const {
    data: residents,
    error: residentsError,
    mutate: residentsRefresh,
  } = useSWR<Resident[]>("/api/residents", fetcher);

  return { residents, residentsError, residentsRefresh };
}
