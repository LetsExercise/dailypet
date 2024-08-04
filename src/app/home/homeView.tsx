"use client";

import Floor from './floor.svg'
import Character from './character.svg'

import styles from "./page.module.scss";

import Image from 'next/image'



export default function HomeView() {
    
    return (
        <div className={styles.character}>
            <div className={styles.forward}>
                <Image src={Character} alt='character'></Image>
            </div>
            <div className={styles.background}>
                <Image src={Floor} alt='floor' className={styles.floor}></Image>
            </div>
        </div>
    )
}