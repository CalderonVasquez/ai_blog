import Link from "next/link"
import matter from 'gray-matter'
import fs from 'fs'
import PostMetadata from '@/components/PostMetadata'

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter(file => file.endsWith('.md'))

  const posts = markdownPosts.map(fileName => {
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const matterResult = matter(fileContent)
    return {
      image: matterResult.data.image,
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: fileName.replace('.md', "")
    }
  })
    return posts
}

const HomePage = () => {
  const postMetadata = getPostMetadata()
  const postPreview = postMetadata.map(post =>
    <div>
      <p>{post.date}</p>
      <img src={post.image} alt="lorem ipsum"></img>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
    </div>
    )

  return (
     <div>
      <h1>{postPreview}</h1>
    </div>
  )
}

export default HomePage


