import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Image from 'next/image';

function DownloadBadge() {
  return (
    <div  id="contact" className="flex flex-row mt-5 bg-black text-white">
 <div className="w-3/5 p-4">
      <div className="bg-slate-200 h-30 rounded-2xl inline-flex">
      <div className='w-2/3 '><h1 className='font-bold text-black p-4'>EDUADAPT</h1>   
     <p className='text-black pl-6 pr-4 pb-4'>
Download EDUADAPT for Access world-class online courses from prestigious institutions and industry leaders. Join the largest education community and elevate your skills today.
</p>
      </div>
      <div className='w-1/3 p-2'> 
      <Image src="/play.png" height={100} width={430} alt="Phone" className="object-contain  pr-6 pb-2 pt-3" />
      <Image src="/app.png" height={112} width={435} alt="Phone" className="object-contain  pr-6 pt-1" />
   
      </div></div>
    </div>
    <div className="w-1/5 p-4">
      <div className="  mb-4">Quick Links</div>
      <div className="">About</div>
      <div className="">Features</div>
      <div className="">Contact</div>
    </div>
    <div className="w-1/5 p-4">
      <div className="mb-4">Follow Us</div>
      <div><FaInstagram   className="inline-block"/><FaLinkedin  className="inline-block ml-5"/><FaFacebookSquare  className="inline-block ml-5"/>

</div>
    </div>
 
  </div>
  )
}

export default DownloadBadge
