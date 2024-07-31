"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import Logo from "../_common/Logo";

// TODO: validation 작업. (react-hook-form 라이브러리 추천)
export default function SignUpPage() {
  const router = useRouter();

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (data.password !== data.check_password) {
      alert("비밀번호가 일치하지 않습니다. 다시 시도해주세요.");
      return;
    }

    createUserWithEmailAndPassword(
      auth,
      String(data.email),
      String(data.password)
    )
      .then((userCredential) => {
        setDoc(doc(db, "users", userCredential.user.uid), {
          userId: String(data.name),
        });
        router.push("/login");
      })
      .catch((error) => {
        // TODO: 이메일 형식이 잘못되거나 중복될 경우 사용자 관점에서 명확한 에러 처리
        console.log(error);
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      });
  };
  return (
    <form onSubmit={(e) => handleSignup(e)} className={styles.main}>
      <div />
      <div>
        <Logo />
        <div className={styles.inputs}>
          <input name="name" placeholder="닉네임을 입력하세요" required />
          <input
            type="email"
            name="email"
            placeholder="이메일을 입력하세요"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
            required
          />
          <input
            type="password"
            name="check_password"
            placeholder="비밀번호를 다시 입력하세요"
          />
        </div>
      </div>
      <button className={styles.button} type="submit">
        회원가입
      </button>
    </form>
  );
}
