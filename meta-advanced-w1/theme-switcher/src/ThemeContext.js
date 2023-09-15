import { useState, createContext, useContext } from "react";

// ThemeProvider component renders a context provider component.
/* Context value contains something like...
  theme: "light",  // "dark",
  toggleTheme: () => {}
*/

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState("light");  // "dark"
  return (
    <ThemeContext.Provider
      value={{
        colorTheme, // "light" or "dark"
        toggleTheme: () => {
          setColorTheme( (colorTheme === "light") ? "dark" : "light");
        }
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// useTheme hook returns the context object,
// that is set in the `value` prop in <ThemeContext.Provider>
export const useTheme = () => useContext(ThemeContext);
//export const useTheme = () => ({ theme: "light" });