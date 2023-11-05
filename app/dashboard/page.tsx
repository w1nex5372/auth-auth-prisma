'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

const page = () => {
    const {data: session, status} = useSession();
    console.log(session)
  return (
    <div>hellou
        
        <p>Hi {session?.user?.email}</p>
    </div>
  )
}

export default page