import { useState, useEffect } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

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
