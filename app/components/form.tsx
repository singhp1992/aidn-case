"use client";
// COMMENT: use client directive needed since useState etc is used in this component
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../loading";
import Error from "../error";
import DropDown from "../components/dropdown";
import { DogData, FormState } from "../lib/types";
import { handleFormSubmit } from "../lib/actions";

export default function Form() {
  const [formData, setFormData] = useState<FormState>({});
  const { data, error, loading } = useFetch<DogData>(
    "https://api.thedogapi.com/v1/breeds"
  );
  // COMMENT: for reusability testing
  const {
    data: data2,
    error: error2,
    loading: loading2,
  } = useFetch<DogData>("https://api.thecatapi.com/v1/breeds");

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return <p>No dog data</p>;

  return (
    <form
      className="flex gap-4"
      // COMMENT: for form submission testing
      //   onSubmit={(e) => handleFormSubmit(e, formData)}
    >
      {/* COMMENT: each dropdown component is reusable */}
      <DropDown
        data={data}
        label="Hunderase"
        defaultText="Velg hunderase"
        formName="dogBreed"
        setFormData={setFormData}
      />
      {/* COMMENT: for reusability testing */}
      {/* <DropDown
        data={data2}
        label="Katterase"
        defaultText="Velg katterase"
        formName="catBreed"
        setFormData={setFormData}
      /> */}
      {/* COMMENT: for form submission testing */}
      {/* <button type="submit">submit</button> */}
    </form>
  );
}
