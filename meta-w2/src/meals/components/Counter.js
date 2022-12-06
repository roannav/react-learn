// import the Context from the Provider
import { useMealsListContext } from "../providers/MealsProvider";

const Counter = () => {
  // destructure the 'meals' property from the returned object
  const { meals } = useMealsListContext();
  // meals is an array
  
  return (
    <div>
      <h3>Number of meals today: {meals.length}</h3>
    </div>
  );
}

export default Counter;
