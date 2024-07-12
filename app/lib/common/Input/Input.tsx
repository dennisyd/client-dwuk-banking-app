import { useState } from "react";

interface Input {
  name: string;
  placeholder: string;
}

export default function Input({ name, placeholder }: Input) {
  const [value, setValue] = useState("");
  return (
    <input
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
}
