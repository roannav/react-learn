import { useState, useContext, createContext } from "react";

// undefined is the arg, because the app doesn't know who will log in yet
const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "John",
    email: "john@example.com",
    dob: "01/01/2000",
  });
  console.log("children ==");
  console.log(children);

  // <UserContext.Provider> enables consuming components to subscribe to context changes.
  // The value set to the `value` prop will be passed to any of the children (or grandchildren, etc)
  // of this <UserContext.Provider> component.
  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

// Provide a way for components to subscribe to the Context.
// This is a custom hook that wraps the useContext hook.
// useContext is how you access a context value.
// So now you don't need to export UserContext.
export const useUser = () => useContext(UserContext);
