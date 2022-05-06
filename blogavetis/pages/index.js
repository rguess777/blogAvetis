import Link from "next/link"
import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { makeClient } from "../services/api"
import styles from "../styles/Home.module.css"

const HomePage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    makeClient()
      .get("/posts")
      .then((res) => {
        const { data } = res
        setPosts(data)
      })
  }, [])

  return (
    <div>
      <div className={styles.container}>
        <Header />
      </div>

      {Object.entries(posts).map(([itemId, post]) => (
        <div
          key={itemId}
          className="container w-full md:max-w-3xl mx-auto pt-20"
        >
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
      ))}
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
