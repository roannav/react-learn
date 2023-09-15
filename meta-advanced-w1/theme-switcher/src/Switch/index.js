import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { colorTheme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={colorTheme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
