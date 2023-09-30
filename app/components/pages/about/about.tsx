'use client'
import Image from 'next/image'
import styles from '../about/about.module.css'
import { useEffect, useRef, useState } from 'react'

const contentAreaAnim = [`${styles.contentArea} ${styles.novisible}`, `${styles.contentArea} ${styles.moveLeft}`]
const imageAreaAnim = [`${styles.novisible}`, `${styles.moveRight}`]
const About = () => {
    const myRef = useRef(null)
    const [count, setCount] = useState(0)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setCount((prevCount) => prevCount + 1)
            }
        }, { threshold: 0.3 });
        if (myRef.current) {
            observer.observe(myRef.current)

        }
        return () => {
            if (myRef.current) {
                observer.unobserve(myRef.current)
            }
        }
    }, [])

    return <div className={styles.about} id='about' ref={myRef}>
        <div className={styles.totalArea}>
            <div className={(count <= 1 ? contentAreaAnim[count] : `${styles.contentArea} `)} >
                <div className={styles.introText}><p>Let me introduce myself</p></div>
                <h3 className={styles.helloText} >Hi! I am Yi Jiu</h3>
                <p className={styles.intro}> I worked at ByteDance as a Front-end Engineer developing H5 games before,but now I am a CS graducate student in Waseda University. I am doing research on computer vision.I dream about working in game industry in Japan one day. </p>
                <div className={styles.Area}>
                    <div className={styles.name}>
                        <text>Name:</text>
                        <text>Yi Jiu</text>
                    </div>
                    <div className={styles.name}>
                        <text>Personality:</text>
                        <text>INFP</text>
                    </div>
                    <div className={styles.name}>
                        <text>BirthDay:</text>
                        <text>1999/9/19</text>
                    </div>
                    <div className={styles.name}>
                        <text>Hobbies:</text>
                        <text>BasketBall、Movie、Anime、VideoGames</text>
                    </div>
                </div>
            </div>
            <div className={count <= 1 ? imageAreaAnim[count] : `${styles.visible}`}>
                <img src='/person.jpeg' alt='Personal Picture' className={styles.imageArea}></img>
            </div>
        </div>
    </div >
}
export default About