import { useState, useEffect } from "react";
import { DogData } from "../lib/types";

export default function useFetch(url: string) {
  const [data, setData] = useState<DogData[]>();
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
