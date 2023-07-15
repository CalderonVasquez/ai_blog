import getPostMetadata from "@/components/getPostMetadata"
import PostPreviews from '@/components/PostPreviews'

const HomePage = () => {
  const postMetadata = getPostMetadata()
  const postPreview = postMetadata.map(post =>
    <PostPreviews key={post.slug} {...post} />
    )

  return (
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <h1>{postPreview}</h1>
    </div>
  )
}

export default HomePage


