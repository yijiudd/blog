"use client"
import { useEffect, useRef, useState } from 'react'
import styles from './contact.module.css'
const contentAnim1 = [`${styles.education} ${styles.novisible}`, `${styles.education} ${styles.educationAnim} ${styles.delay1} `]
const contentAnim2 = [`${styles.education} ${styles.novisible}`, `${styles.education} ${styles.educationAnim} ${styles.delay2} `]
const contentAnim3 = [`${styles.education} ${styles.novisible}`, `${styles.education} ${styles.educationAnim} ${styles.delay3} `]
const contentAnim4 = [`${styles.education} ${styles.novisible}`, `${styles.education} ${styles.educationAnim} ${styles.delay4} `]
const Contact = () => {
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
    return <div className={styles.contact} ref={myRef} >
        <div className={styles.introText}><p>Want to know more about me?</p></div>
        <h2> My Education and Work Experience</h2>
        <div className={styles.contentArea}>
            <div className={styles.left}>
                <div className={(count <= 1 ? contentAnim1[count] : `${styles.educationEnd}`)}>
                    <div className={styles.headArea}>
                        <div>  <img src='/education.png'></img></div>
                        <div className={styles.iconArea}>
                            <img src='/waseda.png'></img>
                            <img src='/bupt.png'></img>
                        </div>
                    </div>

                    <h3>Education</h3>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2023</span>
                        <text> Waseda University </text>
                        <span className={styles.badge}>Master</span>
                    </div>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2017</span>
                        <text> Beijing University of Posts and Telecommunications </text>
                        <span className={styles.badge}>Bachelor</span>
                    </div>
                </div>
                <div className={(count <= 1 ? contentAnim2[count] : `${styles.educationEnd}`)}>
                    <img src='/award.png'></img>
                    <h3>Awards</h3>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2017-2020</span>
                        <text> BUPT School-Level third-class Scholarship (top 30%) </text>
                    </div>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2020</span>
                        <text> China College Student Internet+ Competition Beijing third Price</text>
                    </div>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2019</span>
                        <text> Beijing Electronic Design Competition Second Price</text>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={(count <= 1 ? contentAnim3[count] : `${styles.educationEnd}`)}>
                    <div className={styles.headArea}>
                        <div><img src='/tool.png'></img></div>
                        <div className={styles.iconArea}>
                            <img src='/typescript-64.png'></img>
                            <img src='/C.png'></img>
                            <img src='/react-64.png'></img>
                            <img src='/unity-64.png'></img>
                            <img src='/cocos.png'></img>
                        </div>
                    </div>
                    <h3>Skills</h3>
                    <div className={styles.elements}>
                        <div className={styles.element}>
                            <text className={styles.eleLeft}>English</text>
                            <text className={styles.eleRight}>80%</text>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: "80%" }}></div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <text className={styles.eleLeft}>Coding(TS/C#)</text>
                            <text className={styles.eleRight}>80%</text>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: "80%" }}></div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <text className={styles.eleLeft}>Front-End Tech(React/Vercel/)</text>
                            <text className={styles.eleRight}>78%</text>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: "78%" }}></div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <text className={styles.eleLeft}>Game Engine(COCOS/Unity)</text>
                            <text className={styles.eleRight}>75%</text>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: "75%" }}></div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <text className={styles.eleLeft}>Computer Vision(ML/DL) </text>
                            <text className={styles.eleRight}>20%</text>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: "20%" }}></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={(count <= 1 ? contentAnim4[count] : `${styles.educationEnd}`)}>
                    <div className={styles.headArea}>
                        <div> <img src='/work.png'></img></div>
                        <div className={styles.iconArea}>
                            <img src='/bytedance.png'></img>
                        </div>
                    </div>
                    <h3> Work Experience</h3>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2021</span>
                        <text> ByteDance Front-end development Enginner </text>
                    </div>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2020</span>
                        <text> ByteDance Front-end development Intern </text>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.contactDown} id='contact'>
            <div className={styles.introText}><p>Feel free to contact me!</p></div>
            <div className={styles.contactArea}>
                <a href='https://line.me/ti/p/rPf-ESxVtv' className={styles.contactElement}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" fill="#46f339"></path> </svg>
                    <text className={styles.contactText}>Jiu</text>
                </a>
                <a href='https://twitter.com/yji21567477' className={styles.contactElement}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1DA1F2" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" /> </svg>
                    <text className={styles.contactText}>@yji21567477</text>
                </a>
                <a href='https://github.com/yijiudd' className={styles.contactElement}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" /> </svg>
                    <text className={styles.contactText}>github.com/yijiudd</text></a>
                <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=yijiubd@gmail.com&tf=1" className={styles.contactElement}>
                    <img width="32" alt="Gmail icon (2020)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/32px-Gmail_icon_%282020%29.svg.png"></img>
                    <text className={styles.contactText}>yijiubd@gmail.com</text>
                </a>

            </div>
        </div>
    </div >
}
export default Contact