import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Head from "next/head";
import favicon from "./favicon.ico";
const inter = Inter({ subsets: ["latin"] });
import style from "./layout.module.scss";

export const metadata: Metadata = {
  title: "dailypet",
  description: "My Daily Companion, Daily Pet",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      {/* <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body>
        <div className={style.parent}>
          <div className={style.child}>{children}</div>
        </div>
      </body>
    </html>
  );
}
