import Link from "next/link"
import getPostMetadata from "@/components/getPostMetadata"

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


