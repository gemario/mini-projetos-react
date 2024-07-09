import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: string
}

export function Button({children, ...props}: ButtonProps) {
  return (
    <button 
      className="w-full bg-opacity-85 bg-rose-500 py-3 rounded-md font-bold text-white hover:bg-rose-500 
      transition duration-150 hover:ease-in"
      {...props}
    >
      {children}
    </button>
  )
}