"use client"
import Link from 'next/link';
import styles from './navbar.module.css'
import HeroPage from './pages/heroPage/heroPage';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

import { useTransition } from 'react';
const switchObject = {
    ja: 'English',
    en: 'Japanese'
}

const Navbar = () => {


    return (
        <div className={styles.navbar}>
            <nav>
                <ul className={styles.ul}>
                    <li>
                        <Link href="#home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#about">
                          About
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts">
                           Blogs
                        </Link>
                    </li>
                    <li>
                        <a href="resume.pdf" target='_blank'>Resume</a>
                    </li>
                </ul>
            </nav></div>

    );
};

export default Navbar;