'use client'

import React,{useState} from 'react'

export default function PreferencesContent() {

    const [notifications, setNotifications] = useState({
        currencyActivity: true,
        merchantOrder: false,
        recommendations: true,
      });
    
      const toggleNotification = (key) => {
        setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
      };

  return (
    <div className="p-6 space-y-6 max-w-3xl font-outfit">
      {/* Currency and Time Zone Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium text-gray-700">Currency</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-3 border  rounded-[15px]  shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-[13px]"
            placeholder="USD"
            style={{color:'#718EBF',borderColor:'#DFEAF2'}}
      />
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-700">Time Zone</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-3 border rounded-[15px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-[13px]"
            placeholder="(GMT-12:00) International Date Line West"
            style={{color:'#718EBF',borderColor:'#DFEAF2'}}
          />
        </div>
      </div>

      {/* Notification Settings */}
      <div>
        <label className="text-sm font-medium text-gray-700">Notification</label>
        <div className="mt-4 space-y-4">
          <div className="flex items-center">
            <button
              onClick={() => toggleNotification('currencyActivity')}
              className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${notifications.currencyActivity ? 'bg-blue-600' : 'bg-gray-200'}`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${notifications.currencyActivity ? 'translate-x-4' : ''}`} />
            </button>
            <span className="ml-3 text-gray-700">I send or receive digital currency</span>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={() => toggleNotification('merchantOrder')}
              className={`w-10 h-6 flex items-center  rounded-full p-1 transition-colors duration-300 ${notifications.merchantOrder ? 'bg-blue-600' : 'bg-gray-200'}`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${notifications.merchantOrder ? 'translate-x-4' : ''}`} />
            </button>
            <span className="ml-3 text-gray-700">I receive merchant order</span>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => toggleNotification('recommendations')}
              className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${notifications.recommendations ? 'bg-blue-600' : 'bg-gray-200'}`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${notifications.recommendations ? 'translate-x-4' : ''}`} />
            </button>
            <span className="ml-3 text-gray-700">There are recommendations for my account</span>
          </div>
        </div>
      </div>
    </div>
  )
}
