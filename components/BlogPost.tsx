import React from 'react'

function BlogPost() {
  return (
    <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0 max-w-7xl mx-auto'>
      <div className='px-10 space-y-5'>
        <h1 className='text-6xl max-w-xl font-serif'>
          <span className='underline decoration-black decoration-4 '>
            Medium
          </span>{' '}
          is a place to write, read, and connect
        </h1>
        <h2>
          It's easy and free to postyour thinking on a ny topix and connect with
          millions of readers
        </h2>
      </div>
      <img
        className='px-10 hidden md:inline-flex h-32 lg:h-72'
        src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Medium_2_glyph_svg-512.png'
        alt=''
      />
    </div>
  )
}

export default BlogPost
