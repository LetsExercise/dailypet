"use client";

import styles from "./page.module.scss";

import HomeView from "./homeView";
import NavBar from "../_common/navBar";
import Header from "../_common/header";

export default function HomePage() {
  return (
    <div>
        <div className={styles.home}>
          <Header pageName="Daily Pet" info=""></Header>
          <div className={styles.home_status}>
            <div className={styles.home_fill}>
              <div>오늘의 기분</div>
              <div>행복해요</div>
            </div>
            <div className={styles.home_status_frame}>
              <div className={styles.home_status_info}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="6" fill="#A0D943"/>
                </svg>
                <span>수면</span>
              </div>
              <div className={styles.home_status_info}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="6" fill="#A0D943"/>
                </svg>
                <span>음식</span>
              </div>
              <div className={styles.home_status_info}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="6" fill="#A0D943"/>
                </svg>
                <span>활동</span>
              </div>
            </div>
          </div>
          <div className={styles.home_view}>
            <HomeView></HomeView>
            <div className={styles.comment}>즐거운 아침이에요!</div>
          </div>
          
        </div>
      <NavBar currentPage={"home"}></NavBar>
    </div>
  );
}
