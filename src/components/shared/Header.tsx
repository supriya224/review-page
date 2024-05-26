"use client";
import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import React, { useState } from "react";
import IMG from "../../assest/img.png";
import Review from "@/components/core/Review"; // Adjust the import path if necessary

const Header: React.FC = () => {
  const [showReview, setShowReview] = useState(false);

  const handleReviewClick = () => {
    setShowReview(true);
  };

  const handleCloseReview = () => {
    setShowReview(false);
  };

  return (
    <MainLayout>
      <header className="container mx-auto w-auto">
        <div className="w-full py-2 bg-transparent flex justify-between">
          <Image alt="" width={100} height={100} className="" src={IMG} />
          <button type="button" onClick={handleReviewClick}>
            Review
          </button>
        </div>
        {showReview && <Review onClose={handleCloseReview} />}
      </header>
    </MainLayout>
  );
};

export default Header;
