// src/app/review/page.tsx
"use client"
import React from "react";
import Review from "@/components/Review";
import { useRouter } from "next/navigation";

const ReviewPage: React.FC = () => {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div>
      <Review onClose={handleClose} />
    </div>
  );
};

export default ReviewPage;
