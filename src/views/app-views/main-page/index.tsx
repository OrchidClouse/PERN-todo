import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {getMe} from "api/auth";

export const Root = () => {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    getMe()?.then((originalUserInfo) => {
      if(originalUserInfo) setIsAuth(true)
    })
  }, [])

  return (
    <>
      <div className="flex min-h-full flex-col w-full items-center m-auto px-6 py-12 lg:px-8 h-max">
        <h1 className="text-4xl">Hello!</h1>
        <br/>

        <p className="text">It's a Gira. Advanced ToDo for development.</p>
        <div className="pb-4">
          <Link className="hover:text-blue-500 hover:underline active:text-blue-500 w-max" to="/register">For use u should register</Link>
        </div>
        <Link className="bg-blue-600 w-48 text-white text-center border-2 rounded-full" to="/login">Go to Login</Link>
        {isAuth && <Link className="bg-blue-600 w-48 text-white text-center border-2 rounded-full" to="/projects">Go projects</Link>}
      </div>
    </>
  );
}