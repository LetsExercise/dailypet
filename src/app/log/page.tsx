import DietLog from "./DietLog";
import SleepLog from "./SleepLog";

export default function LogPage() {
  return (
    <div>
      <h1>Log</h1>
      <SleepLog />
      <DietLog />
      <div>
        <h2>운동습관</h2>
      </div>
    </div>
  );
}
