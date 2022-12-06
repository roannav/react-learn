import Header from '../components/Header';
import MealsProvider from "./providers/MealsProvider";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";

function MealsApp() {
  return (
    <div className="App">
      <Header txt="Meals App" />
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default MealsApp;
