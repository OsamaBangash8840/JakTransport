import Link from "next/link";

export default function DropdownMenu({ onView, onEdit, onDelete }) {
    return (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
            <ul className="py-2">
                <li onClick={onView} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-4.553a1 1 0 00-1.414-1.414L13 8.586 8.457 4.043a1 1 0 00-1.414 1.414L10 10m4 10H4a2 2 0 01-2-2v-7a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2zm0 0h.01" />
                    </svg>
                    View
                </li>
                <li onClick={onEdit} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1 4h1m4-3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.5 5.5v2a2 2 0 01-2 2h-7a2 2 0 01-2-2v-2m3 0H4m16 0h-4m-2-4h-1m-1-4h2m-4 0H5.25M8 8h2m4 0h2" />
                    </svg>
                    <Link href={'employee/edit-employee'}>
                    Edit
                    </Link>
                </li>
                <li onClick={onDelete} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7h-.01M5 7h.01M10 11h4m-2 0v6m8 4H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2z" />
                    </svg>
                    Delete
                </li>
            </ul>
        </div>
    );
}