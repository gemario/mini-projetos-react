import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input">{}

export function Input({ ...props }: InputProps) {
  return (
    <input 
      className="w-full py-3 mb-4 pl-6 font-semibold rounded border-solid border border-gray-400 outline-none bg-gray-200 
      focus:bg-transparent focus:border-rose-500 focus:placeholder:text-gray-900" 
      {...props}
  />
  )
}