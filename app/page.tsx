'use client'
import CustomButton from '@/components/CustomBtn';
import { Navlinks } from '@/components/navlinks';
import React, { useState, useEffect } from 'react'
import Headas from '@/components/Headas';
import DisplayedScreen from '@/components/DisplayedScreen';

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
  <div className="sidescreen" style={{ flex: '20%' }}>
    123
  </div>
</div>

   
  
      </div>
    </main>
  ); 
}



