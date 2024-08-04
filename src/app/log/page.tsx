import DietLog from "./DietLog";
import SleepLog from "./SleepLog";
import WorkoutLog from "./WorkoutLog";

export default function LogPage() {
  return (
    <div>
      <h1>Log</h1>
      <SleepLog />
      <DietLog />
      <WorkoutLog />
    </div>
  );
}
