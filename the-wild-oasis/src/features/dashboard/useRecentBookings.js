import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { getBookingsAfterDate } from "../../services/apiBookings";
export function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDays = searchParams.get("last")
    ? Number(searchParams.get("last"))
    : 7;

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last=${numDays}`],
  });
  return { bookings, isLoading, numDays };
}