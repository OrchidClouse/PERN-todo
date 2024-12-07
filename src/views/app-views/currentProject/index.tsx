import { ProjectHeader } from 'Components/layout-components/Header/ProjectHeader';
import { getProjectById } from 'api/project';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Project } from 'types/projectsTypes';
import { getTasksByProjectId } from 'api/project';
import { Task } from 'types/taskTypes';

export const CurrentProject = () => {
  const [currentProject, setCurrentProject] = useState<Project>()
  const [tasks, setTasks] = useState<Task[]>()
  const { id } = useParams<{ id: string | undefined }>();

  useEffect(() => {
    const fetchProject = async () => {
      if (id !== undefined) {
        const numericId = Number(id);
        const project = await getProjectById(numericId);
        const tasks = await getTasksByProjectId(numericId);
        setTasks(tasks);
        setCurrentProject(project);
      } else {
        console.error('Project ID is undefined');
      }
    }

    fetchProject();
  }, [id]);

  return (
    <div className="flex m-0 p-0 ">
      <ProjectHeader />
      <div className=''>
        <div className='pb-10'>{currentProject?.name}</div>
        <ul className=''>
          {tasks?.map(task => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
      <div className='table'></div>
    </div>
  );
}