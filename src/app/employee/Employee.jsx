import Table from './Table';
import Profile from '../assests/profileImg.svg'
import Chukwema from '../assests/chukwema.svg'
import Profile2 from '../assests/profileImg.svg'
import Olamide from '../assests/Olamide.svg'
import Jide from '../assests/jide.svg'
import Femi from '../assests/femi.svg'

export default function Employee() {
    const headers = ["Date", "Employee", "Role", "Status", "Check In", "Check Out", "Over Time"];

    const rows = [
        {
            date: "13/01",
            employee: { name: "Aisha Doe", image: Profile },
            role: "HR Manager",
            status: "Present",
            checkin: "09:00 AM",
            checkout: "05:00 PM",
            overtime: "0h"
        },
        {
            date: "13/01",
            employee: { name: "Chukwuemeka", image: Chukwema },
            role: "Software Engineer",
            status: "Absent",
            checkin: "-",
            checkout: "-",
            overtime: "0h"
        },
        {
            date: "13/01",
            employee: { name: "Suleiman", image: Profile2 },
            role: "App Developer",
            status: "Present",
            checkin: "09:00 AM",
            checkout: "05:00 PM",
            overtime: "0h"
        }, 
         {
            date: "13/01",
            employee: { name: "Suleiman", image: Olamide },
            role: "Marketing Executive",
            status: "Late",
            checkin: "10:15 AM",
            checkout: "05:00 PM",
            overtime: "0h"
        }, 
         {
            date: "13/01",
            employee: { name: "Suleiman", image: Jide },
            role: "Marketing Executive",
            status: "Late",
            checkin: "10:15 AM",
            checkout: "05:00 PM",
            overtime: "0h"
        },  
        {
            date: "13/01",
            employee: { name: "Suleiman", image: Femi },
            role: "Marketing Executive",
            status: "Absent",
            checkin: "-",
            checkout: "-",
            overtime: "0h"
        },
    ];

    return (
        <div className="p-4">
            <Table
                headers={headers}
                rows={rows}
                renderActions
            />
          
        </div>
    );
}
