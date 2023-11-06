'use client'
import React, { useState } from 'react';


const RegistrationForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

      const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="fixed lopas top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
> <div className="bg-white  p-4 w-1/2 md:w-1/3 lg:w-1/4 text-center border border-black">
      <h2 className="text-3xl font-semibold mb-4">Registration Form</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-600">Email</label>
          <input
  type="email"
  id="email"
  name="email"
  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
  required
  value={formData.email}
  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
/>

        </div>
        <div>
         <input
  type="password"
  id="password"
  name="password"
  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
  required
  value={formData.password}
  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
/>

        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          onClick={handleSubmit}>
            Register
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
