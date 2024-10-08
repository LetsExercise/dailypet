"use client";

import { MobileTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { timeFormat } from "../../utils";
import { personalGoalsStorage } from "@/app/_common/_util/storage";

export default function SleepGoalPage() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const sleepStart = timeFormat(String(formData.get("sleepStart")));
    const sleepEnd = timeFormat(String(formData.get("sleepEnd")));

    personalGoalsStorage.set({
      ...personalGoalsStorage.get(),
      sleep: { sleepStart, sleepEnd },
    });
    router.push("/mypage/personalGoals/diet");
  };
  return (
    <div>
      <h1>수면 목표 설정하기</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <MobileTimePicker
          label="취침 시간"
          name="sleepStart"
          defaultValue={dayjs("2022-04-17T21:00")}
        />
        <MobileTimePicker
          label="기상 시간"
          name="sleepEnd"
          defaultValue={dayjs("2022-04-17T06:00")}
        />
        <button type="submit">다음</button>
      </form>
    </div>
  );
}
