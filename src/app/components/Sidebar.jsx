'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi'; // Import menu icons
import dashboard from '@/app/assests/dashboard-black.svg';
import employees from '@/app/assests/employees.svg';
import vehicle from '@/app/assests/vehicles.svg';
import payroll from '@/app/assests/payrol.svg';
import booking from '@/app/assests/booking.svg';
import attendance from '@/app/assests/attendance.svg';
import tracking from '@/app/assests/tracking.svg';
import fuel from '@/app/assests/fuel.svg';
import reports from '@/app/assests/reports.svg';
import dashboardActive from '@/app/assests/dashboard-square-01.svg';
import employeesActive from '@/app/assests/employeesWhite.svg';
import vehicleActive from '@/app/assests/vehiclesWhite.svg';
import payrollActive from '@/app/assests/payrolWhite.svg';
import bookingActive from '@/app/assests/bookingWhite.svg';
import attendanceActive from '@/app/assests/attendanceWhite.svg';
import trackingActive from '@/app/assests/trackingWhite.svg';
import fuelActive from '@/app/assests/fuelWhite.svg';
import reportsActive from '@/app/assests/reportsWhite.svg';
import arrowDown from '@/app/assests/arrow-down-01-round.svg';
import arrowActive from '@/app/assests/arrow-down-01-white.svg';
import Logo from '@/app/assests/Itech-Logos-2_Main-Logo-Vert-copy 1.svg';

const Sidebar = () => {
    const currentPath = usePathname();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility

    const toggleSidebar = () => setIsOpen(!isOpen);

    const menuItems = [
        { name: "Dashboard", href: '/dashboard', icon: dashboard, iconActive: dashboardActive },
        { name: "Employee", href: '/employee', icon: employees, iconActive: employeesActive, dropdown: arrowDown, dropdownActive: arrowActive },
        { name: "Vehicles / Assists", href: '/vehicles', icon: vehicle, iconActive: vehicleActive, dropdown: arrowDown, dropdownActive: arrowActive },
        { name: "Payroll", href: '/payroll', icon: payroll, iconActive: payrollActive, dropdown: arrowDown, dropdownActive: arrowActive },
        { name: "Booking / Contract", href: '/booking', icon: booking, iconActive: bookingActive, dropdown: arrowDown, dropdownActive: arrowActive },
        { name: "Attendance", href: '/attendance', icon: attendance, iconActive: attendanceActive, dropdown: arrowDown, dropdownActive: arrowActive },
        { name: "Tracking / Route", href: '/tracking', icon: tracking, iconActive: trackingActive, dropdown: arrowDown, dropdownActive: arrowActive },
        { name: "Fuel / Maintenance", href: '/maintenance', icon: fuel, iconActive: fuelActive, dropdown: arrowDown, dropdownActive: arrowActive },
        { name: "Reports and Analytics", href: '/reports', icon: reports, iconActive: reportsActive }
    ];

    return (
        <div className='font-outfit'>
            {/* Hamburger Menu for Mobile */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 right-4 z-50 p-2  rounded-md bg-blue-600 text-white"
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Sidebar */}
            <div
                className={`bg-white text-black lg:w-64 min-h-screen p-4 font-outfit shadow-md flex flex-col fixed top-0 right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 transition-transform duration-300 z-40 lg:static`}
            >
                <div className="text-lg font-bold mb-7 mt-7 flex justify-center mr-5 md:mr-0">
                    <Image src={Logo} alt="logo" width={137} height={27} />
                </div>
                <ul className="flex-grow">
                    {menuItems.map((item, index) => {
                        // Check if the current path starts with the item's href (this allows for matching sub-routes)
                        const isActive = currentPath.startsWith(item.href);
                        const isHovered = hoveredIndex === index;
                        const showActiveIcon = isActive || isHovered;

                        return (
                            <li
                                key={index}
                                className="lg:mb-4"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <Link href={item.href}>
                                    <div
                                        className={`flex items-center gap-4 p-4 lg:p-2 lg:rounded-[12px] lg:text-[14px] lg:py-4 lg:pl-4 lg:leading-[20px] lg:font-light ${showActiveIcon ? 'bg-blue-600 text-white' : 'text-black hover:bg-blue-600 hover:text-white'}`}
                                    >
                                        <Image
                                            src={showActiveIcon ? item.iconActive : item.icon}
                                            alt={item.name}
                                            width={20}
                                            height={20}
                                        />
                                        <span>{item.name}</span>
                                        {item.dropdown && (
                                            <Image
                                                src={showActiveIcon ? item.dropdownActive : item.dropdown}
                                                alt={`${item.name} dropdown`}
                                                width={16}
                                                height={16}
                                            />
                                        )}
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <footer className="mt-auto text-[14px]">
                    <p>© Copyright All Right Reserved</p>
                </footer>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default Sidebar;
