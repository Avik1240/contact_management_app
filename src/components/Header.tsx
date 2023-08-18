import React from "react";

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <>
      <div className="h-14 flex items-center justify-center bg-[#4640f0] text-white font-bold">
        {text}
      </div>
    </>
  );
};

export default Header;
