import MediaCard from "../Components/blog"

function BlogPage() {
  return (
    <div className='flex flex-col mt-2 w-[90%] mx-auto md:flex-row gap-2 sm:flex-row sm:items-center sm:justify-between'>
      <MediaCard title="Try me" description="me" image="gall"/>
      <MediaCard title="Try me" description="me" image="gall"/>
    </div>

  )
}

export default BlogPage