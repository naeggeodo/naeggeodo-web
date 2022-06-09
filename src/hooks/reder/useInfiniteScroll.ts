import { useEffect, useRef, useState } from 'react';

export function useInfiniteScroll(data: any) {
  const limit = 5;
  const target = useRef<HTMLDivElement>(null);

  const [skip, setSkip] = useState(0);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    if (data) {
      const observer = new IntersectionObserver(callback, { threshold: 0.5 });
      observer.observe(target.current);

      return () => {
        observer && observer.disconnect();
      };
    }
  }, [data]);

  useEffect(() => {
    if (data && skip <= data.length) {
      const arr = [];
      for (let i = skip; i < data.length; i++) {
        if (arr.length > limit) break;
        arr.push(data[i]);
      }
      setDataList((prev) => [...prev, ...arr]);
    }
  }, [skip, data]);

  const callback = async ([entry], observer: IntersectionObserver) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      setSkip((prev) => prev + limit + 1);
      observer.observe(entry.target);
    }
  };

  return { target, dataList };
}