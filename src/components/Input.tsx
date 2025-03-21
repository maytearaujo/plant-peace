import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import '../styles.css';

import { IMaskInput } from 'react-imask';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: 'inputText' | 'inputNumber' | 'radioButton';
  label: string;
  placeholder: string;
  value?: string | number;
  maskType?: 'currency' | 'percentage';
  radioValue?: string;
  error?: boolean;
  handleChange?: (value: string) => void;
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  placeholder: string;
  value?: string;
  error?: boolean;
}

const Input = ({ id, type, maskType, label, placeholder, value, radioValue, error, handleChange, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-4">
      {label && <label className="font-inter font-medium text-lg text-[#1E1E24]" htmlFor={id}>{label}</label>}
      {type === 'inputText' && (
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          className={`flex-1 w-full px-4 py-3 bg-transparent rounded-[4px] border-[1.5px] border-darkGray font-inter placeholder:font-inter placeholder:text-[#AFB2AA] ${error && 'border-red-600'}`}
          value={value}
          {...rest}
        />
      )}
      {type === 'inputNumber' && maskType === 'currency' && (
        <IMaskInput
          id={id}
          mask="R$000,00"
          placeholder={placeholder}
          min={0}
          type='text'
          value={value?.toString() ?? ''} // Convert value to string
          {...rest}
          className={`flex-1 w-full px-4 py-3 bg-transparent rounded-[4px] border-[1.5px] border-darkGray font-inter placeholder:font-inter placeholder:text-[#AFB2AA] ${error && 'border-red-600'}`}
        />
      )}
      {type === 'inputNumber' && maskType === 'percentage' && (
        <IMaskInput
          id={id}
          placeholder={placeholder}
          min={0}
          type='text'
          value={value?.toString() ?? ''} // Convert value to string
          lazy={true} // Aplica a máscara assim que o primeiro caractere for digitado
          {...rest}
          className={`flex-1 w-full px-4 py-3 bg-transparent rounded-[4px] border-[1.5px] border-darkGray font-inter placeholder:font-inter placeholder:text-[#AFB2AA] ${error && 'border-red-600'}`}
        />
      )}

      {type === 'radioButton' && (
        <div className='flex gap-[19px]'>
          <div className='flex gap-2 items-center'>
            <label htmlFor='indoorLabel' className='font-inter text-[#1E1E24] font-medium'>Indoor</label>
            <input id='indoorLabel' type="radio" name="plantType" value='indoor' onClick={() => handleChange && handleChange('indoor')} />
          </div>

          <div className='flex gap-2 items-center'>
            <label htmlFor='outdoorLabel' className='font-inter text-[#1E1E24] font-medium'>Outdoor</label>
            <input id='outdoorLabel' type="radio" name="plantType" value='outdoor' onClick={() => handleChange && handleChange('outdoor')} />
          </div>
        </div>
      )}

    </div>
  );
};

const TextArea = ({ id, label, placeholder, value, error, ...rest }: TextAreaProps) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="font-inter font-medium text-lg text-[#1E1E24]" htmlFor={id}>{label}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        className={`flex-1 w-full px-4 py-3 bg-transparent rounded-[4px] border-[1.5px] border-darkGray font-inter placeholder:font-inter placeholder:text-[#AFB2AA] min-h-[125px] resize-none ${error && 'border-red-600'}`}

        value={value}
        {...rest}
      />
    </div>
  );
};

export { Input, TextArea };
