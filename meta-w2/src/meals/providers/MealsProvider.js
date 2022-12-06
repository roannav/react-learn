import React from 'react';

const MealsContext = React.createContext();      // set the context variable  

const todaysMeals = [ "Baked Beans", "Baked Sweet Potato", "Baked Potatoes"];

const MealsProvider = ( {children} ) => { 

  // creates a STATE variable 'meals' 
  const [meals, setMealsList]
    = React.useState(todaysMeals);
    
  // 'value' contains the state variable 
  // that we are going to provide to
  // other component(s).
  //
  // 'children' are all the components 
  // that are within the <MealsProvider> tag,
  // from the returned JSX at the bottom of MealsApp.js.
  // 'children' has all the Context Consumers.
  return (
    <MealsContext.Provider value={{meals}}>
      {children} 
    </MealsContext.Provider>
  );
}

// Put it in a variable, make it easier to destructure an object 
// from the React Context.
export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;
