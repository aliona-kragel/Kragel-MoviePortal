import { useEffect, useState } from "react";

const useWindowResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isFullscreen, setIsFullscreen] = useState(window.innerWidth >= 575);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      setIsFullscreen(newWidth >= 575);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width, isFullscreen };
}

export default useWindowResize;