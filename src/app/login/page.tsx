"use client";

import { FormEvent, use } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";
import { login } from "@/lib/firebase/authAPI";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    login(String(data.email), String(data.password), () =>
      router.push("/home")
    );
  };

  return (
    <form className={styles.login_page} onSubmit={(e) => handleLogin(e)}>
      <h1>Rainit</h1>
      <div>
        <input type="email" name="email" placeholder="이메일을 입력하세요" />
        <input
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <button type="submit" className={styles.login_button}>
        로그인
      </button>
    </form>
  );
}
