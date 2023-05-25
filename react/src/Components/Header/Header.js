import React from 'react'
import DefaulLogo from "../GiraLogo/Logos";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b-2">
        <div
          className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 my-2"
        >
            <Link className="block text-teal-600" to="/">
                <span className="sr-only">Home</span>
                <DefaulLogo width="w-24" />
            </Link>

            <div className="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Site Nav" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" to="/">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" to="/">
                                Careers
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        <Link
                          className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                          to="/login"
                        >
                            Login
                        </Link>

                        <Link
                          className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:text-blue-600/75 sm:block"
                          to="/signup"
                        >
                            Register
                        </Link>
                    </div>

                    <button
                      className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                    >
                        <span className="sr-only">Toggle menu</span>
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

export default Header
