import { ReactNode } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  border?: boolean;
  margin?: boolean;
  height?: boolean;
  width?: boolean;
  type?: "submit"
}

function Button({ children, border, margin, width, height, type, ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className=
      {`flex items-center justify-center bg-primaryLunarGreen text-athenaGrey 
      font-raleway leading-[154.5%] hover:opacity-90 
      ${border ? "rounded-[4px]" : "rounded-none"}
      ${margin ? "mt-[32px]" : ""}
      ${width ? "w-full" : "w-191"}
      ${height ? "h-52" : "h-62"}
      `}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
