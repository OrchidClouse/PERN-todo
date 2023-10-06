import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Image, Form, Button} from "antd";

export const CreateProject = () => {
  let navigate = useNavigate();
  const routeChange = () =>{
    navigate('/yourProject');
  }
  return(
    <>
      <div className="flex relative ">
        <div className='absolute hidden 2xl:block right-14 top-20'>
        <img src='https://wmpics.space/di-KSU8.png'/>
        </div>
        <div className='flex absolute left-1/3 '>
          <div className='mt-40 h-96 relative'>
            <div className='pt-20 mb-44 w-72'>
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
                onClick={routeChange}
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