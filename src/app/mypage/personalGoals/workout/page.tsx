"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import WorkoutEl from "./WorkoutEl";

export default function WorkoutGoalPage() {
  const router = useRouter();
  const [workoutElList, setWorkoutElList] = useState<JSX.Element[]>([]);

  const addWorkout = () =>
    setWorkoutElList([
      ...workoutElList,
      <WorkoutEl key={workoutElList.length} index={workoutElList.length} />,
    ]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const workoutList = workoutElList.map((workoutEl) => {
      const week = formData.get(`week_${workoutEl.props.index}`);
      const start = formData.get(`start_${workoutEl.props.index}`);
      const end = formData.get(`end_${workoutEl.props.index}`);
      return { week, start, end };
    });

    console.log(workoutList);
    router.push("/mypage");
  };
  return (
    <div>
      <h1>운동 목표 설정하기</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        {workoutElList}
        <button type="button" onClick={addWorkout}>
          운동 추가
        </button>
        <button type="submit">다음</button>
      </form>
    </div>
  );
}
