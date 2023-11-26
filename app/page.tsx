'use client'

import { Navlinks } from '@/components/navlinks';
import React, { useState, useEffect } from 'react'
import Headas from '@/components/Headas';
import DisplayedScreen from '@/components/DisplayedScreen';
import CustomImage from '@/components/CustomImage';
CustomImage
export default function Home() {
 
  return (
    <main className="relative flex m-auto ">
      <div className="sticky top-0  min-h-screen left-0"> 
        <Navlinks></Navlinks>
      </div>
      <div className="flex-auto text-right"> 
    <Headas></Headas>


<div className="flex max-w-full">
  <div className="displayed-screen flex-shrink w-4/5">
    <DisplayedScreen></DisplayedScreen>
  </div>

  <div className="sidescreen flex-shrink text-black hidden md:flex flex-col h-full sd:flex w-1/5">
    <img src="/ad.png" alt=""  className=''/>
    <img src="/ad2.png" alt=""  className=''/>
  </div>
</div>

   
  
      </div>
    </main>
  ); 
}



