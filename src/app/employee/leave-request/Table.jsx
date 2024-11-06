'use client';

import ReusableTable from '@/app/employee/Table';
import Profile from '@/app/assests/profileImg.svg';
import Chukwema from '@/app/assests/chukwema.svg';
import Profile2 from '@/app/assests/profileImg.svg';
import Olamide from '@/app/assests/Olamide.svg';
import Jide from '@/app/assests/jide.svg';
import Femi from '@/app/assests/femi.svg';

export default function LeaveTable() {
    const headers = ["Employee", "Action", "Role", "Leave Type", "Leave From", "Leave To"];

    const rows = [
        {
            employee: { name: "Aisha Doe", image: Profile },
            action: "HR Manager",
            role: "Urgent",
            leavetype: "10/11/24",
            leavefrom: "09:00 AM",
            leaveto: '',
        },
        {
            employee: { name: "Chukwuemeka", image: Chukwema },
            action: "HR Manager",
            role: "Urgent",
            leavetype: "10/11/24",
            leavefrom: "-",
            leaveto: "",
        },
        {
            employee: { name: "Suleiman", image: Profile2 },
            action: "HR Manager",
            role: "Sick leave",
            leavetype: "10/11/24",
            leavefrom: "09:00 AM",
            leaveto: "",
        },
        {
            employee: { name: "Suleiman", image: Olamide },
            action: "HR Manager",
            role: "Emergency",
            leavetype: "10/11/24",
            leavefrom: "10:15 AM",
            leaveto: "",
        },
        {
            employee: { name: "Suleiman", image: Jide },
            action: "HR Manager",
            role: "Urgent",
            leavetype: "10/11/24",
            leavefrom: "10:15 AM",
            leaveto: "",
        },
        {
            employee: { name: "Suleiman", image: Femi },
            action: "HR Manager",
            role: "Urgent",
            leavetype: "11/11/24",
            leavefrom: "-",
            leaveto: "",
        },
    ];

    return (
        <div className="p-4">
            <ReusableTable
                headers={headers}
                rows={rows}
                // renderActions
            />
        </div>
    );
}
