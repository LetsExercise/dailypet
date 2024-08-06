"use client";

import { useSleepOfDay } from "@/lib/firebase/api/sleepAPI";

import styles from './page.module.scss'
import { useState } from "react";


export default function SleepLog() {
  
  const { data, isLoading, isError } = useSleepOfDay(new Date());
  const [ logList, setLogList ] = useState(
    data.map((sleep) => (
    <div key={sleep.id} className={styles.log_input}>
      <div>{sleep.label}</div>
      <div>{sleep.sleepStart.toISOString()}</div>
      <div>{sleep.sleepEnd.toISOString()}</div>
    </div>
  )));
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <div>활동을 추가해보세요!</div>;

  const logInput = () => {
    console.log("log input select");
    setLogList([...logList,
      <div className={styles.log_input}>
        수면시간
        <div className={styles.log_input_info}>
          <input type="text" name="수면시간"></input>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M27 13.5L18 22.5L9 13.5" stroke="#2C2C2C" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>
        
      </div>
    ])
  }

  return (
    <div className={styles.add_log_frame}>
      <div className={styles.add_log_title}>
        <div>수면습관</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={logInput}>
          <path d="M12 6L12 18" stroke="#535353" stroke-width="2" stroke-linecap="round"/>
          <path d="M18 12L6 12" stroke="#535353" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
        {logList}
    </div>
  );
}
