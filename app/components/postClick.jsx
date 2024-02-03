"use client";
const PostClick = ({ post }) => {
  return (
    <a
      onClick={() => onPostClick(post.slug)}
      href={`/posts/${post.slug}`}
    >
      {post.data.title}
    </a>
  );
};
export default PostClick;
const onPostClick = async (title) => {
    //call the backend to add reading time
    const updateRes = await fetch(
        `https://blog-git-main-yijiudd.vercel.app/api/add-read-times?title=${title}`
    );
    const res=await updateRes.json()
    console.log('updateRes',res)
};
