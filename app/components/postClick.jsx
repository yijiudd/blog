"use client";
const PostClick = ({ post }) => {
  return (
    <a
      onClick={() => onPostClick(post.title)}
      href={`/posts/${post.title}`}
    >
      {post.head}
    </a>
  );
};
export default PostClick;
const onPostClick = async (title) => {
    //call the backend to add reading time
    console.log('url',window.location.href)
    const updateRes = await fetch(
        `https:/${window.location.hostname}/api/add-read-times?title=${title}`
    );
    const res=await updateRes.json()
    console.log('updateRes',res)
};
