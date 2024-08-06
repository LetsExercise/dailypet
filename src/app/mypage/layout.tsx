"use client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

export default function GoalsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*
      TODO:
      MUI 사용하려면 이걸로 컴포넌트 둘러야 합니다.
      
      루트페이지 layout에 두르려고 했는데 
      메타데이터 형식때문에 use client가 안써져서
      임시로 여기다 둘렀습니다.

      다른 페이지에도 필요하면 그때 고쳐보아요
    */
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
}
