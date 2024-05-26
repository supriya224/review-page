"use client";
import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import React, { useState } from "react";
import IMG from "../../assest/img.png";
import Review from "@/pages/review";

const Header: React.FC = () => {
  const [showReview, setShowReview] = useState(false);

  const handleReviewClick = () => {
    setShowReview(true);
    console.log("clicked")
  };

  const handleCloseReview = () => {
    setShowReview(false);
  };

  return (
    <MainLayout>
      <header className="bg-orange-400 sm:bg-red-600 md:bg-yellow-500 lg:bg-blue-500 xl:bg-teal-500">
        <div className="container mx-auto w-auto py-2 flex justify-between">
          <Image alt="" width={100} height={100} className="w-auto h-auto" src={IMG} />
          <button type="button" onClick={handleReviewClick} className=" cursor-pointer">
            Review
          </button>
        </div>
        {showReview && <Review onClose={handleCloseReview} />}
      </header>
    </MainLayout>
  );
};

export default Header;
