import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode;
  border?: boolean;
  margin?: boolean;
}

function Button({ children, border, margin }: ButtonProps) {
  return (
    <button
      className=
      {`flex items-center justify-center h-[62px] w-[191px] bg-primaryLunarGreen text-athenaGrey 
      font-raleway leading-[154.5%] hover:opacity-90 
      ${border ? "rounded-[4px]" : "rounded-none"}
      ${margin ? "mt-[32px]" : ""}
      `}>
      {children}
    </button>
  )
}

export default Button
