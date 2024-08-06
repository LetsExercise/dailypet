"use client";

import { useWorkoutOfDay } from "@/lib/firebase/api/workoutAPI";

import styles from './page.module.scss'
import { logInput } from "./page";

export default function WorkoutLog() {
  const { data, isLoading, isError } = useWorkoutOfDay(new Date());
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <div>활동을 추가해보세요!</div>;

  return (
    <div className={styles.add_log_frame}>
      <div className={styles.add_log_title}>
        <div>운동</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={logInput}>
          <path d="M12 6L12 18" stroke="#535353" stroke-width="2" stroke-linecap="round"/>
          <path d="M18 12L6 12" stroke="#535353" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div>
        {data.map((workout) => (
          <div key={workout.id} className={styles.log_input}>
            <div>{workout.exerciseName}</div>
            <div>{workout.duration}</div>
            <div>{workout.datetime.toISOString()}</div>
          </div>
        ))}
      </div>

    </div>
  );
}
