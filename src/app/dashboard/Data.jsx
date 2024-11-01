import Image from 'next/image'
import React from 'react'
import UpArrow from '@/app/assests/upArrow.svg'

export default function Data({title, value, percentage, difference, image}) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
            <div className="lg:flex lg:justify-between">
                <p className="lg:text-[16px] font-medium" style={{ color: '#777980' }}>{title}</p>
                {image && <Image src={image} alt={title} />}
            </div>
            <p className="text-[32px] font-semibold mb-2">{value}</p>
            <div className="flex gap-2">
                <p className="font-bold lg:text-[14px]" style={{ color: '#1A9882' }}>{percentage}</p>
                <Image src={UpArrow} alt="Up Arrow" />
                <p className="font-medium lg:text-[14px]" style={{ color: '#858D9D' }}>{difference}</p>
            </div>
        </div>
    )
}
