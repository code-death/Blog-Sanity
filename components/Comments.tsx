import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Post } from '../typing'
import { useState } from 'react'
interface Props {
  post: Post
}

type FormValues = {
  _id: string
  name: string
  email: string
  comment: string
}
function Comments({ post }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = async data => {
    await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data)
        setSubmitted(true)
      })
      .catch(err => {
        console.log(err)
        setSubmitted(false)
      })
  }

  return (
    <>
      {submitted ? (
        <div className='max-w-3xl mx-auto flex flex-col p-10 my-10 bg-yellow-500 text-white'>
          <h3 className='text-3xl font-bold'>Thanks for submiting the form</h3>
          <h3>Once it has been appproved, it will appear below</h3>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col p-5 mt-5 mb-10 max-w-2xl mx-auto'
          action=''
        >
          <h3 className='text-sm text-yellow-500'>Enjoyed the article ?</h3>
          <h4 className='text-3xl font-bold'>Leave a comment below!</h4>
          <hr className='py-3 mt-2' />
          <input
            {...register('_id')}
            type='hidden'
            name='_id'
            value={post._id}
          />
          <label className='block mb-5'>
            <span className='tetx-gray-700'>Name</span>
            <input
              {...register('name', { required: true })}
              className='shadow border rounded py-2 px-3 form-input mt-1 block w-full focus:outline-none  focus-visible:ring-2 ring-yellow-500'
              type='text'
              placeholder='Anonymous'
            />
          </label>
          <label className='block mb-5'>
            <span className='tetx-gray-700'>Email</span>
            <input
              {...register('email', { required: true })}
              className='shadow border rounded py-2 px-3 form-input mt-1 block w-full focus:outline-none  focus-visible:ring-2 ring-yellow-500'
              type='email'
              placeholder='abcd@anymail.com'
            />
          </label>
          <label className='block mb-5'>
            <span className='tetx-gray-700'>Comment</span>
            <textarea
              {...register('comment', { required: true })}
              className='shadow border rounded py-2 px-3 form-textaea mt-1 block w-full focus:outline-none  focus-visible:ring-2 ring-yellow-500'
              rows={8}
              placeholder='Leave your commment here!'
            />
          </label>

          <div className='flex flex-col p-5'>
            {errors.name && (
              <span className='text-red-500'>- The Name Field is required</span>
            )}
            {errors.email && (
              <span className='text-red-500'>
                - The Email Field is required
              </span>
            )}
            {errors.comment && (
              <span className='text-red-500'>
                - The Comment Field is required
              </span>
            )}
          </div>
          <input
            type='submit'
            className='shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer'
          />
        </form>
      )}
    </>
  )
}

export default Comments
