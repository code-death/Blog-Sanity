import type { NextPage } from 'next'
import Head from 'next/head'
import BlogPost from '../components/BlogPost'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typing'
import Posts from '../components/Posts'

interface Props {
  posts: Post[]
}

export default function Home({ posts }: Props) {
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Medium Blog</title>
      </Head>
      <Header />
      <BlogPost />
      <Posts posts={posts} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == 'post']{
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
