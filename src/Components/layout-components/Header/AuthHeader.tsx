import {DefaultLogo} from 'Components';
import {Link} from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const AuthHeader = () => {
  return (
    <header className="bg-white border-b-2">
        
        <div 
          className="mx-auto flex flex-1 h-16 items-center gap-8 px-4 sm:px-6 lg:px-8 w-full my-2 justify-normal"
        >
            <Link className="block text-teal-600 justify-start" to="/">
              
                <span className="sr-only">Home</span>
                <DefaultLogo width="w-24"/>
            </Link>

            <div className="flex flex-1 items-center md:justify-between">

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        <Link
                          className="block rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
                          to="/login"
                        >
                            Login
                        </Link>

                        <Link
                          className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-500 transition hover:text-blue-500/75 sm:block"
                          to="/register"
                        >
                            Register
                        </Link>

                    </div>
                    
                </div>
            </div>
        </div>
    </header>
    
  )
}
