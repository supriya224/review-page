"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

interface ReviewProps {
  onClose: () => void;
}

const Review: React.FC<ReviewProps> = ({ onClose }) => {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [recommendation, setRecommendation] = useState<"like" | "dislike" | null>(null);

  const handleStarClick = (
    setRating: React.Dispatch<React.SetStateAction<number>>,
    rating: number
  ) => {
    setRating(rating);
  };

  const handleRecommendationClick = (type: "like" | "dislike") => {
    setRecommendation(type);
  };

  return (
    <section>
      <div className="bg-cyan-800 h-screen flex items-center justify-center">
        <div className="w-1/3 h-auto my-12 bg-white p-16 rounded-xl">
          <div className="flex items-center justify-between">
            <h4 className="text-3xl font-bold">Leave a review</h4>
            <IoCloseSharp size={30} onClick={onClose} className="cursor-pointer" />
          </div>
          <div className="my-5">
            <h3 className="text-xl font-bold">Safety</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={30}
                  onClick={() => handleStarClick(setSafetyRating, star)}
                  className={
                    star <= safetyRating
                      ? "text-yellow-500 cursor-pointer"
                      : "text-gray-300 cursor-pointer"
                  }
                />
              ))}
            </div>
          </div>
          <div className="mb-5">
            <h4 className="text-xl font-bold">Communication</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={30}
                  onClick={() => handleStarClick(setCommunicationRating, star)}
                  className={
                    star <= communicationRating
                      ? "text-yellow-500 cursor-pointer"
                      : "text-gray-300 cursor-pointer"
                  }
                />
              ))}
            </div>
          </div>
          <div className="mb-5">
            <h4 className="text-xl font-bold">Would you recommend Trausti?</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="flex items-center gap-12">
              <span
                className={`flex items-center cursor-pointer ${recommendation === "dislike" ? "text-red-500" : "text-gray-500"}`}
                onClick={() => handleRecommendationClick("dislike")}
              >
                <AiFillDislike size={30} /> Unlike
              </span>
              <span
                className={`flex items-center cursor-pointer ${recommendation === "like" ? "text-green-500" : "text-gray-500"}`}
                onClick={() => handleRecommendationClick("like")}
              >
                <AiFillLike size={30} /> Like
              </span>
            </div>
          </div>
          <div className="mb-5">
            <h4 className="text-xl font-bold">Praise</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
