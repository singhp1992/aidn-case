import { FormEvent } from "react";
import { FormState } from "./types";

export const handleFormSubmit = async (
  e: FormEvent<HTMLFormElement>,
  formData: FormState
) => {
  e.preventDefault();
  console.log(formData, ">>>> here is the form data");
};
