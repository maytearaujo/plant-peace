import { ReactNode } from "react"
import styles from "./Button.module.css"
import { useNavigate } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  border?: boolean;
  margin?: boolean;
  height?: boolean;
  width?: boolean;
  type?: "submit";
  redirect?: string;
}

function Button({ children, border, margin, width, height, type, redirect, ...rest }: ButtonProps) {
  const navigate = useNavigate();

  function handleNavigate(redirect: string) {
    navigate(`${redirect}`);
    window.scrollTo(0, 0);
  }

  return (
    <button
      type={type}
      className=
      {`flex items-center justify-center bg-primaryLunarGreen text-athenaGrey 
      font-raleway leading-[154.5%] hover:opacity-90 
      ${styles.button}
      ${border ? "rounded-[4px]" : "rounded-none"}
      ${margin ? "mt-[32px]" : ""}
      ${width ? "w-full" : "w-191"}
      ${height ? "h-52" : "h-62"}
      `}
      {...rest}
      onClick={() => handleNavigate(redirect || "")}
    >
      {children}
    </button>
  )
}

export default Button
