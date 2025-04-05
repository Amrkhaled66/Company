import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const IntersectionContext = createContext();

export default function IntersectionProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <IntersectionContext.Provider value={{ ref, isVisible }}>
      {children}
    </IntersectionContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useIntersection() {
  return useContext(IntersectionContext);
}
