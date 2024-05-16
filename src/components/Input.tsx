import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import '../styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: 'inputText' | 'inputNumber' | 'radioButton';
  label: string;
  placeholder: string;
  value?: string | number;
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  placeholder: string;
  value?: string;
}

const Input = ({ id, type, label, placeholder, value, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="font-inter font-medium text-lg text-[#1E1E24]" htmlFor={id}>{label}</label>
      {type === 'inputText' && (
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          className="flex-1 w-full px-4 py-3 bg-transparent rounded-[4px] border-[1.5px] border-darkGray placeholder:font-inter placeholder:text-[#AFB2AA]"
          value={value}
          required
          {...rest}
        />
      )}
      {type === 'inputNumber' && (
        <input
          id={id}
          type="number"
          placeholder={placeholder}
          className="flex-1 w-full px-4 py-3 bg-transparent rounded-[4px] border-[1.5px] border-darkGray placeholder:font-inter placeholder:text-[#AFB2AA]"
          required
          min={0}
          value={value}
          {...rest}
        />
      )}
      {type === 'radioButton' && <input id={id} type="radio" />}
    </div>
  );
};

const TextArea = ({ id, label, placeholder, value, ...rest }: TextAreaProps) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="font-inter font-medium text-lg text-[#1E1E24]" htmlFor={id}>{label}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        className="flex-1 w-full px-4 py-3 bg-transparent rounded-[4px] border-[1.5px] border-darkGray placeholder:font-inter placeholder:text-[#AFB2AA] min-h-[125px] resize-none"
        value={value}
        required
        {...rest}
      />
    </div>
  );
};

export { Input, TextArea };