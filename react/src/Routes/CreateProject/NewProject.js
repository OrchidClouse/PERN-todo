import React from 'react';
import {Link} from "react-router-dom";


function CreateProject(){
return(
  <div className='flex ml-auto mr-auto w-0 justify-center from-cyan-500 to-blue-500 '>
        <div className='mt-40 h-96 relative '>
            <div className="pt-20 w-72 ">
              <h1 className='text-xl text-center'>Create Project</h1>
              <label htmlFor="name" className="block font-medium leading-6 text-xs text-gray-900 text-left">
                Name Project*
              </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="border-2 rounded-md bg-slate-100 w-full"
                  placeholder="Your name"/>
              </div>
              <div className='absolute text-end bottom-0 right-0'>
                <button
                type="submit"
                className="bg-blue-600 rounded-md text-white w-32 h-10"
                >
                Create Project
              </button>
        </div>
    </div>
</div>
)
} 
export default CreateProject