import Link from "next/link"
import fs from 'fs'
import Markdown from "markdown-to-jsx";

const getPostContent = (slug: string) => {
    const folder = 'posts/'
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf-8')
    return content
}

const PostPage = (props: any) => {
    const slug = props.params.slug
    const content = getPostContent(slug)

  return (
      <div>
          <Markdown>{content}</Markdown>
    </div>
  )
}

export default PostPage