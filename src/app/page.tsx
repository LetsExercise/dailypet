'use client';
import Link from "next/link";
import Logo from "./_common/Logo";
import styles from "./page.module.scss";
// import Router, {useRouter} from "next/router";
import { useRouter } from "next/navigation";
import { useEffect} from "react";
export default function Home() {
  
  // 만약이 로그아웃기능이 생기면 사용  *******************
  // const router = useRouter();
  // useEffect(()=>{
  //   const checkFirebaseKey = () => {
  //     for (let i = 0; i < localStorage.length; i++) {
  //       const key = localStorage.key(i);
  //       if (key && key.startsWith('firebase:')) {
  //         router.push('/home');
  //         break;
  //       }
  //     }
  //   };
  //   checkFirebaseKey();
  // }, [])
  // ***************************************
  return (
    <main className={styles.main}>
      <div />
      <div>
        <Logo />
        <h3>수면, 식단, 운동</h3>
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
