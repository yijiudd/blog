// // import fs from "fs";
// // import path from "path";
"use client";
// import matter from "gray-matter";
import Link from "next/link";
import styles from "./page.module.css";
// import { sql } from "@vercel/postgres";
import PostClick from "../components/postClick";
import { useEffect, useState } from "react";
const PostPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://${window.location.hostname}/api/create-posts-table`)
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.result.rows);
        console.log("posts", res.result.rows);
      });
  }, []);
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
            <article className={styles.article} key={post.title}>
              <PostClick post={post} />
              <p>{post.disc}</p>
              <div className={styles.disc}>
                <text>{post.readtimes} readings</text>
                <time>{new Date(post.date).toLocaleDateString("en-US")}</time>
              </div>
            </article>
          ))}
          {/* {posts.map((post) => ( */}
          {/* <article className={styles.article} key={post.slug}> */}
          {/* <a onClick={()=>console.log('slug',post.slug)}href={`/posts/${post.slug}`}>{post.data.title}</a> */}
          {/* <PostClick post={post} /> */}
          {/* <p>{post.data.disc}</p> */}
          {/* <div className={styles.disc}> */}
          {/* <text>{post.readingTime} readings</text> */}
          {/* <time>{post.data.date}</time> */}
          {/* </div> */}
          {/* </article> */}
          {/* ))} */}
        </div>
      </main>
    </div>
  );
};
export default PostPage;
// const PostPage = () => {
//   // const { rows } = await sql`SELECT * from Posts;`;
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     fetch(`http://localhost:3003/api/create-posts-table`)
//       .then((res) => res.json())
//       .then((res) => setPosts(res.result.rows));
//   }, []);
//   // const respose = await fetch(`http://localhost:3002/api/create-posts-table`);
//   // const res = await respose.json();
//   // console.log("fetch res", res.result.rows);
//   // const posts = await getPostsData();
//   // posts.forEach((post) => {
//   //   post.readingTime = getReadingTimesBySlug(post.slug, res.result.rows);
//   // });
//   // console.log("posts", posts);
//   return (
//     <div>
//       <header className={styles.header}>
//         <div className={styles.container}>
//           <nav className={styles.nav}>
//             <Link href="/">Home</Link>
//             <Link href="/posts">Posts</Link>
//           </nav>
//         </div>
//       </header>
//       <main className={styles.main}>
//         <div className={styles.mainContainer}>
//           {/* <article className={styles.article}>
//                         <a>At the Sign of the Prancing Pony</a>
//                         <p>The Hobbits reach the The Prancing Pony inn at Bree, where Frodo uses a false name, Underhill.</p>
//                         <div>
//                             <time>2 years ago</time>
//                         </div>
//                     </article>
//                     <article className={styles.article}>
//                         <a>At the Sign of the Prancing Pony</a>
//                         <p>The Hobbits reach the The Prancing Pony inn at Bree, where Frodo uses a false name, Underhill.</p>
//                         <div>
//                             <time>2 years ago</time>
//                         </div>
//                     </article> */}
//           {/* {posts.map((post) => ( */}
//           {/* <article className={styles.article} key={post.slug}> */}
//           {/* <a onClick={()=>console.log('slug',post.slug)}href={`/posts/${post.slug}`}>{post.data.title}</a> */}
//           {/* <PostClick post={post} /> */}
//           {/* <p>{post.data.disc}</p> */}
//           {/* <div className={styles.disc}> */}
//           {/* <text>{post.readingTime} readings</text> */}
//           {/* <time>{post.data.date}</time> */}
//           {/* </div> */}
//           {/* </article> */}
//           {/* ))} */}
//         </div>
//       </main>
//     </div>
//   );
// };

// function getReadingTimesBySlug(slug, rows) {
//   let readingTime = 0;
//   rows.forEach(({ title, readtimes }) => {
//     if (title === slug) {
//       readingTime = readtimes;
//     }
//   });
//   return readingTime;
// }
// async function getPostsData() {
//   const files = fs.readdirSync("posts");
//   const posts = files.map((filename) => {
//     const markdownWithMetaData = fs
//       .readFileSync(path.join("posts", filename))
//       .toString();
//     const { data } = matter(markdownWithMetaData);
//     const slug = filename.replace(".md", "");
//     return {
//       slug,
//       data,
//     };
//   });
//   return posts;
// }
