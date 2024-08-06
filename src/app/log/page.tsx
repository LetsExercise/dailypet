"use client"

import DietLog from "./DietLog";
import SleepLog from "./SleepLog";
import WorkoutLog from "./WorkoutLog";

import styles from './page.module.scss'

import Header from "../_common/header";
import NavBar from "../_common/navBar";
import { useState } from "react";


export function logInput() {
  console.log("log input select");
  return (
    <div className={styles.log_input}>
      <input type="text"></input>
      <input type="submit">완료</input>
    </div>
  )
}

export default function LogPage() {
  const [ score, setScore ] = useState(100);
  return (
    <div>
      <div className={styles.log_frame}>
        <Header pageName="활동기록" info="오늘 활동한 기록을 추가해봐요!"></Header>
        <div className={styles.today_score_frame}>
          <div className={styles.today_score_text}>
            <div className={styles.today_score_text_in}>오늘의 점수</div>
            <div>오늘도 열심히 활동했어요!</div>
          </div>
          <div className={styles.today_score}>{score}점</div>
        </div>
        <SleepLog />
        <DietLog />
        <WorkoutLog />
      </div>
      <NavBar currentPage={"log"}></NavBar>
    </div>
  );
}
