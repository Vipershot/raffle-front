import {ChangeEvent} from 'react'
interface Props {
    onChange: (event:ChangeEvent<HTMLInputElement> )=> void
    disabled?: boolean
    label: string
    className?: string
    placeholder: string
    maxLength?: number
}

export const AppInput = ({
  label,
  disabled = false,
  className,
  onChange,
  placeholder,
  maxLength,
}: Props) => {
  return (
    <>
      <div>
        <label
      
          htmlFor={label}
          className="block text-sm/6 font-medium text-gray-700"
        >
         {label} 
        </label>
        <div className="relative mt-1 rounded-md ">
         
          <input
          maxLength={maxLength}
          placeholder={placeholder}
           onChange={(e)=>onChange(e)}
           type="text"
           disabled={disabled}
           id={label}
           className={`${className} block w-full rounded-md  py-2 pl-3  text-gray-900 ring-1  ring-gray-300 placeholder:text-gray-400 focus:ring-2 border-none focus:border-none focus:ring-gray-300 sm:text-sm/6`}
           style={{border:"none", outline:"none"}}
          
          />
        </div>
      </div>
    </>
  );
};
