import { ReactNode } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  border?: boolean;
  margin?: boolean;
  type?: "submit"
}

function Button({ children, border, margin, type, ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className=
      {`flex items-center justify-center h-[62px] w-[191px] bg-primaryLunarGreen text-athenaGrey 
      font-raleway leading-[154.5%] hover:opacity-90 
      ${border ? "rounded-[4px]" : "rounded-none"}
      ${margin ? "mt-[32px]" : ""}
      `}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
