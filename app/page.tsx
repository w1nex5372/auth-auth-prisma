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



  <div className="displayed-screen ">
    <DisplayedScreen></DisplayedScreen>


 
</div>

   
  
      </div>
    </main>
  ); 
}



