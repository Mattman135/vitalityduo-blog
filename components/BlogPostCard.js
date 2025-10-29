import Link from "next/link"

const BlogPostCard = ({ date, title, explanation, blogpostname }) => {
  return (
    <div className="card bg-base-100 shadow-sm w-full mb-12 min-w-2xs">
      <div className="card-body items-center text-center">
        <p>{date}</p>
        <h2 className="card-title">{title}</h2>
        <p>{explanation}</p>
        <div className="card-actions">
          <Link href={`/blogposts/${blogpostname}`} className="btn">
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard
