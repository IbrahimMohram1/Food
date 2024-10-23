import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "../../Context/FoodContext";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import UseMeals from "../../Hooks/UseMeals";
import Loading from "../Loading/Loading";

export default function Meals() {
  const [VisibleItem, setVisibleItem] = useState(15);
  const [MealsData, setMealsData] = useState(null);
  let { cat } = useParams();
  let { meals, mealsByCat } = UseMeals();

  const showMoreItems = () => {
    setVisibleItem(VisibleItem + 10);
  };
  const dataToDisplay = MealsData && MealsData.length > 0 ? MealsData : meals;

  useEffect(() => {
    mealsByCat(cat).then((response) => {
      setMealsData(response.data.meals);
    });
  }, [dataToDisplay]);
  return (
    <>
      {cat && !MealsData?.length > 0 ? (
        <Loading />
      ) : (
        <div>
          <div>
            {cat && (
              <div>
                {" "}
                <div className="mb-12">
                  <h1 className="text-3xl font-serif my-5 uppercase">{cat}</h1>
                </div>
                <h1 className="text-4xl italic my-5">Meals</h1>
                <hr className="w-12 h-1 bg-orange-400 mb-5" />
              </div>
            )}

            <div className="flex  items-center flex-wrap">
              {dataToDisplay?.slice(0, VisibleItem)?.map((meal) => (
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
                      <h2 className="text-lg ">
                        {meal.strMeal?.substring(0, 10)}
                      </h2>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center m-2">
              {VisibleItem < dataToDisplay?.length && (
                <button
                  onClick={showMoreItems}
                  className=" px-12 py-2 bg-white text-black border border-1 border-black text-center hover:bg-black hover:text-white transition-all duration-500"
                >
                  See More
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
