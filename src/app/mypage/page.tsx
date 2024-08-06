"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import { usePersonalGoals } from "@/lib/firebase/api/personalGoalAPI";
import NavBar from "../_common/navBar";

export default function MyPage() {
  const { data, isLoading, isError } = usePersonalGoals();

  console.log(data);
  return (
    <div className={styles.main}>
      MyPage
      <div>
        {isLoading
          ? "로딩중"
          : isError
          ? "에러"
          : !data
          ? "목표를 설정해주세요"
          : data.diet?.calories}
      </div>
      <Link href="/mypage/personalGoals">식단 목표 설정하기</Link>
      <NavBar currentPage={"mypage"}></NavBar>
    </div>
  );
}
