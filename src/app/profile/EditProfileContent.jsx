import Profile from '../assests/profileImg.svg'
import Image from 'next/image';


// components/EditProfileContent.js
const EditProfileContent = () => (
    <div className="mt-4">
        <div className="flex flex-col md:flex-row items-center md:items-start p-6 space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Picture Section */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                <Image
                    src={Profile} // Replace with your image path
                    alt="Profile Picture"
                    layout="fill"
                    objectFit="cover"
                />
                <button className="absolute bottom-6 right-3.5  bg-blue-600 text-white p-2 rounded-full shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536M9 13l6-6M3 21h4.5a1.5 1.5 0 001.5-1.5V15a2 2 0 01.586-1.414l9-9a2 2 0 112.828 2.828l-9 9A2 2 0 0112 16H6a1 1 0 00-1 1v4.5a1.5 1.5 0 001.5 1.5H9"></path>
                    </svg>
                </button>
            </div>

            {/* Form Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg font-outfit">
                <div>
                    <label className="text-sm font-medium text-gray-700">Your Name</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Faizan"
                        style={{ color: '#718EBF', borderColor: '#DFEAF2' }}
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">User Name</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="khan"
                        style={{ color: '#718EBF' }}
                    />
                </div>

                {/* Additional fields */}
                <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Faizan@itec"
                        style={{ color: '#718EBF' }}
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <input type="password" className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="********"
                        style={{ color: '#718EBF' }}
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="25 January 1990"
                        style={{ color: '#718EBF' }}
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">Present Address</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Saddar Peshawar"
                        style={{ color: '#718EBF' }}
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">Permanent Address</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Badaber Peshawar"
                        style={{ color: '#718EBF' }}
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">City</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Peshawar"
                        style={{ color: '#718EBF' }}
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">Postal Code</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="45962"
                        style={{ color: '#718EBF' }}
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">Country</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Pak"
                        style={{ color: '#718EBF' }}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default EditProfileContent;
