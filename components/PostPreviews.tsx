import Link from 'next/link'

const PostPreviews: React.FC = (props: any) => {
    return (
        <div>
      <p>{props.date}</p>
      <img src={props.image} alt="lorem ipsum"></img>
      <Link href={`/posts/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.subtitle}</p>
    </div>
    )
}

export default PostPreviews