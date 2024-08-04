"use client";

import { useWorkoutOfDay } from "@/lib/firebase/api/workoutAPI";

export default function WorkoutLog() {
  const { data, isLoading, isError } = useWorkoutOfDay(new Date());
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <div></div>;

  return (
    <div>
      <h2>운동</h2>
      {data.map((workout) => (
        <div key={workout.id}>
          <div>{workout.exerciseName}</div>
          <div>{workout.duration}</div>
          <div>{workout.datetime.toISOString()}</div>
        </div>
      ))}
    </div>
  );
}
