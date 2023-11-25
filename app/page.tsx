'use client'

import { Navlinks } from '@/components/navlinks';
import React, { useState, useEffect } from 'react'
import Headas from '@/components/Headas';
import DisplayedScreen from '@/components/DisplayedScreen';
import CustomImage from '@/components/CustomImage';
CustomImage
export default function Home() {
 
  return (
    <main className="relative overflow-auto flex m-auto  h-screen">
      <div className="sticky top-0  left-0"> 
        <Navlinks></Navlinks>
      </div>
      <div className="flex-auto text-right"> 
    <Headas></Headas>
  <div className="flex h-full">
  <div className="displayed-screen" style={{ flex: '80%' }}>
    <DisplayedScreen></DisplayedScreen>
  </div>
  <div className="sidescreen  text-black  hidden md:flex sd:flex " style={{ flex: '20%' }}>
    he
  </div>
</div>

   
  
      </div>
    </main>
  ); 
}



