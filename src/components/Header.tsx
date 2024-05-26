// src/components/Header.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import IMG from '../assest/img.png';

const Header: React.FC = () => {
  // use router for routing
  const router = useRouter();

  const handleReviewClick = () => {
    router.push("/review");
  };

  return (
    <header className="">
      <div className="container mx-auto w-auto py-2 bg-transparent flex justify-between">
        {/* compnay logo */}
        <Image alt="Logo" width={100} height={100} className="" src={IMG} /> 
        {/* create a button for review */}
        <button type="button" onClick={handleReviewClick}>
          Review
        </button>
      </div>
    </header>
  );
};

export default Header;
