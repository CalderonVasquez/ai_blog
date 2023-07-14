import getPostMetadata from "@/components/getPostMetadata"
import PostPreviews from '@/components/PostPreviews'

const HomePage = () => {
  const postMetadata = getPostMetadata()
  const postPreview = postMetadata.map(post =>
    <PostPreviews key={post.slug} {...post} />
    )

  return (
     <div>
      <h1>{postPreview}</h1>
    </div>
  )
}

export default HomePage


