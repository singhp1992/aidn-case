"use client";
import useFetch from "./hooks/useFetch";
import Loading from "./loading";
import Error from "./error";
import DropDown from "./components/dropdown";
import { DogData } from "./lib/types";

export default function Home() {
  const { data, error, loading } = useFetch<DogData>(
    "https://api.thedogapi.com/v1/breeds"
  );

  // for reusability testing
  // const {
  //   data: data2,
  //   error: error2,
  //   loading: loading2,
  // } = useFetch<DogData>("https://api.thecatapi.com/v1/breeds");

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return <p>No dog data</p>;

  if (data)
    return (
      <main className="h-screen pt-64 flex justify-center">
        <form className="flex gap-4">
          {/* each dropdown component is reusable */}
          <DropDown
            data={data}
            label="Hunderase"
            defaultText="Velg hunderase"
          />
          {/* for reusability testing */}
          {/* <DropDown
            data={data2}
            label="Katterase"
            defaultText="Velg katterase"
          /> */}
        </form>
      </main>
    );
}

// CHECK LIST
// 1. double check states in figma
// 2. look into refs, be able to answer questions
// - why use refs
// - what does this ref do
// make sure that you can access the form data
// have a fake submit button for testing
