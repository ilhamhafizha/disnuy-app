import { useEffect, useState } from "react";

interface Response {
  loading: boolean;
  data: null | any;
}

const useFetch = (url: string): Response => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetcher = async (url: string) => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetcher(url);
  }, [url]);

  return {
    data,
    loading,
  };
};

export default useFetch;
