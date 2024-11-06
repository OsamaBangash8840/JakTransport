'use client';

import ReusableTable from '@/app/employee/Table';
import Bus from '@/app/assests/vehicles/Bus.svg';
import Van from '@/app/assests/vehicles/Van.svg';
import Truck from '@/app/assests/vehicles/Truck.svg';
import Bus2 from '@/app/assests/vehicles/Bus.svg';
import Van2 from '@/app/assests/vehicles/Van.svg';
import Truck2 from '@/app/assests/vehicles/Truck.svg';


export default function LeaveTable() {
    const headers = ["License", "Assets", "Vehicle Identification", "Status", "From", "To", "Employees"];

    const rows = [
        {
            license: "DEF456",
            assets: { name: "Bus", image: Bus },
            vehicleidentification: "1FTYR2CM3LKA12345",
            status: "On Trip",
            from: "09:00 AM",
            to: '',
            employees: '3',
        },
        {
            license: "DEF456",
            assets: { name: "Van", image: Van },
            vehicleidentification: "1FTYR2CM3LKA12345",
            status: "Faulted",
            from: "-",
            to: "",
            employees: '5',
        },
        {
            license: "DEF456",
            assets: { name: "Truck", image: Truck },
            vehicleidentification: "1FTYR2CM3LKA12345eave",
            status: "Delivered",
            from: "09:00 AM",
            to: "",
            employees: '2',
        },
        {
            license: "DEF456",
            assets: { name: "Bus", image: Bus2 },
            vehicleidentification: "1FTYR2CM3LKA12345ncy",
            status: "On Trip",
            from: "10:15 AM",
            to: "",
            employees: '1',
        },
        {
            license: "DEF456",
            assets: { name: "Truck", image: Truck2 },
            vehicleidentification: "1FTYR2CM3LKA12345",
            status: "On Trip",
            from: "10:15 AM",
            to: "",
            employees: '6',
        },
        {
            license: "DEF456",
            assets: { name: "Van", image: Van2 },
            vehicleidentification: "1FTYR2CM3LKA12345",
            status: "Faulted",
            from: "-",
            to: "",
            employees: '0',
        },
    ];

    return (
        <div className="p-4">
            <ReusableTable
                headers={headers}
                rows={rows}
                renderActions={true} // Ensure this prop is supported by your table component
            />
        </div>
    );
}
