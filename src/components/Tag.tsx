interface TagProps {
  label: string;
  style?: 'carousel';
}

function Tag({ label, style }: TagProps) {
  const styles = {
    carousel: {
      border: 'border-primaryAvacado',
      bg: 'bg-[#F0F1EE]',
      text: 'text-primaryAvacado',
    },
    default: {
      border: 'border-[#83E281]',
      bg: 'bg-[#F6FFF6]',
      text: 'text-[#158212]',
    },
  };

  const selectedStyle = style === 'carousel' ? styles.carousel : styles.default;

  return (
    <label
      className={`flex items-center justify-center rounded-full py-[7px] px-[13px] border-[1px] ${selectedStyle.bg} ${selectedStyle.border} w-fit`}
    >
      <span className={`leading-[154.5%] font-raleway ${selectedStyle.text}`}>{label}</span>
    </label>
  );
}

export default Tag;