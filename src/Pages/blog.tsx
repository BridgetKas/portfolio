import MediaCard from "../Components/blog"

function BlogPage() {
  return (
    <div className='flex flex-col mt-2 w-[90%] mx-auto md:flex-row gap-2 sm:flex-row sm:flex-wrap'>
      <MediaCard title="Try me" description="me" image="./demisfy.png"/>
      <MediaCard title="Try me" description="me" image="gall"/>
      <MediaCard title="Hoisting" description="Coming Soon..." image="./hoisting.png"/>
      <MediaCard title="Promises" description="Coming Soon..." image="./promises.jpg"/>

    </div>

  )
}

export default BlogPage