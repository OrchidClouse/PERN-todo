import React from 'react';

function Footer() {
  return (
    <footer className="bg-neutral-200 text-center text-white dark:bg-neutral-600 mt-10 absolute bottom-0 w-full h-10">

      <div
        className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:{" "}
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >Gira Project</a
        >
      </div>
    </footer>
  )
}

export default Footer;