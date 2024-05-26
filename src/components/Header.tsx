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
    <header className="">
      <div className="container mx-auto w-auto py-2 bg-transparent flex justify-between">
        <Image alt="Logo" width={100} height={100} className="" src={IMG} />
        <button type="button" onClick={handleReviewClick}>
          Review
        </button>
      </div>
    </header>
  );
};

export default Header;
