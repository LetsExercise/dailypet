"use client";

import { FormEvent, useState } from "react";
import DietEl from "./DietEl";
import { useRouter } from "next/navigation";
import { formName } from "./formName";
import { timeFormat } from "../../utils";
import { personalGoalsStorage } from "@/app/_common/_util/storage";

export default function DietGoalPage() {
  const [dietElList, setDietElList] = useState<JSX.Element[]>([]);
  const router = useRouter();

  const addDiet = () => {
    setDietElList([
      ...dietElList,
      <DietEl key={dietElList.length} index={dietElList.length} />,
    ]);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const calories = Number(formData.get(formName.calories));
    const dietList = dietElList.map((dietEl) => {
      const label = String(formData.get(formName.label(dietEl.props.index)));
      const time = timeFormat(
        String(formData.get(formName.time(dietEl.props.index)))
      );
      return { label, time };
    });

    personalGoalsStorage.set({
      ...personalGoalsStorage.get(),
      diet: { calories, dietTime: dietList },
    });
    router.push("/mypage/personalGoals/workout");
  };

  return (
    <div>
      <h1>식단 목표 설정하기</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name={formName.calories}
          placeholder="하루 섭취 칼로리"
        />
        {dietElList}
        <button type="button" onClick={addDiet}>
          식단 추가
        </button>
        <button type="submit">다음</button>
      </form>
    </div>
  );
}
