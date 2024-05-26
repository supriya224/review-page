// src/app/page.tsx
"use client";
import React from "react";
import Header from "@/components/Header";
import ReviewPage from "./review/page";

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <ReviewPage />
    </main>
  );
};

export default Home;
