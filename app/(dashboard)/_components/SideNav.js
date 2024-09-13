"use client";

import { File, Shield, Upload } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Ensure you are using the correct import

const SideNav = () => {
    const router = useRouter(); // Initialize the Next.js router
    const menuList = [
        {
            id: 1,
            name: 'Upload',
            icon: Upload,
            path: '/upload'
        },
        {
            id: 2,
            name: 'Files',
            icon: File,
            path: '/files'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield,
            path: '/upgrade'
        },
    ];
    
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to handle navigation
    const handleNavigation = (index, path) => {
        setActiveIndex(index); // Update the active state
        router.push(path);     // Navigate to the corresponding path
    };

    return (
        <div className='shadow-sm border-r h-full'>
            <div className='p-5 border-b border-gray-300'>
                <Image src='/logo.svg' width={150} height={100} />
            </div>
            <div className='flex flex-col float-left w-full'>
                {menuList.map((item, index) => (
                    <button
                        key={item.id}
                        className={`flex gap-2 px-6 py-4 w-full hover:bg-gray-100 text-gray-500
                            ${activeIndex === index ? 'bg-blue-50 text-primary' : null}`}
                        onClick={() => handleNavigation(index, item.path)} // Trigger navigation on click
                    >
                        <item.icon />
                        <h2>{item.name}</h2>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SideNav;
