import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import { marked } from 'marked'
import styles from './page.module.css'

export default async function SinglePost({ params }) {
    const { content, data } = await getPost(params.slug)
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <Link href='/'>Home</Link>
                        <Link href='/posts'>Posts</Link>
                    </nav>
                </div>
            </header>
            <main className={styles.main}>
                <div className={styles.mainContainer}>
                    <div>
                        <article>
                            <header className={styles.articleHeader}>
                                <h1 >{data.title}</h1>
                                <p>{data.disc}</p>
                                <div><time>{data.date}</time></div>
                            </header>
                            <div className={styles.htmlContent} dangerouslySetInnerHTML={{ __html: content }}>

                            </div>
                        </article>
                    </div>
                </div>
            </main>
            {/* <h1>{data.title}</h1>
            <p>{data.date.toString()}</p>
            <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
        </div>
    )
}

 async function getPost(params) {
    const markdownWithMetaData = fs.readFileSync(path.join('posts', params + '.md')).toString()
    const { data, content } = matter(markdownWithMetaData)
    const html = marked(content)
    return {
        content: html,
        data
    }

}