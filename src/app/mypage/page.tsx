"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import { usePersonalGoals } from "@/lib/firebase/api/personalGoalAPI";
import NavBar from "../_common/navBar";
export default function MyPage() {
  const { data, isLoading, isError } = usePersonalGoals();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error!</div>;
  // if (!data) return <div></div>;

  console.log(data);
  return (
    <div className={styles.main}>
      MyPage
      <div>{data.diet?.calories}</div>
      <Link href="/mypage/personalGoals">식단 목표 설정하기</Link>
      <NavBar currentPage={"mypage"}></NavBar>
    </div>
  );
}
