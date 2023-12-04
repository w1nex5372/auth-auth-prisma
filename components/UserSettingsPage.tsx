import React, {useState} from 'react';

interface UserSettingsPageProps {
  handleSettingsClick: () => void;
}

const UserSettingsPage: React.FC<UserSettingsPageProps> = ({ handleSettingsClick }) => {


    const handleSaveButtonClick = () => {
       handleSettingsClick()
       
    }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <button className='text-2xl' onClick={handleSettingsClick}>X</button>
        <h1 className="text-2xl font-bold mb-4">User Settings</h1>

        {/* Section 3: Theme and Appearance */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Theme and Appearance</h2>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" /> Dark Mode
          </label>
          <label className="block">
            <select className="border p-2 rounded">
              <option value="light">Light Theme</option>
              <option value="dark">Dark Theme</option>
            </select>
          </label>
        </div>

        {/* Section 4: Language and Localization */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Language and Localization</h2>
          <label className="block mb-2">
            Preferred Language:
            <select className="border p-2 rounded ml-2">
              <option value="en">English</option>
        
            </select>
          </label>
          <label className="block">
            Timezone:
            <select className="border p-2 rounded ml-2">
              <option value="gmt">GMT</option>
              <option value="est">EST</option>
              <option value="pst">PST</option>
            </select>
          </label>
        </div>

        {/* Section 9: Security */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Security</h2>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Enable Two-Factor Authentication
          </label>
        </div>

        {/* Section 10: Notification Preferences */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Notification Preferences</h2>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Receive Email Notifications
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Receive Push Notifications
          </label>
        </div>
        <button className='border mt-2 py-2 px-7 hover:bg-secondary rounded-lg bg-green text-white font-medium '
        onClick={()=> handleSaveButtonClick(

        )}
        >save</button>

        
      </div>
      
    </div>
  );
};

export default UserSettingsPage;
