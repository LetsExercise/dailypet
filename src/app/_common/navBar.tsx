import { useRouter } from 'next/navigation';

import styles from './navBar.module.scss'
import { useState } from 'react';


export default function NavBar() {
    const mainColor = "#95cc3c";
    const blackColor = "#2C2C2C";
    
    const [ nowPage, setNowPage ] = useState<string | null>("home");

    const router = useRouter();
    const clickHome = () => {
      setNowPage("home");
      router.push("/home");
    };
    const clickLog = () => {
      setNowPage("log");
      router.push("/log")
    };
    const clickShop = () => {
      setNowPage("shop");
      router.push("/shop")
    };
    const clickMypage = () => {
      setNowPage("mypage");
      router.push("/mypage")
    };

    return (
      <div className={styles.navbar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" onClick={clickHome}>
          <path d="M7.5 19.1396C7.5 17.1029 7.5 16.0846 7.91169 15.1895C8.32338 14.2944 9.09655 13.6317 10.6429 12.3063L12.1429 11.0205C14.9379 8.62485 16.3353 7.427 18 7.427C19.6647 7.427 21.0621 8.62485 23.8571 11.0205L25.3571 12.3063C26.9035 13.6317 27.6766 14.2944 28.0883 15.1895C28.5 16.0846 28.5 17.1029 28.5 19.1396V25.5002C28.5 28.3286 28.5 29.7428 27.6213 30.6215C26.7426 31.5002 25.3284 31.5002 22.5 31.5002H13.5C10.6716 31.5002 9.25736 31.5002 8.37868 30.6215C7.5 29.7428 7.5 28.3286 7.5 25.5002V19.1396Z" 
          stroke={nowPage === "home" ? mainColor : blackColor} stroke-width="3"/>
          <path d="M21.75 31.5V24C21.75 23.1716 21.0784 22.5 20.25 22.5H15.75C14.9216 22.5 14.25 23.1716 14.25 24V31.5" stroke={nowPage === "home" ? mainColor : blackColor} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" onClick={clickLog}>
          <path d="M7.875 21.2143V8.35714C7.875 7.95308 7.875 7.75105 8.00053 7.62553C8.12605 7.5 8.32808 7.5 8.73215 7.5H14.9154C15.4425 7.5 15.7061 7.5 15.916 7.6328C16.1259 7.76559 16.2388 8.00376 16.4645 8.48008L17.1605 9.94849C17.3862 10.4248 17.4991 10.663 17.709 10.7958C17.9189 10.9286 18.1825 10.9286 18.7096 10.9286H26.5179C26.9219 10.9286 27.1239 10.9286 27.2495 11.0541C27.375 11.1796 27.375 11.3817 27.375 11.7857V23.7857C27.375 24.1898 27.375 24.3918 27.2495 24.5173C27.1239 24.6429 26.9219 24.6429 26.5179 24.6429H18.7096C18.1825 24.6429 17.9189 24.6429 17.709 24.5101C17.4991 24.3773 17.3862 24.1391 17.1605 23.6628L16.4645 22.1944C16.2388 21.718 16.1259 21.4799 15.916 21.3471C15.7061 21.2143 15.4425 21.2143 14.9154 21.2143H7.875ZM7.875 21.2143V31.5" 
          stroke={nowPage === "log" ? mainColor : blackColor} stroke-width="3" stroke-linecap="round"/>
        </svg>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" onClick={clickShop}>
          <path d="M7.93546 8.20398H18.719C23.9605 8.20398 28.2095 12.453 28.2095 17.6945V28.4781H17.426C12.1845 28.4781 7.93546 24.229 7.93546 18.9875V8.20398Z" stroke={nowPage === "shop" ? mainColor : blackColor} stroke-width="3"/>
          <path d="M16.9265 18L29.8565 29.637" stroke={nowPage === "shop" ? mainColor : blackColor} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" onClick={clickMypage}>
          <circle cx="18" cy="10.5" r="6" stroke={nowPage === "mypage" ? mainColor : blackColor} stroke-width="3" stroke-linecap="round"/>
          <path d="M8.00683 27.4808C8.99845 23.2903 13.1576 21 17.4639 21H18.5361C22.8424 21 27.0016 23.2903 27.9932 27.4808C28.185 28.2917 28.3375 29.1402 28.4233 30.0025C28.5054 30.8268 27.8284 31.5 27 31.5H9C8.17157 31.5 7.49463 30.8268 7.57666 30.0025C7.66246 29.1402 7.81495 28.2917 8.00683 27.4808Z" stroke="#2C2C2C" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
    );
}
  