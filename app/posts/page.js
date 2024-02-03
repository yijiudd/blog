import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "./page.module.css";
import { sql } from "@vercel/postgres";
import PostClick from "../components/postClick";
export default async function PostPage() {
  // const { rows } = await sql`SELECT * from Posts;`;
  const respose = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/create-posts-table`);
  const res = await respose.json();
  console.log("fetch res", res.result.rows);
  const posts = await getPostsData();
  posts.forEach((post) => {
    post.readingTime = getReadingTimesBySlug(post.slug, res.result.rows);
  });
  console.log("posts", posts);
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          {/* <article className={styles.article}>
                        <a>At the Sign of the Prancing Pony</a>
                        <p>The Hobbits reach the The Prancing Pony inn at Bree, where Frodo uses a false name, Underhill.</p>
                        <div>
                            <time>2 years ago</time>
                        </div>
                    </article>
                    <article className={styles.article}>
                        <a>At the Sign of the Prancing Pony</a>
                        <p>The Hobbits reach the The Prancing Pony inn at Bree, where Frodo uses a false name, Underhill.</p>
                        <div>
                            <time>2 years ago</time>
                        </div>
                    </article> */}
          {posts.map((post) => (
            <article className={styles.article} key={post.slug}>
              {/* <a onClick={()=>console.log('slug',post.slug)}href={`/posts/${post.slug}`}>{post.data.title}</a> */}
              <PostClick post={post} />
              <p>{post.data.disc}</p>
              <div className={styles.disc}>
                <text>{post.readingTime} readings</text>
                <time>{post.data.date}</time>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

function getReadingTimesBySlug(slug, rows) {
  let readingTime = 0;
  rows.forEach(({ title, readtimes }) => {
    if (title === slug) {
      readingTime = readtimes;
    }
  });
  return readingTime;
}
async function getPostsData() {
  const files = fs.readdirSync("posts");
  const posts = files.map((filename) => {
    const markdownWithMetaData = fs
      .readFileSync(path.join("posts", filename))
      .toString();
    const { data } = matter(markdownWithMetaData);
    const slug = filename.replace(".md", "");
    return {
      slug,
      data,
    };
  });
  return posts;
}
