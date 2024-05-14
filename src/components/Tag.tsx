interface TagProps {
  label: string
}

function Tag({ label }: TagProps) {
  return (
    <label className="flex items-center justify-center rounded-full py-[7px] px-[13px] bg-[#F6FFF6] border-[1.62px] border-[#83E281] w-fit">
      <span className="leading-[154.5%] font-raleway text-[#158212]">{label}</span>
    </label>
  )
}

export default Tag
