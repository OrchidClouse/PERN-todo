import {DefaultLogo} from 'Components';
import {Link} from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const StartPageHeader = () => {
  return (
    <header className="bg-white border-b-2">
        
        <div 
          className="mx-auto flex flex-1 h-16 items-center gap-8 px-4 sm:px-6 lg:px-8 w-full my-2 justify-normal"
        >
            <Link className="block text-teal-600 justify-start" to="/">
              
                <span className="sr-only">Главная</span>
                <DefaultLogo width="w-24"/>
            </Link>

            <div className="flex flex-1 items-center md:justify-between">
                <nav aria-label="Site Nav" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" to="/">
                                О нас
                            </Link>
                        </li>

                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" to="/">
                                Карьера
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        <Link
                          className="block rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
                          to="/login"
                        >
                            Войти
                        </Link>

                        <Link
                          className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-500 transition hover:text-blue-500/75 sm:block"
                          to="/register"
                        >
                            Зарегистрироваться
                        </Link>

                    </div>
                    
                    <button
                      className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                    >
                        <span className="sr-only">Меню</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
    
  )
}
