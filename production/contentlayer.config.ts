import { defineDocumentType, makeSource } from "contentlayer/source-files"
import highlight from "rehype-highlight"
import remarkGfm from "remark-gfm"

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.mdx`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (post) => `/posts/${post._raw.flattenedPath}`,
        },
    },
}))

export default makeSource({
    contentDirPath: "posts",
    documentTypes: [Post],
    markdown: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [highlight as any],
    },
})
