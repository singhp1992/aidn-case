"use client";
import useFetch from "./hooks/useFetch";
import Loading from "./loading";
import Error from "./error";
import DogForm from "./components/form";

export default function Home() {
  // need to update the type data that is going to be returned
  const { data, error, loading } = useFetch(
    "https://api.thedogapi.com/v1/breeds"
  );

  // would need to fix this any

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return <p>No dog data</p>;

  if (data)
    return (
      <main className="h-screen pt-64 flex justify-center">
        <DogForm data={data} />
      </main>
    );
}

// accessibility
// remove blue outline around components in focus state?

// CHECK LIST
// 1. double check states in figma
// 2. look into refs, be able to answer questions
// - why use refs
// - what does this ref do
// make components more reusable
