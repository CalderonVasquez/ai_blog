import Link from "next/link"
import fs from 'fs'
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug: string) => {
    const folder = 'posts/'
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf-8')
    const matterResult = matter(content)
    return matterResult
}

const PostPage = (props: any) => {
    const slug = props.params.slug
    const post = getPostContent(slug)

  return (
    <div>
      <p>{post.data.date}</p>
      <h1>{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </div>
  )
}

export default PostPage