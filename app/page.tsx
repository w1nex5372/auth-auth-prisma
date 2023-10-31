'use client'
import Link from 'next/link'; // Import Link from 'next/link'
import CustomButton from '@/components/CustomBtn';



export default function Home() {

  const handleLoginButton = () => {
    console.log("testas")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-semibold mb-6">Welcome to Your App</h1>
      <div className="space-y-4">
        <Link href="/login" >
          <CustomButton primary onClick={handleLoginButton}>
            Log In
          </CustomButton>
            
         
        </Link>
        <Link href="/register">
          
            <CustomButton primary onClick={handleLoginButton}>
            Register
          </CustomButton>
          
        </Link>
      </div>
    </div>
    </main>
  )
}
