import { InputField } from "../formComponents";

interface Input {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

export default function Input({
  id,
  name,
  placeholder,
  value,
  setValue
}: Input) {
  return (
    <InputField
      id={id}
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
}
