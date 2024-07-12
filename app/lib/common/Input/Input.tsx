import { useState } from "react";

interface Input {
  id: string;
  name: string;
  placeholder: string;
}

export default function Input({ id, name, placeholder }: Input) {
  const [value, setValue] = useState("");
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
}
