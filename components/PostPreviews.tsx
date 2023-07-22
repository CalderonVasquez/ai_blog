import Link from 'next/link'

const PostPreviews: React.FC = (props: any) => {
    return (
        <div className="border border-slate-300 p-4 rounded-md shadow-sm
          bg-white">
          <p className="font-bold text-xs text-slate-400">{props.date}</p>
          <img src={props.image} alt="lorem ipsum"></img>
          <Link href={`/posts/${props.slug}`}>
            <h2 className=" font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600 mb-4 hover:underline">{props.title}</h2>
          </Link>
          <p className="text-slate-700">{props.subtitle}</p>
      </div>
    )
}

export default PostPreviews