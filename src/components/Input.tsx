import { FC, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError | undefined;
}

const Input: FC<InputProps> = ({ label, error, ...inputProps }) => {
  return (
    <div>
      <label className="block mb-1.5">{label}</label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full p-3 border border-black focus:outline-none placeholder:text-neutral-600"
        {...inputProps}
      />
      <p className="h-6 text-red-500 text-sm mt-1">{error?.message}</p>
    </div>
  );
};

export default Input;
