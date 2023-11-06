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
    <DisplayedScreen></DisplayedScreen>
  
      </div>
    </main>
  ); 
}



