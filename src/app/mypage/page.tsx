import Link from "next/link";
import styles from "./page.module.scss";

export default function MyPage() {
  return (
    <div className={styles.main}>
      MyPage
      <Link href="/mypage/personalGoals">식단 목표 설정하기</Link>
    </div>
  );
}
