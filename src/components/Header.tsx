// src/components/Header.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import IMG from '../assest/img.png';

const Header: React.FC = () => {
  const router = useRouter();

  const handleReviewClick = () => {
    router.push("/review");
  };

  return (
    <header className="bg-transparent py-2">
      <div className="container mx-auto w-auto flex justify-between items-center">
        <Image alt="Logo" width={100} height={100} className="cursor-pointer" src={IMG} />
        <button 
          type="button" 
          onClick={handleReviewClick} 
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Review
        </button>
      </div>
    </header>
  );
};

export default Header;
