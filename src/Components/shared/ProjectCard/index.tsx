import React from 'react'
import { Link } from 'react-router-dom'


export const ProjectCard = () => {
  return (
    <div className='border-4 border-purple-400 w-64 h-[200px] rounded-md m-2 bg-white'>
      <Link className='' to="">
          <p className='pl-16 pt-5'>Project name</p>
          <p className=' ml-[70px] text-xs pl-4'>Software</p>
      </Link>
      <div className=''>
          <div className='text-sm text-slate-400'>
              <p className='pl-4 pt-4'>QUICK LINKS:</p>
          </div>
          <div>
              <Link to="/" className='hover:bg-sky-100 rounded-md pl-4 text-sm'>• My current task</Link>
          </div>
          <div>
              <Link to="/" className='hover:bg-sky-100 rounded-md pl-4 text-sm'>• Completed task</Link>
          </div>
      </div>

    </div>
  )
}
