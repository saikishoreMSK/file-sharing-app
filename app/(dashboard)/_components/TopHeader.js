import { AlignJustify } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

const TopHeader = ({ toggleSideNav }) => {
  return (
    <div className='flex p-5 items-center justify-between md:justify-end'>
      {/* Toggle the SideNav on click */}
      <AlignJustify className='md:hidden cursor-pointer' onClick={toggleSideNav} />
      <Image src={'/logo.svg'} width={150} height={100} className='md:hidden' />
      <UserButton />
    </div>
  );
};

export default TopHeader;
