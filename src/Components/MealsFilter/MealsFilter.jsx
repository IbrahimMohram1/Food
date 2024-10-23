import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FoodContext } from "../../Context/FoodContext";
export default function MealsFilter({ cat }) {
  const [deserts, setDeserts] = useState(null);
  let { setLoading } = useContext(FoodContext);

  async function getDesets() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`,
    );
    setDeserts(data.meals);
  }
  useEffect(() => {
    getDesets();
  }, []);

  return (
    <>
      <div className="flex  items-center justify-center flex-wrap">
        {deserts?.slice(0, 4)?.map((meal) => (
          <div key={meal.idMeal} className="lg:w-1/4 px-2 my-2 w-full ">
            <Link to={`/meal/${meal.idMeal}`}>
              <div>
                <img
                  rel="preload"
                  src={meal?.strMealThumb}
                  alt={meal?.strMeal}
                  className="w-full rounded-md"
                />
              </div>
              <div className="my-2">
                <h2 className="text-lg ">{meal.strMeal.substring(0, 25)}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
