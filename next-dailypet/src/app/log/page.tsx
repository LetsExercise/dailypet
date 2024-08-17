"use client";

import DietLog from "./DietLog";
import SleepLog from "./SleepLog";
import WorkoutLog from "./WorkoutLog";

import styles from "./page.module.scss";

import Header from "../_common/header";
import NavBar from "../_common/navBar";
import Score from "./Score";

export function logInput() {
  console.log("log input select");
  return (
    <div className={styles.log_input}>
      <input type="text"></input>
      <input type="submit">완료</input>
    </div>
  );
}

export default function LogPage() {
  return (
    <div>
      <div className={styles.log_frame}>
        <Header
          pageName="활동기록"
          info="오늘 활동한 기록을 추가해봐요!"
        ></Header>
        <Score />
        <SleepLog />
        <DietLog />
        <WorkoutLog />
      </div>
      <NavBar currentPage={"log"}></NavBar>
    </div>
  );
}
