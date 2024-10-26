import React from "react";
import UseMeals from "../../Hooks/UseMeals";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function AllMeals() {
  const { meals, mealsLoading } = UseMeals();
  return (
    <>
      {mealsLoading ? (
        <Loading />
      ) : (
        <div className="flex  items-center  flex-wrap">
          {meals?.map((meal) => (
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
      )}
    </>
  );
}
