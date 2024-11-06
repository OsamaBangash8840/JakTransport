import React from 'react'

export default function PreferencesTab({isActive, onClick}) {
  return (
        <div className="flex flex-col items-start">
          <button
            onClick={onClick}
            className={`py-2 px-4 text-tabsBlue ${
              isActive ? 'border-b-2 border-blue-500 text-ActiveBlue' : 'hover:text-blue-500'
            }`}
          >
            Preferences
          </button>
        </div>
      
  )
}
