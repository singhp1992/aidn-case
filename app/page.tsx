"use client";
import useFetch from "./hooks/useFetch";
import Loading from "./loading";
import Error from "./error";
import DropDown from "./components/dropdown";

export default function Home() {
  // need to update the type data that is going to be returned
  const { data, error, loading } = useFetch(
    "https://api.thedogapi.com/v1/breeds"
  );

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return <p>No dog data</p>;

  if (data)
    return (
      <main className="h-screen pt-64 flex justify-center">
        <form>
          {/* each dropdown component is reusable */}
          <DropDown data={data} label="Hunderase" />
        </form>
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
// make sure that you can access the form data
// have a fake submit button for testing
// change the toggle state to useRef
