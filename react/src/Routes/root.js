import React from "react";
import {Link} from "react-router-dom";


export default function Root() {
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="text-4xl">Hello!</h1>
        <br/>
        <p className="text">It's a Gira. Advanced ToDo for development.</p>
        <Link className="hover:text-blue-500 hover:underline active:text-blue-500 pb-4" to="/signup">For use u should register</Link>
        <Link className="bg-blue-400 text-white text-center border-2 rounded-full" to={`/login`}>Go to Login</Link>
      </div>
    </div>
  );
}