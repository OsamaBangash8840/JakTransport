'use client'
import { useState } from 'react';
import Search from '../assests/search.svg';
import Iconify from '../assests/iconify.svg';
import Filter from '../assests/filter.svg';
import Csv from '../assests/Csv.svg';
import Image from 'next/image';

export default function EmployeeToolbar() {
    const [filterOpen, setFilterOpen] = useState(false);

    return (
        <div className="grid lg:grid-cols-2  p-4 bg-white  font-outfit">
            <div className='flex gap-4'>
                {/* Search Input */}
                <div className="relative  cursor-pointer ">
                    <span className='absolute left-[4%] top-1/2 transform -translate-y-1/2 text-gray-500'>
                        <Image
                            src={Search}
                            alt='Search Icon'
                        />
                    </span>
                    <input
                        type="text"
                        placeholder="Search by name, role, department..."
                        className="pl-12 lg:w-[370px] px-5 py-2 border text-[16px] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="absolute right-[6%] top-1/2 transform -translate-y-1/2 text-gray-500">
                        <Image
                            src={Iconify}
                            alt=' Icon'
                        />
                    </span>
                </div>

                {/* Filter Button */}
                <button
                    onClick={() => setFilterOpen(!filterOpen)}
                    className="flex items-center justify-center px-4 py-2 border text-[16px] rounded-[12px] text-gray-600 gap-4 hover:bg-gray-100"
                >
                    <span>Filter</span>
                    <Image
                    src={Filter}
                    alt='Filter'
                    />
                </button>

            </div>
            <div className='flex justify-end gap-3'>
                {/* Export CSV Button */}
                <button className="flex gap-3 items-center px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
                    <span>Export CSV</span>
                   <Image
                   src={Csv}
                   alt='Export CSV'
                   />
                </button>

                {/* Add Employee Button */}
                <button className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                    <span>+ Add Employee</span>
                </button></div>


        </div>
    );
}
