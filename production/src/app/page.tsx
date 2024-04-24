import { allPosts, Post } from "contentlayer/generated"

export default function Home() {
    const posts: Post[] = allPosts

    console.log(posts)

    return (
        <>
            {posts.map((item, index) => (
                <div key={index}>{item.title}</div>
            ))}
        </>
    )
}
