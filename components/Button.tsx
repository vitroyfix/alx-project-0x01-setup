import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    // Base styles are set here, dynamic styles are passed in
    <button className={`px-4 py-2 text-white ${styles}`}>
      {title}
    </button>
  )
}

export default Button;