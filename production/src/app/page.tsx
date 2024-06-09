import { allPosts, Post } from "contentlayer/generated"

export default function Home() {
    const posts: Post[] = allPosts

    console.log(posts)

    return <div dangerouslySetInnerHTML={{ __html: posts[0].body.html }} />
}
