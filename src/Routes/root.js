import React from "react";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div>
      {/*<div id="sidebar" className="bg-zinc-400">*/}
      {/*  <h1 className="underline">React Router Contacts</h1>*/}
      {/*  <div>*/}
      {/*    <form id="search-form" role="search">*/}
      {/*      <input*/}
      {/*        id="q"*/}
      {/*        aria-label="Search contacts"*/}
      {/*        placeholder="Search"*/}
      {/*        type="search"*/}
      {/*        name="q"*/}
      {/*      />*/}
      {/*      <div*/}
      {/*        id="search-spinner"*/}
      {/*        aria-hidden*/}
      {/*        hidden={true}*/}
      {/*      />*/}
      {/*      <div*/}
      {/*        className="sr-only"*/}
      {/*        aria-live="polite"*/}
      {/*      ></div>*/}
      {/*    </form>*/}
      {/*    <form method="post">*/}
      {/*      <button type="submit">New</button>*/}
      {/*    </form>*/}
      {/*  </div>*/}
      {/*  <nav>*/}
      {/*    <ul>*/}
      {/*      <li>*/}
      {/*        <a href={`/contacts/1`}>Your Name</a>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <a href={`/contacts/2`}>Your Friend</a>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </nav>*/}
      {/*</div>*/}
      {/*<div id="detail"></div>*/}
      <div className="grid h-screen px-4 bg-white place-content-center text-xl">
        <h1 className="text-4xl">Hello!</h1>
        <br/>
        <p className="text">It's a Gira. Advanced ToDo for development.</p>
        <Link className="hover:text-blue-500 hover:underline active:text-blue-500" to="/signup">For use u should register</Link>
        {/*<Link className="bg-blue-400 text-white text-center border-2 rounded-full" to={`/register`}>Go to Register</Link>*/}
        <Link className="bg-blue-400 text-white text-center border-2 rounded-full" to={`/login`}>Go to Login</Link>
      </div>
      <Footer />
    </div>
  );
}