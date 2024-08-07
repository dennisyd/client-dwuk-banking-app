import { InputField } from "../formComponents";

interface Input {
  id: string;
  placeholder: string;
  value: string;
}

export default function Input({ id, placeholder, value }: Input) {
  return <InputField id={id} placeholder={placeholder} value={value} />;
}
