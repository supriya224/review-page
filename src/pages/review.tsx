// pages/review.tsx
"use client"
import Review from '@/components/core/Review';
import React, { useState } from 'react';

const ReviewPage: React.FC = () => {
  const [showReview, setShowReview] = useState(false);

    const handleCloseReview = () => {
        setShowReview(false);
      };
    

  return (
  <div>
  <Review onClose={handleCloseReview} />
  </div>
);
};

export default ReviewPage;
