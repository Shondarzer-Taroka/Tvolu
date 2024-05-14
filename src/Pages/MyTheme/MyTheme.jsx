import { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const MyTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    const [isDarkMode, setIsDarkMode] = useState(storedTheme === "synthwave");
  
    useEffect(() => {
      document.querySelector("html").setAttribute("data-theme", storedTheme);
    }, [storedTheme]);
  
    const toggleDarkMode = () => {
      const newTheme = isDarkMode ? "light" : "synthwave";
      localStorage.setItem("theme", newTheme);
      setIsDarkMode(!isDarkMode);
      document.querySelector("html").setAttribute("data-theme", newTheme);
    };

    return (
    
        <>
        <div className=" ml-1">
        <DarkModeToggle
          onChange={toggleDarkMode}
          checked={isDarkMode}
          size={60}
        />
      </div>
        </>

    );
};

export default MyTheme;