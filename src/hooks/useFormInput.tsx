import { useState } from "react";

interface UseFormInputProps {
  initialValue: string;
  validate?: (value: string) => string | null;
}

interface UseFormInputReturn {
  value: string;
  error: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

export const useFormInput = ({
  initialValue,
  validate,
}: UseFormInputProps): UseFormInputReturn => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (validate) {
      const validationError = validate(newValue);
      setError(validationError);
    } else {
      setError(null);
    }
  };

  const reset = () => {
    setValue(initialValue);
    setError(null);
  };

  return { value, error, onChange, reset };
};