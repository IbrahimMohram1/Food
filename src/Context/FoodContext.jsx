import { createContext, useState } from "react";
import axios from "axios";

export let FoodContext = createContext();
export default function FoodContextProvider({ children }) {
  const [mealsArea, setMealsArea] = useState(null);
  const [term, setTerm] = useState("");
  const [mealDetails, setMealDetails] = useState(null);

  async function MealsByArea(term) {
    try {
      let { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${term}`,
      );
      setMealsArea(data.meals);
      setTerm(term);
    } catch (err) {
      console.log(err);
    }
  }

  async function getDetails(id) {
    try {
      let { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );
      setMealDetails(data.meals[0]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <FoodContext.Provider
      value={{
        MealsByArea,
        mealsArea,
        term,
        getDetails,
        mealDetails,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}
