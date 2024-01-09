import { useState, useEffect } from "react";

// COMMENT: using generic T for reusability
// COMMENT: using client side rendering 
export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T[] | null>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Database Error:", error);
        setLoading(false);
        setError(true);
      }
    }
    fetchData();
  }, []);

  return { data, error, loading };
}
