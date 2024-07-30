import Image from "next/image";
import styles from "./page.module.scss";
import Logo from "./_common/Logo";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
