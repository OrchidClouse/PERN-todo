import { Link, useNavigate } from "react-router-dom";
import { getMe, logout } from "api/auth";
import {useEffect} from 'react'

export const Projects = () => {
    // const navigate = useNavigate();
    let navigate = useNavigate();
    console.log(getMe())
    
    return (
        <>
        <button onClick={() => logout()}>LogOut</button>
            <div>
                <div className='w-full'>
                    <h1 className='text-3xl ml-7 font-medium mt-10'>Your projects</h1>
                </div>
                <div className='justify-items-start flex w-full bg-slate-100 mt-10'>



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
                            {/* <div className=" bg-purple-400 rounded-md w-full "> .,</div> */}
                        </div>

                    </div>



                    <div className='border-4 border-pink-400 w-64 h-[200px] rounded-md m-2 bg-white'>
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
                            {/* <div className=" bg-purple-400 rounded-md w-full "> .,</div> */}
                        </div>



                    </div>
                    
                </div>

                <div className={"h-[500px] justify-items-center hidden md:block relative"}>
                    <img src="https://wmpics.space/di-VQBX.png" className={" absolute right-[44%] bottom-[30%]"}></img>
                    <div className={"h-[30px] border-b-2"}>
                        {/* <button onClick={routeChange} className={"pr-2 w-52 absolute bottom-12 text-white left-[43%] h-[40px] bg-blue-500 rounded-md text-center inline-block"}>Create New Project</button> */}
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
                    <p className={"absolute right-[49%] bottom-56 text-black font-bold text-lg"}>Ваши проекты </p>
            </div>
            <button className="bg-blue-600" onClick={() => {navigate('/current-project');}}>fgaudsfysudfs</button>
        </>
    )
}
