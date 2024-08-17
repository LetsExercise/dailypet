"use client";

import { FormEvent, use } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";
import { login } from "@/lib/firebase/api/authAPI";
import Logo from "../_common/Logo";
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
    <form className={styles.main} onSubmit={(e) => handleLogin(e)}>
      <Logo/>
      <div className={styles.inputs}>
        <input type="email" name="email" placeholder="이메일을 입력하세요" />
        <input
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
        />
      </div>
  
      <button type="submit" className={styles.button}>
        로그인
      </button>
    </form>
  );
}
