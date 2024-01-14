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

  console.log(formData, ">>>> updated form data");

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return <p>No dog data</p>;

  return (
    <form
      className="px-4"
      // COMMENT: for form submission testing
      onSubmit={(e) => handleFormSubmit(e, formData)}
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
      <DropDown
        data={data2}
        label="Katterase"
        defaultText="Velg katterase"
        formName="catBreed"
        setFormData={setFormData}
      />
      {/* COMMENT: for form submission testing */}
      <div className="w-full justify-end flex">
        <button
          type="submit"
          className="px-4 py-2 mt-4 border border-gray-300 rounded-lg text-gray-300"
        >
          submit
        </button>
      </div>
    </form>
  );
}
