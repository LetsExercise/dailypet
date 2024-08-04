import Image from 'next/image';

import styles from "./page.module.scss";

import HomeView from "./homeView";
import mainView from "./main_view.png";


export default function HomePage() {
  return (
    <div>
        <div className={styles.home}>
          <div className={styles.top_bar}>
            <div className={styles.pay}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.78949 7.86298H18.573C23.8145 7.86298 28.0636 12.112 28.0636 17.3535V28.1371H17.28C12.0386 28.1371 7.78949 23.888 7.78949 18.6465V7.86298Z" stroke="#A0D943" stroke-width="3"/>
              <path d="M16.7805 17.659L29.7106 29.296" stroke="#A0D943" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>129</span>
            </div>
            <div className={styles.setting}>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <path d="M7.25382 8.9656C7.60746 5.78286 10.2977 3.375 13.5 3.375V3.375C16.7023 3.375 19.3925 5.78286 19.7462 8.9656L20.0295 11.5151C20.0331 11.5476 20.0349 11.5638 20.0367 11.5799C20.1818 12.8441 20.5933 14.0631 21.244 15.1566C21.2523 15.1705 21.2607 15.1845 21.2775 15.2125L21.9278 16.2963C22.5179 17.2799 22.813 17.7716 22.7493 18.1753C22.7069 18.444 22.5687 18.6881 22.3601 18.8627C22.0467 19.125 21.4732 19.125 20.3262 19.125H6.67376C5.52677 19.125 4.95327 19.125 4.63988 18.8627C4.43135 18.6881 4.2931 18.444 4.25071 18.1753C4.18702 17.7716 4.48208 17.2799 5.0722 16.2963L5.72249 15.2125C5.73931 15.1845 5.74772 15.1705 5.756 15.1566C6.40674 14.0631 6.81822 12.8441 6.96328 11.5799C6.96513 11.5638 6.96693 11.5476 6.97055 11.5151L7.25382 8.9656Z" stroke="#535353" stroke-width="2.25"/>
                <path d="M9 19.125C9 19.7159 9.1164 20.3011 9.34254 20.8471C9.56869 21.393 9.90016 21.8891 10.318 22.307C10.7359 22.7248 11.232 23.0563 11.7779 23.2825C12.3239 23.5086 12.9091 23.625 13.5 23.625C14.0909 23.625 14.6761 23.5086 15.2221 23.2825C15.768 23.0563 16.2641 22.7248 16.682 22.307C17.0998 21.8891 17.4313 21.393 17.6575 20.8471C17.8836 20.3011 18 19.7159 18 19.125" stroke="#535353" stroke-width="2.25" stroke-linecap="round"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <path d="M3.4669 15.6876C2.8721 14.6183 2.5747 14.0837 2.5747 13.5C2.5747 12.9163 2.8721 12.3817 3.4669 11.3124L4.9848 8.58375L6.58896 5.90486C7.21755 4.85513 7.53185 4.33026 8.03735 4.03841C8.54284 3.74656 9.15454 3.73681 10.3779 3.71729L13.5 3.6675L16.6221 3.71729C17.8455 3.73681 18.4572 3.74656 18.9626 4.03841C19.4681 4.33026 19.7824 4.85513 20.411 5.90486L22.0152 8.58375L23.5331 11.3124C24.1279 12.3817 24.4253 12.9163 24.4253 13.5C24.4253 14.0837 24.1279 14.6183 23.5331 15.6876L22.0152 18.4162L20.411 21.0951C19.7824 22.1449 19.4681 22.6697 18.9627 22.9616C18.4572 23.2534 17.8455 23.2632 16.6221 23.2827L13.5 23.3325L10.3779 23.2827C9.15454 23.2632 8.54285 23.2534 8.03735 22.9616C7.53185 22.6697 7.21756 22.1449 6.58896 21.0951L4.9848 18.4163L3.4669 15.6876Z" stroke="#535353" stroke-width="2.25"/>
                <circle cx="13.5" cy="13.5" r="3.375" stroke="#535353" stroke-width="2.25"/>
              </svg>
            </div>
          </div>
          <div className={styles.home_status}>
            <div className={styles.home_fill}>
              <div>오늘의 기분</div>
              <div>행복해요</div>
            </div>
            <div className={styles.home_status_frame}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                  <circle cx="6" cy="6.5" r="5.5" stroke="#A0D943"/>
                </svg>
                <span>수면</span>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                  <circle cx="6" cy="6.5" r="5.5" stroke="#A0D943"/>
                </svg>
                <span>음식</span>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                  <circle cx="6" cy="6.5" r="5.5" stroke="#A0D943"/>
                </svg>
                <span>활동</span>
              </div>
            </div>
          </div>
          <div className={styles.home_view}>
            <Image src={mainView} alt="mainView"></Image>
            <div className={styles.comment}>즐거운 아침이에요!</div>
          </div>
          <HomeView></HomeView>
        </div>
    </div>
  );
}
