import React, { useState } from "react";
import UseDrinks from "../../Hooks/UseDrinks";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../Loading/Loading";
import { use } from "framer-motion/client";

export default function DrinkDetails() {
  const Ingredients = [];

  let { id } = useParams();
  const [DrinkData, setDrinkData] = useState(null);
  const [MealsCat, setMealsCat] = useState(null);
  let { DrinkDetails, DrinksByCat } = UseDrinks();
  const [categoryType, setCategoryType] = useState("");

  useEffect(() => {
    if (id) {
      DrinkDetails(id).then((response) => {
        setDrinkData(response.drinks[0]);
        setCategoryType(response.drinks[0]?.strCategory);
        if (categoryType) {
          DrinksByCat(categoryType).then((response) => {
            setMealsCat(response?.drinks);
          });
        }
      });
    }
  }, [id, categoryType]);

  if (DrinkData) {
    for (let i = 1; i <= 20; i++) {
      let ingredient = DrinkData[`strIngredient${i}`];
      let measure = DrinkData[`strMeasure${i}`];
      if (ingredient && measure) {
        Ingredients.push({ ingredient, measure });
      }
    }
  }

  return (
    <>
      {!DrinkData ? (
        <Loading />
      ) : (
        <div>
          <div className="mb-12">
            <h1 className="text-3xl font-serif my-5 uppercase">
              Drink Details
            </h1>
            <hr className="w-12 h-1 bg-orange-400 mb-5" />
          </div>
          <h1 className="text-4xl italic my-5">{DrinkData?.strDrink}</h1>

          <hr />
          <div className="my-5">
            <h3 className="text-2xl flex items-center font-mono">
              {" "}
              Category:{" "}
              <span className="text-2xl italic  px-3">
                {DrinkData?.strCategory}
              </span>
            </h3>

            <h3 className="text-2xl my-3 flex items-center font-mono">
              {" "}
              Source:
              <span className="text-2xl italic px-3">
                {DrinkData?.strVideo ? (
                  <a
                    href={DrinkData.strVideo}
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
                src={DrinkData?.strDrinkThumb}
                alt={DrinkData?.strDrink}
              />
            </div>
          </div>
          <hr />

          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3">
              {Ingredients.length > 0 && (
                <div>
                  <h2 className="text-3xl my-5 ">Ingredients</h2>

                  <ul className="relative mx-4">
                    {Ingredients.map((item, index) => (
                      <li className="p-2  li-style" key={index}>
                        {" "}
                        {item?.measure} - {item?.ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <h2 className="text-3xl my-5 ">Instructions</h2>
              <ul className="relative mx-4 p-5">
                {DrinkData?.strInstructions
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
              <h2 className="text-3xl my-5 ">Related Drinks</h2>
              <div className="flex flex-wrap">
                {!MealsCat ? (
                  <Loading />
                ) : (
                  MealsCat.slice(0, 5).map((item) => (
                    <Link
                      to={`/drink/${item.idDrink}`}
                      key={item.strDrink}
                      className="w-full"
                    >
                      <div className=" border-1 border  flex items-center p-2 my-3 rounded-md">
                        <img
                          className="object-cover h-44 rounded-md"
                          src={item?.strDrinkThumb}
                          alt={item?.strDrink}
                        />
                        <div className="ml-4">
                          <h6 className="text-lg font-mono">{item.strDrink}</h6>
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
