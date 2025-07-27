import { useEffect, useState } from "react";

interface Response {
  loading: boolean;
  data: null | any;
}

const useFetch = (url: string): Response => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetcher = async (url: string) => {
    if (!url) return;
    
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error('Fetch error:', error);
      setData(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (url) {
      fetcher(url);
    } else {
      setData(null);
    }
  }, [url]);

  return {
    data,
    loading,
  };
};

export default useFetch;
