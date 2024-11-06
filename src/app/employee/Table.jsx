'use client'
import { useState } from "react";
import DropdownMenu from './DropdownMenu'
import StatusBadge from './StatusBadge'
import Image from "next/image";

export default function ReusableTable({ headers, rows, renderActions }) {
    const [openMenu, setOpenMenu] = useState(null);

    return (
        <div className="overflow-x-auto font-outfit">
            <table className="w-full bg-white  border-gray-200">
                <thead>
                    <tr className="text-left bg-gray-50 text-black">
                        {headers.map((header, index) => (
                            <th key={index} className="px-4 py-3 text-sm font-light">{header}</th>
                        ))}
                        {renderActions && <th className="px-4 py-3 text-sm font-light">Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b last:border-0 hover:bg-gray-50">
                            {headers.map((header, colIndex) => {
                                const headerKey = header.replace(/\s+/g, '').toLowerCase();

                                return (
                                    <td key={colIndex} className="px-4 py-3 text-sm font-light text-black">
                                        {headerKey === 'employee' && row.employee ? (
                                            <div className="flex items-center space-x-2">
                                                <Image
                                                    src={row.employee.image}
                                                    alt={row.employee.name}
                                                    className="w-8 h-8 rounded-full"
                                                />
                                                <span>{row.employee.name}</span>
                                            </div>
                                        ) : headerKey === 'status' ? (
                                            <StatusBadge status={row[headerKey]} />
                                        ) : (
                                            row[headerKey] || "-"
                                        )}
                                    </td>
                                );
                            })}
                            {renderActions && (
                                <td className="px-4 py-3 relative text-center">
                                    <button onClick={() => setOpenMenu(openMenu === rowIndex ? null : rowIndex)} className="text-gray-500 focus:outline-none">
                                        &#x22EE;
                                    </button>
                                    {openMenu === rowIndex && (
                                        <div className="absolute top-8 right-0 z-10">
                                            <DropdownMenu />
                                        </div>
                                    )}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}