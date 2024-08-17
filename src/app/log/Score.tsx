import { useState } from "react";
import styles from "./page.module.scss";
import { usePersonalGoals } from "@/lib/firebase/api/personalGoalAPI";

export default function Score() {
  const [score, setScore] = useState(100);
  const { data, isLoading, isError } = usePersonalGoals();

  // /////
  // try {
  //   const response_score = await axios.post(
  //     'https://castberry.kr:3650/api/open', {
  //       "goal": {},
  //       "status": {},
  //     }
  //   );
  //   setScore(JSON.parse(response_score.data).score);
  // } catch (error) {
  //   console.error(error);
  // }
  /////

  return (
    <div className={styles.today_score_frame}>
      <div className={styles.today_score_text}>
        <div className={styles.today_score_text_in}>오늘의 점수</div>
        <div>오늘도 열심히 활동했어요!</div>
      </div>
      <div className={styles.today_score}>{score}점</div>
    </div>
  );
}
