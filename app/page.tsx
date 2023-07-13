import Link from "next/link"
import fs from 'fs'

const getPostMetadata = () => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter(file => file.endsWith('.md'))
  const slugs = markdownPosts.map(file => file.replace('.md', ""))
  return slugs
}

const HomePage = () => {
  const postMetadata = getPostMetadata()
  const postPreview = postMetadata.map(slug =>
    <div>
      <Link href={`/posts/${slug}`}>
        <h1>{slug}</h1>
      </Link>
    </div>
    )

  return (
     <div>
      <h1>{postPreview}</h1>
    </div>
  )
}

export default HomePage
