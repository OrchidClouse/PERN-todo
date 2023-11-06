import React, { useState } from 'react';

export const CurrentProject = () => {

  return (
    <div className="flex m-0 p-0 ">
      <div className=''>
        <div className='pb-10'>Название проекта?</div>
        <ul className=''>
          <li className='ml-2'>Задачи</li>
          <select className='ml-10' name="" id=""></select>
          <li className=''>мейби диограма</li>
          <li className=''>зуйня какая то</li>
        </ul>

        <select name="choice">
          <option value="first">First Value</option>
          <option value="second" selected>Second Value</option>
          <option value="third">Third Value</option>
        </select>
      </div>
      <div className='table'></div>
    </div>
  );
}