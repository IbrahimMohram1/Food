import React, { useState } from "react";
import UseDrinks from "../../Hooks/UseDrinks";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useEffect } from "react";

export default function AllDrinks() {
  let { drinks, allCat, DrinksByCat, getDrinks } = UseDrinks();
  const [VisibleItem, setVisibleItem] = useState(15);
  const [DrinksOfCat, setDrinksOfCat] = useState(null);
  const showMoreItems = () => {
    setVisibleItem(VisibleItem + 10);
  };

  const dataToDisplay =
    DrinksOfCat?.length > 0 && DrinksOfCat !== "no data found"
      ? DrinksOfCat
      : drinks;
  const HandleSelectChange = (value) => {
    DrinksByCat(value).then((response) => setDrinksOfCat(response.drinks));
  };

  return (
    <>
      <form className="max-w-sm mx-auto">
        <select
          onChange={(event) => HandleSelectChange(event.target.value)}
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5"
        >
          <option value={""}>Choose a Category</option>

          {allCat
            ?.filter((cat) => cat.strCategory !== "Beer")
            ?.map((cat, idx) => (
              <option value={cat.strCategory} key={idx}>
                {cat.strCategory}
              </option>
            ))}
        </select>
      </form>

      {!dataToDisplay ? (
        <Loading />
      ) : (
        <div className="flex  items-center  flex-wrap mt-10">
          {Array.isArray(dataToDisplay) &&
            dataToDisplay
              ?.filter((drink) => drink.strAlcoholic !== "Alcoholic " || "Beer")
              .slice(0, VisibleItem)
              ?.map((drink) => (
                <div key={drink.idDrink} className="lg:w-1/4 px-2 my-2 w-full ">
                  <Link to={`/drink/${drink.idDrink}`}>
                    <div>
                      <img
                        rel="preload"
                        src={drink?.strDrinkThumb}
                        alt={drink?.strDrink}
                        className="w-full rounded-md"
                      />
                    </div>
                    <div className="my-2">
                      <h2 className="text-lg ">{drink.strDrink}</h2>
                    </div>
                  </Link>
                </div>
              ))}
        </div>
      )}
      <div className=" flex justify-center items-center m-2">
        {VisibleItem < dataToDisplay?.length && (
          <button
            onClick={showMoreItems}
            className=" px-12 py-2 bg-white text-black border border-1 border-black text-center hover:bg-black hover:text-white transition-all duration-500"
          >
            See More
          </button>
        )}
      </div>
    </>
  );
}
