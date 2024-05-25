import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import React from "react";
import IMG from "../../assets/img.webp";

const Header = () => {
  return (
    <MainLayout>
      <header className="container mx-auto w-auto">
        <div className="w-full py-2 bg-transparent flex justify-between">
          <Image alt="" width={100} height={100} className="" src={IMG} />
          <h4>Review</h4>
        </div>
      </header>
    </MainLayout>
  );
};

export default Header;
