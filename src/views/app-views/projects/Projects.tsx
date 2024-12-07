import { Link, useNavigate } from "react-router-dom";
import { getMe, logout } from "api/auth";
import { useEffect, useState } from 'react'
import { User } from "types/usersTypes";
import { getProjectsByUserId } from "api/project";
import { Project } from "types/projectsTypes";
import { getTasksByProjectId } from "api/project";
import { createTask } from "api/project";
import { Task } from "types/taskTypes";
import { useParams } from 'react-router-dom';
import { getProjectById } from 'api/project';
import { Button } from "antd";

export const Projects = () => {
    const [user, setUser] = useState<User>()
    const [projects, setProjects] = useState<Project[]>()
    // useEffect(() => {
    //     getMe().then((res) => {
    //         setUser(res)
    //     })
    // }, [])
    
    // useEffect(() => {
    //     async function createTaskFunc() {
    //         const newTask = await createTask(18, { name: 'fsd', description: 'das' });
    //         console.log(newTask)
    //     }

    //     createTaskFunc()
    // }, [])



    const [currentProject, setCurrentProject] = useState<Project>()
    const [tasks, setTasks] = useState<Task[]>()
    const firstProjectId = projects?.[0]?.id;
    const [id,setId] = useState(0)
    
    useEffect(() => {
        const fetchProject = async () => {
            if (firstProjectId !== undefined) {
                const numericId = Number(firstProjectId);
                const project = await getProjectById(numericId);
                const tasks = await getTasksByProjectId(numericId);
                setTasks(tasks);
                setCurrentProject(project);
            } else {
                console.error('Project ID is undefined');
            }
        }
        
        fetchProject();
    }, [firstProjectId]);
    // console.log(currentProject)
    console.log(tasks)

    useEffect(() => {
        if (typeof (user?.id) === 'number') {
            getProjectsByUserId(user?.id).then((res) => {
                setProjects(res)
                // console.log(projects)

            })
        }
    }, [user])
    let navigate = useNavigate();

const lol =(project:any)=>{
setId(project?.id)
return navigate(`/current-project/${project?.id}`)
}

    return (
        <>
            <div className="m-6">
                <div className='w-full'>
                    <h1 className='text-3xl font-medium'>Ваши проекты</h1>
                </div>
                <div className='flex gap-3'>
                    {projects?.map(project => (
                        <div onClick={() => navigate(`/current-project/${project?.id}`)} key={project?.id} 
                            className='border-4 gradient-border mt-2 rounded-[12p] w-64 h-[200px] bg-white'
                        >
                            <div>
                            <Link className='hover:bg-sky-100 text-center' to="">
                                <p className='mt-4'>{project?.name}</p>
                                <p className=' text-xs'>{project?.description ? project?.description : 'Описание проекта отсутствует'}</p>
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
                        </div>
                    ))}

                </div>

                <div className={"h-[500px] justify-items-center hidden md:block relative"}>
                    {/* <img src="https://wmpics.space/di-VQBX.png" className={" absolute right-[44%] bottom-[30%]"}></img> */}
                    <div className={"h-[30px] border-b-2"}>
                        <Button onClick={() => { navigate('/create-project') }} 
                            className={"pr-2 w-52 absolute bottom-12 text-white left-[43%] h-[40px] bg-blue-500 rounded-md text-center inline-block"}
                        >
                            Создать новый проект
                        </Button>
                    </div>
                    <div>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    )
}
