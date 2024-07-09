import { ComponentProps } from "react"

interface LabelProps extends ComponentProps<"label">{
  children: string
}

export function Label({ children, ...props }: LabelProps) {
  return (
    <label className="text-gray-700 font-bold" {...props}>
      {children}
    </label>
  )
}