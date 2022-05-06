import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import makeClient from "../../services/api.js"

const PostPage = () => {
  const router = useRouter()

  const { pid } = router.query
  const [post, setPost] = useState(null)

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    makeClient()
      .get("/posts/" + pid)
      .then((res) => {
        const { data } = res
        setPost(data)
      })
  }, [pid, router])

  if (!post) {
    return <div>Not found !</div>
  }

  return (
    <>
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <div className="font-sans">
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              <Link href={"/post/" + post.id}>
                <a> {post.title} </a>
              </Link>
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-600">
              {post.author.email} - {post.date}
            </p>
          </div>

          <p className="py-6">{post.content}</p>
        </div>
      </div>
      {post.comments.map((comment) => (
        <div className="flex flex-col w-1/2 rounded p-2">
          <Link href={"/profile/" + comment.user.userId}>
            <a className="text-2xl text-bold hover:underline">
              {comment.user.email}
            </a>
          </Link>
          {comment.created_at}

          <div>{comment.content}</div>
          <div className="flex justify-end text-gray-600 text-sm italic"></div>
        </div>
      ))}
    </>
  )
}

export default PostPage
