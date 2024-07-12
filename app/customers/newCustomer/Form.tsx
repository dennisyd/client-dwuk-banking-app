import { Input } from "@/app/lib/common/formComponents/formComponents";
import Button from "@/app/lib/common/Button";
import colours from "@/app/lib/constants/colors";
import { useState } from "react";

const firstName = (
  <Input id="first_name" name="first_name" placeholder="First Name" />
);
const lastName = (
  <Input id="last_name" name="last_name" placeholder="Last Name" />
);
const email = <Input id="email" name="email" placeholder="Email" />;
const submitButton = (
  <Button
    type="submit"
    text="Submit"
    onClick={() => {}}
    primaryColor={colours.black}
  />
);

const form = [firstName, lastName, email];

export default function Form() {
  const [formSlide, setFormSlide] = useState(0);

  

}
