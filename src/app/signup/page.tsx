"use client";

import { FormEvent } from "react";
import styles from "./page.module.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function LoginPage() {
  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    createUserWithEmailAndPassword(auth, String(data.email), String(data.type))
      .then((userCredential) => {
        setDoc(doc(db, "users", userCredential.user.uid), {
          userId: String(data.name),
        });
      })
      .catch((error) => {
        // TODO: 이메일 형식이 잘못되거나 중복될 경우 사용자 관점에서 명확한 에러 처리
        console.log(error);
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      });
  };
  return (
    <div className={styles.login_page}>
      <h1>Rainit</h1>
      <form onSubmit={(e) => handleSignup(e)}>
        <div className={styles.auth_title}>회원가입</div>
        <input name="name" placeholder="닉네임" required />
        <input type="email" name="email" placeholder="이메일" required />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          required
        />
        <button className={styles.login_button} type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
}
