'use client';
import React, { useState, useEffect } from 'react';
import {signIn} from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


 const handleSubmit = async (e) => {
 e.preventDefault()
  signIn("credentials", {
    email, password,
    redirect: false
  })

  router.push("/")


 }

  return (
    <div className="fixed lopas top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
>
  <div className="bg-white  p-4 w-1/2 md:w-1/3 lg:w-1/4 text-center border border-black">

      <h2 className="text-3xl font-semibold mb-4">Login Form</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover-bg-blue-600"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;