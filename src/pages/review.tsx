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
    console.log("clicked")
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md mx-4 md:mx-0 md:w-1/2 lg:w-1/3 ">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-bold">Leave a Review</h4>
          <IoCloseSharp size={30} onClick={onClose} className="cursor-pointer" />
        </div>
        <div className="my-4">
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
        <div className="my-4">
          <h3 className="text-xl font-bold">Communication</h3>
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
        <div className="my-4">
          <h3 className="text-xl font-bold">Would you recommend Trausti?</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="flex items-center gap-4">
            <span
              className={`flex items-center cursor-pointer ${
                recommendation === "dislike" ? "text-red-500" : "text-gray-500"
              }`}
              onClick={() => handleRecommendationClick("dislike")}
            >
              <AiFillDislike size={30} /> Dislike
            </span>
            <span
              className={`flex items-center cursor-pointer ${
                recommendation === "like" ? "text-green-500" : "text-gray-500"
              }`}
              onClick={() => handleRecommendationClick("like")}
            >
              <AiFillLike size={30} /> Like
            </span>
          </div>
        </div>
        <div className="my-4">
          <h3 className="text-xl font-bold">Praise</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
