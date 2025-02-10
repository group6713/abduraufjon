import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
    <div className='pt-[100px]'>
   <div className=" flex justify-between px-[90px]  py-[40px] bg-[#F9F9F9]">
    <div className='flex flex-col gap-3 items-start'>
      <h1 className='text-[20px] font-bold'>2rism</h1>
      <p className='text-[14px] w-[254px]'>We always make our customers happy by providing as many choises as possible</p>
      <button>Click me</button>
    </div>
   <div className='grid grid-cols-3 gap-[70px]'>
   <div className='flex flex-col gap-3'>
      <h1 className='text-[18px] font-semibold'>About</h1>
      <ul className='flex flex-col gap-2 text-[#979797] text-[14px]'>
        <li>About Us</li>
        <li>Features</li>
        <li>News</li>
        <li>Menu</li>
      </ul>
    </div>
    <div className='flex flex-col gap-3'>
      <h1 className='text-[18px] font-semibold'>Company</h1>
      <ul className='flex flex-col gap-2 text-[#979797] text-[14px]'>
        <li>About Us</li>
        <li>Features</li>
        <li>News</li>
        <li>Menu</li>
      </ul>
    </div>
    <div className='flex flex-col gap-3'>
      <h1 className='text-[18px] font-semibold'>Support</h1>
      <ul className='flex flex-col gap-2 text-[#979797] text-[14px]'>
        <li>About Us</li>
        <li>Features</li>
        <li>News</li>
        <li>Menu</li>
      </ul>
    </div>
   </div>
    <div>
      <h1 className='text-[18px] w-[288px]'>Subscribe on our destination review newsletters</h1>
    </div>
   </div>
   </div>
    </>
  );
};

export default Footer;
