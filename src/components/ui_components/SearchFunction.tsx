import React from 'react'
import { Search } from 'lucide-react';

function SearchFunction() {
  return (
    <div>
        <div className='justify-start mt-16 max-w-md mb-8'>
            <h1 className='text-4xl font-bold'> Programs and Schools </h1>
        </div>
        <div className='flex justify-between items-center px-10 mx-auto py-8 max-w-full my-4'>
            <input type="text" placeholder="Search Programs and Schools" className="input input-bordered w-full mr-6" />
            <button className="btn btn-primary text-base-100 btn-wide"> Search <Search /> </button>
        </div>
    </div>
  )
}

export default SearchFunction