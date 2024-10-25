import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "../../Context/FoodContext";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Meals from "../Meals/Meals";
import MealsFilter from "../MealsFilter/MealsFilter";
import img from "../../assets/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table.jpg";
import Loading from "../Loading/Loading";
import UseMeals from "../../Hooks/UseMeals";
import Animate from "../Anmation/Animate";
export default function Home() {
  const [VisibleItem, setVisibleItem] = useState(15);
  const showMoreItems = () => {
    setVisibleItem(VisibleItem + 10);
  };
  let { mealsArea, term, MealsByArea } = useContext(FoodContext);
  let { category, area, meals, mealsLoading } = UseMeals();

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 984,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const dataToDisplay = mealsArea && mealsArea.length > 0 ? mealsArea : meals;

  return (
    <>
      <Animate />
      <header className="bg-[#629584]">
        <div className="flex flex-wrap items-center justify-between ">
          <div className="w-full lg:w-1/2  ">
            <img src={img} alt="Img" className="w-full " />
          </div>
          <div className="w-full lg:w-1/2 ">
            <div className="flex justify-center items-center ">
              <h1 className="text-3xl font-bold text-white my-10 lg:my-0 fontHeader">
                Welcome to Foodie
              </h1>
            </div>
          </div>
        </div>
      </header>
      {mealsLoading ? (
        <Loading />
      ) : (
        <div>
          <h1 className="font-bold text-2xl mt-10 mb-3 font-mono"> Sweets</h1>
          <hr className="w-12 h-1 bg-orange-400 mb-5" />
          <MealsFilter cat="Dessert" />
          <h1 className="font-bold text-2xl mt-10 mb-3 font-mono"> Seafood</h1>
          <hr className="w-12 h-1 bg-orange-400 mb-5" />
          <MealsFilter cat="Seafood" />

          <h1 className="font-bold text-2xl mt-10 mb-3 font-mono">
            {" "}
            Popular Categories
          </h1>
          <hr className="w-12 h-1 bg-orange-400 mb-5" />

          <Slider {...settings}>
            {category?.map((cat) => (
              <div key={cat.idCategory} className="">
                <Link to={`/meals/${cat.strCategory}`}>
                  <div className="flex justify-center items-center cursor-pointer ">
                    <img
                      rel="preload"
                      className=" border border-1 rounded-full w-32 h-32 p-2"
                      src={cat.strCategoryThumb}
                      alt={cat.strCategory}
                    />
                  </div>
                  <div>
                    <h2 className="text-center my-2 text-lg font-mono">
                      {cat.strCategory}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
          <div className="flex  justify-between items-center">
            {term && term !== "" ? (
              <h1 className="text-4xl italic my-5">Popular Meals in {term} </h1>
            ) : (
              <h1 className="text-4xl italic my-5">Popular Meals</h1>
            )}
            <h1 className="font-bold text-2xl mt-10 mb-3 font-mono"></h1>

            <form className="max-w-sm ">
              <select
                onChange={(event) => MealsByArea(event.target.value)}
                id="countries"
                className="bg-gray-50 border border-gray-300-blue-500 block w-full p-2.5 mt-10 mb-3 "
              >
                <option value={""}>Popular Meals</option>
                {area?.map((ar, idx) => (
                  <option value={ar.strArea} key={idx}>
                    {ar.strArea}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <hr className="w-12 h-1 bg-orange-400 mb-5" />
          <div className="flex  items-center  flex-wrap">
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
                      {meal.strMeal.substring(0, 25)}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
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
        </div>
      )}
    </>
  );
}
