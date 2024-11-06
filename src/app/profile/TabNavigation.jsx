'use client'

// components/TabNavigation.js

import { useState } from 'react';
import EditProfileTab from './EditProfile';
import PreferencesTab from './PreferencesTab';
import SecurityTab from './SecurityTab';
import EditProfileContent from './EditProfileContent';
import PreferencesContent from './PreferencesContent';
import SecurityContent from './SecurityContent';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'Edit Profile':
        return <EditProfileContent />;
      case 'Preferences':
        return <PreferencesContent />;
      case 'Security':
        return <SecurityContent />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex items-center border-b border-gray-200 gap-10 mt-10 ml-4">
        <EditProfileTab isActive={activeTab === 'Edit Profile'} onClick={() => setActiveTab('Edit Profile')} />
        <PreferencesTab isActive={activeTab === 'Preferences'} onClick={() => setActiveTab('Preferences')} />
        <SecurityTab isActive={activeTab === 'Security'} onClick={() => setActiveTab('Security')} />
      </div>
      {renderContent()}
    </div>
  );
};

export default TabNavigation;
