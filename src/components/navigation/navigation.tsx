"use client";

import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

function YOINav() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 910);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute z-10 w-full">
      {isMobile ? <Sidebar /> : <Navbar />}
    </div>
  );
}

export default YOINav;
