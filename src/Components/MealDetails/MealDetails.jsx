import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FoodContext } from "../../Context/FoodContext";
import Loading from "../Loading/Loading";
import UseMeals from "../../Hooks/UseMeals";

export default function MealDetails() {
  const { meals, mealsCat, getDetails, mealDetails } = useContext(FoodContext);
  let { id } = useParams();
  const Ingredients = [];
  const [VisibleItem, setVisibleItem] = useState(5);
  const [MealsData, setMealsData] = useState(null);
  let { mealsByCat } = UseMeals();

  const categoryType = mealDetails?.strCategory;
  if (mealDetails) {
    for (let i = 1; i <= 20; i++) {
      let ingredient = mealDetails[`strIngredient${i}`];
      let measure = mealDetails[`strMeasure${i}`];
      if (ingredient && measure) {
        Ingredients.push({ ingredient, measure });
      }
    }
  }

  useEffect(() => {
    getDetails(id);
    mealsByCat(categoryType).then((response) => {
      setMealsData(response.data.meals);
    });
  }, [id, categoryType]);
  return (
    <>
      {!mealDetails ? (
        <Loading />
      ) : (
        <div>
          <div className="mb-12">
            <h1 className="text-3xl font-serif my-5 uppercase">Meal Details</h1>
            <hr className="w-12 h-1 bg-orange-400 mb-5" />
          </div>
          <h1 className="text-4xl italic my-5">{mealDetails?.strMeal}</h1>

          <hr />
          <div className="my-5">
            <h3 className="text-2xl flex items-center font-mono">
              {" "}
              Category:{" "}
              <span className="text-2xl italic  px-3">
                {mealDetails?.strCategory}
              </span>
            </h3>

            <h3 className="text-2xl my-3 flex items-center font-mono">
              {" "}
              Source:
              <span className="text-2xl italic px-3">
                {mealDetails?.strYoutube ? (
                  <a
                    href={mealDetails.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white border border-1 px-16 py-1 ">
                      Video
                    </button>
                  </a>
                ) : (
                  <p>undefined</p>
                )}
              </span>{" "}
            </h3>

            <div className="flex justify-center my-5">
              <img
                className=" object-contain h-[450px]"
                src={mealDetails?.strMealThumb}
                alt={mealDetails?.strMeal}
              />
            </div>
          </div>
          <hr />

          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl my-5 ">Ingredients</h2>

              <ul className="relative mx-4">
                {Ingredients.map((item, index) => (
                  <li className="p-2  li-style" key={index}>
                    {" "}
                    {item?.measure} - {item?.ingredient}
                  </li>
                ))}
              </ul>
              <h2 className="text-3xl my-5 ">Instructions</h2>
              <ul className="relative mx-4 p-5">
                {mealDetails?.strInstructions
                  ?.split(".")
                  .slice(0, -1)
                  .map((item, idx) => (
                    <li className="li-style p-2 " key={idx}>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl my-5 ">Related Meals</h2>
              <div className="flex flex-wrap">
                {!MealsData ? (
                  <Loading />
                ) : (
                  MealsData?.slice(0, VisibleItem).map((item) => (
                    <Link
                      key={item.idMeal}
                      className="w-full"
                      to={`/meal/${item.idMeal}`}
                    >
                      <div className=" border-1 border  flex items-center p-2 my-3 rounded-md">
                        <img
                          className="object-cover h-44 rounded-md"
                          src={item?.strMealThumb}
                          alt={item?.strMeal}
                        />
                        <div className="ml-4">
                          <h6 className="text-lg font-mono">{item.strMeal}</h6>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
