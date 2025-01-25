import { ChangeEvent } from "react";
interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  disabled?: boolean;
  label: string;
  className?: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  type?: "search" | "text" | "email" | "password" | "number";
  name?: string;
  error?: string | null;
  step?: string;
  max?: string;
  textSize?: string;
}

export const AppInput = ({
  label,
  disabled = false,
  className,
  onChange,
  placeholder,
  maxLength,
  value,
  name,
  type = "text",
  onClick,
  step,
  max,
  error,
  textSize = "text-md",
}: Props) => {
  return (
    <>
      <div className="w-full">
        <label
          htmlFor={label}
          className="block text-sm/6 font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="relative mt-1 rounded-md ">
          <input
            step={step}
            onClick={onClick}
            maxLength={maxLength}
            placeholder={placeholder}
            max={max}
            onChange={(e) => onChange(e)}
            type={type}
            disabled={disabled}
            id={label}
            value={value}
            className={`${className} block w-full rounded-md  py-2 pl-3  text-gray-900 ring-1  ring-gray-300 placeholder:text-gray-400 focus:ring-2 border-none focus:border-none focus:ring-gray-300 sm:text-sm/6`}
            style={{ border: "none", outline: "none" }}
            name={name}
          />
          <p className={`${textSize}`}>{error}</p>
        </div>
      </div>
    </>
  );
};
