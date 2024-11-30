/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, memo } from 'react';

export const useAnimate = () => {
  const elRefs = useRef(new Set()); // Gunakan Set untuk menghindari duplikasi

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Hentikan pengamatan
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    elRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elRefs.current.forEach((element) => {
        if (element) {
          observer.unobserve(element); // Hentikan pengamatan saat unmount
        }
      });
    };
  }, []);

  return (ref) => {
    if (ref && !elRefs.current.has(ref)) {
      elRefs.current.add(ref); // Tambahkan elemen ke Set jika belum ada
    }
  };
};

export default memo(useAnimate);
