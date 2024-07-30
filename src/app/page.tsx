import Link from "next/link";
import Logo from "./_common/Logo";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div />
      <div>
        <Logo />
        <h3>수면, 음식, 운동</h3>
        <div>나만의 펫과 함께</div>
        <div>오늘 하루를 활동해 볼까요?</div>
      </div>
      <div>
        <Link href="/signup">
          <button>시작하기</button>
        </Link>
        <div className={styles.smallfont}>
          이미 계정이 있나요? <Link href="/login">로그인</Link>
        </div>
      </div>
    </main>
  );
}
