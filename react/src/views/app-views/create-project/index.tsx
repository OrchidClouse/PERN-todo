import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Image, Form, Button,Input} from "antd";
import { CreateProjectDTO } from 'api/project.dto';
import { getMe } from 'api/auth';
import { createProject } from 'api/project';

export const CreateProject = () => {

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    id: 0,
    email: '',
    name: '',
  })
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  useEffect(() => {
    getMe()?.then((originalUserInfo) => {
      const {id, email, name } = originalUserInfo;
      setUserInfo({id, email, name });
      setIsUserLoaded(true);
      setFormValues(prevState => ({
        ...prevState,
        user: {id, email, name },
      }));
    })
  }, [])

  const [formValues, setFormValues] = useState<CreateProjectDTO>({
    name: '',
    description: '',
    status: '',
    user: userInfo,
    // task: 'fdawfa'
  });

  const createNewProject = () => {
      createProject(formValues)
        .then(project => {
          console.log('Project created:', project);
          navigate('/projects');
        })
        .catch(error => {
          console.error('Error creating project:', error);
        });
  }

  return(
    <>
      <div className="flex relative ">
        <div className='absolute hidden 2xl:block right-14 top-20'>
        <img
          src='https://wmpics.space/di-KSU8.png'
        />
        </div>
        <div className='flex absolute left-1/3 '>
          <div className='mt-40 relative'>
            <div className='pt-20 mb-3 w-72'>
              <h1 className='text-3xl text-center mb-6'>Create Project</h1>
              <label htmlFor="name" className="block font-medium leading-6 text-xs text-gray-900 text-left ">
                Name Project*
              </label>
              <Input 
                size = "large"
                placeholder="Name your project"
                value={formValues.name}
                onChange={(e: any) => {
                  setFormValues(prevState => ({
                    ...prevState,
                    name: e.target.value
                  }));
                }}
              />
              
            </div>
            <Button
              type='primary'
              onClick={createNewProject}
              className='bg-blue-600 w-72'
              disabled={!isUserLoaded}
            >
              Create Project
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}