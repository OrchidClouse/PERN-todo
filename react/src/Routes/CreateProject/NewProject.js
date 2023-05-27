import React from 'react';
import {Link} from "react-router-dom";


function CreateProject(){
return(
<>
<div className="bg-[url('https://wmpics.space/di-AFZW.png')] w-screen h-screen bg-no-repeat">
  <div className='flex mx-auto w-0 ml-96'>
        <div className='mt-40 h-96 relative'>
            <div className='pt-20 w-72'>
              <h1 className='text-3xl text-center mb-6'>Create Project</h1>
              <label htmlFor="name" className="block font-medium leading-6 text-xs text-gray-900 text-left ">
                Name Project*
              </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="border-2 rounded-md bg-slate-100 w-full pl-1.5"
                  placeholder="Name your project"/>
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
</div>
</>
)
} 
export default CreateProject