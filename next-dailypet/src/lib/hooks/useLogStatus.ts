import { useMemo } from "react";
import { useDietOfDay } from "../firebase/api/dietAPI"
import { useWorkoutOfDay } from "../firebase/api/workoutAPI";

export const useLogStatus = () => {
   const { data: diets, isLoading: dietIsLoading, isError: dietIsError } = useDietOfDay(new Date());
   const { data: workouts, isLoading: workoutIsLoading, isError: workoutIsError } = useWorkoutOfDay(new Date());
   const { data: sleeps, isLoading: sleepIsLoading, isError: sleepIsError } = useWorkoutOfDay(new Date());

   const isRender = useMemo(() => {
      if (dietIsLoading || workoutIsLoading || sleepIsLoading) return false;
      if (dietIsError || workoutIsError || sleepIsError) return false;
      return true;
   }, [dietIsLoading, workoutIsLoading, sleepIsLoading, dietIsError, workoutIsError, sleepIsError]);
}