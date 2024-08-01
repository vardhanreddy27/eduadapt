import React from 'react';
import Link from 'next/link';

function Menu() {
  return (
    <div className="m-4 h-full flex justify-between items-center">
      <div>
        <h2 id="title" className="font-bold logo">EduAdapt</h2>
      </div>
      <div className="flex justify-center items-center h-full">
      <Link className="pl-6 pr-6" href="#About">
About</Link>
        <Link className="pl-6 pr-6" href="#features">
Features</Link>
        <a href="#" className="pl-6 pr-6">Tutor Portal</a>
        <Link className="pl-6 pr-6" href="#contact">
         Contact
        </Link>
      </div>
      <div className="">
      <Link href="/Signup">
  <button  className="text-sm font-bold py-2 px-4 rounded z-100">Sign Up</button>
  </Link>
  <Link href="/Login">
  <button className="text-sm bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 ml-2 px-4 rounded">Login</button>
    </Link>  </div>
    </div>
  );
}

export default Menu;
