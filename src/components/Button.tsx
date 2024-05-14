interface ButtonProps {
  label: string
}

function Button({ label }: ButtonProps) {
  return (
    <button className="flex items-center justify-center h-[62px] w-[191px] bg-primaryLunarGreen text-athenaGrey font-raleway leading-[154.5%] hover:opacity-90">
      {label}
    </button>
  )
}

export default Button
