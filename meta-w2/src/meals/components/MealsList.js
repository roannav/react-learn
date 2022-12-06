// import the Context from the Provider
import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {
  // destructure the 'meals' property from the returned object
  const { meals } = useMealsListContext();
  // meals is an array

  return (
    <div>
      <h1>Meals List using Context API</h1>
      {meals.map(( meal, index) => (
        <h2 key={index} style={{textAlign:"left"}}>Meal #{index}: {meal}</h2>
      ))}
    </div>
  );
}

export default MealsList
