"use client";

import { useSleepOfDay } from "@/lib/firebase/api/sleepAPI";

export default function SleepLog() {
  const { data, isLoading, isError } = useSleepOfDay(new Date());
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <div></div>;

  return (
    <div>
      <h2>수면</h2>
      {data.map((sleep) => (
        <div key={sleep.id}>
          <div>{sleep.label}</div>
          <div>{sleep.sleepStart.toISOString()}</div>
          <div>{sleep.sleepEnd.toISOString()}</div>
        </div>
      ))}
    </div>
  );
}
