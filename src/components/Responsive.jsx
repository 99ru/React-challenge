import { useEffect, useState } from "react";

const Responsive = () => {
  const [device, setDevice] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDevice("mobile");
      } else if (window.innerWidth < 992) {
        setDevice("tablet");
      } else if (window.innerWidth < 1200) {
        setDevice("laptop");
      } else {
        setDevice("desktop");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h1>Responsive</h1>
      <h2>{device}</h2>
    </div>
  );
};

export default Responsive;
