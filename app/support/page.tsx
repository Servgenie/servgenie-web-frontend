'use client'
import Link from 'next/link';
import React from 'react';

const handleSave = (e: { preventDefault: () => void; }) =>{
  e.preventDefault()
  console.log("save button clicked!")
}


export default function Support() {
  return (
    <form className="max-w-lg mx-auto mt-28 p-8">
      <div className="space-y-12">
        <div>
          <h2 className="text-base/7 font-semibold text-gray-900">Support</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
          We’re here to support you every step of the way. Just share your email and let us know what’s on your mind—whether it’s a question, a suggestion, or something you need help with. Our team will be in touch soon to make sure you’re taken care of!
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="comment" className="block text-sm/6 font-medium text-gray-900">
                Comment
              </label>
              <p className="mt-3 text-sm/6 text-gray-600">Please share your ideas here.</p>
              <div className="mt-2">
                <textarea
                  id="comment"
                  name="comment"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button 
        type="button" 
        className="text-sm/6 font-semibold text-gray-900">
          <Link href="/">Cancel</Link>
        </button>
        <button
          type="submit"
          onClick={handleSave}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
