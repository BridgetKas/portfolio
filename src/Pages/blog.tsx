import MediaCard from "../Components/blog"

function BlogPage() {
  return (
    <div className='flex flex-col w-[95%] mx-auto sm:flex-row sm:gap-2.5 sm:flex-wrap mb-[60px] lg:w-[85%]'>
      <MediaCard title="Try me" description="me" image="./js2.jpg" readmore="#"/>
      <MediaCard title="Try me" description="me" image="./begineerJS1.jpg" readmore="#"/>
      <MediaCard title="Promises" description="Coming Soon..." image="./promises.jpg" readmore="#"/>
      <MediaCard title="Hoisting" description="Coming Soon..." image="./hoisting.png" readmore="#"/>

    </div>

  )
}

export default BlogPage