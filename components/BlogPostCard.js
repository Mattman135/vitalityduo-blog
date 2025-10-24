const BlogPostCard = () => {
  return (
    <div className="card bg-base-100 shadow-sm w-full mb-12">
      <div className="card-body items-center text-center">
        <p>Date</p>
        <h2 className="card-title">Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions">
          <button className="btn">Read more</button>
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard
