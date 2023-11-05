'use client'
import Link from 'next/link'; // Import Link from 'next/link'
import CustomButton from '@/components/CustomBtn';
import { Navlinks } from '@/components/navlinks';
import MainScreen from '@/components/mainScreen';
import React, { useState, useEffect } from 'react'


export default function Home() {
 
  return (
    <main className="relative overflow-auto flex m-auto  h-screen">
      <div className="sticky top-0  left-0"> 
        <Navlinks></Navlinks>
      </div>
      <div className="flex-auto text-right"> 
      <MainScreen>
      </MainScreen>
      </div>
    </main>
  );
}



