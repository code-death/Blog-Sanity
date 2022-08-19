import type { NextPage } from 'next'
import Head from 'next/head'
import BlogPost from '../components/BlogPost'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Medium Blog</title>
      </Head>
      <Header />
      <BlogPost />
    </div>
  )
}

export default Home
