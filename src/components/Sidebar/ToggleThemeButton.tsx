import React from "react";
import { Button } from "antd";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import "./sidebar.css";

interface ToggleThemeButtonProps {
  darkTheme: boolean;
  toggleTheme: () => void;
}

const ToggleThemeButton: React.FC<ToggleThemeButtonProps> = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="Toggle-theme-btn">
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
};

export default ToggleThemeButton;
