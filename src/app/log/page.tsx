import DietLog from "./DietLog";

export default function LogPage() {
  return (
    <div>
      <h1>Log</h1>
      <div>
        <h2>수면습관</h2>
      </div>
      <DietLog />
      <div>
        <h2>운동습관</h2>
      </div>
    </div>
  );
}
