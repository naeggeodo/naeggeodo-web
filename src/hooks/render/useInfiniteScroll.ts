import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export function useInfiniteScroll<T>(data: T[]) {
  const limit = 5;
  const target = useRef<HTMLDivElement>(null);

  const [skip, setSkip] = useState(0);
  const [dataList, setDataList] = useState<T[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (data) {
      const observer = new IntersectionObserver(callback, { threshold: 0.5 });
      observer.observe(target.current);
      return () => {
        observer && observer.disconnect();
      };
    }
  }, [data, router]);

  useEffect(() => {
    if (data && skip <= data.length) {
      const arr = [];
      for (let i = skip; i < data.length; i++) {
        if (arr.length > limit) break;
        arr.push(data[i]);
      }
      setDataList((prev) => [...prev, ...arr]);
    }
  }, [skip, data, router]);

  const callback = async ([entry], observer: IntersectionObserver) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      setSkip((prev) => prev + limit + 1);
      observer.observe(entry.target);
      console.log('스크롤시렌더링');
    }
  };

  return { target, dataList };
}
