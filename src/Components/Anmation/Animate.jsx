import React, { useState } from "react";
import animate from "../../assets/Group5.png";
import animate1 from "../../assets/Group6.png";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import Spiner1 from "../../assets/Spiner1.png";
import Spiner2 from "../../assets/Spiner2.png";
import Spiner3 from "../../assets/Spiner3.png";

import "./animate.css";
const FoodItem = [
  {
    id: 1,
    image: Spiner1,
    angle: 45,
  },
  {
    id: 2,
    image: Spiner2,
    angle: 135,
  },
  {
    id: 3,
    image:
      "https://w1.pngwing.com/pngs/722/675/png-transparent-cooking-varenyky-pierogi-jiaozi-pelmeni-borscht-food-dish.png",
    angle: 225,
  },
  {
    id: 4,
    image:
      "https://e7.pngegg.com/pngimages/786/552/png-clipart-platter-of-grilled-lamb-italian-cuisine-pizza-pasta-food-plate-healthy-food-food-beef.png",
    angle: 315,
  },
  {
    id: 5,
    image:
      "https://static.vecteezy.com/system/resources/previews/036/498/554/non_2x/ai-generated-paneer-tikka-on-a-white-plate-on-transparent-background-png.png",
    angle: 400,
  },
  {
    id: 6,
    image:
      "https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png",
    angle: 400,
  },
  {
    id: 7,
    image:
      "https://w7.pngwing.com/pngs/421/849/png-transparent-squid-as-food-fried-fish-smoked-salmon-dish-recipe-fried-fish-food-animals-seafood.png",
    angle: 400,
  },
  {
    id: 8,
    image:
      "https://w7.pngwing.com/pngs/709/17/png-transparent-crostino-potluck-dish-poster-food-cheese-breakfast-cheese-recipe.png",
    angle: 400,
  },
  {
    id: 9,
    image:
      "https://w7.pngwing.com/pngs/15/197/png-transparent-dressed-herring-dish-asian-cuisine-food-recipe-green-salad-food-seafood-recipe.png",
    angle: 400,
  },
];
export default function Animate() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };
  const [currentDish, setCurrentDish] = useState(0);

  const handleNext = () => {
    setCurrentDish((prev) => (prev + 1) % FoodItem.length);
  };

  const handlePrevious = () => {
    setCurrentDish((prev) => (prev - 1 + FoodItem.length) % FoodItem.length);
  };

  return (
    <>
      <div className="backGround p-8 h-vh-100">
        <div className="flex justify-center items-center flex-wrap">
          <div className="w-full lg:w-1/3">
            <h1 className="navfont text-4xl my-2">Welcome In TestBite</h1>
            <p className="fontHeader">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus alias illum assumenda, voluptates ex maiores modi
              repellat obcaecati natus ratione, aliquid tempora voluptatibus
              aperiam quis perspiciatis veniam consequuntur nihil impedit quod
              necessitatibus autem delectus! Reiciendis laudantium cum soluta
              blanditiis id ipsam ut, eveniet nemo atque vero ad, quam ea odit.
            </p>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="dish-container">
              <button
                className="arrow left-arrow lg:left-6 left-[-30px]  bg-[#629584] p-2 rounded-md"
                onClick={handlePrevious}
              >
                <FaArrowDown />
              </button>
              <div className="main-dish lg:relative lg:top-12">
                <img
                  src={FoodItem[currentDish].image}
                  alt="Main Dish"
                  className="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px]"
                />
              </div>
              <button
                className="arrow right-arrow lg:right-6 right-[-30px] bg-[#629584] p-2 rounded-md"
                onClick={handleNext}
              >
                <FaArrowDown />
              </button>

              <div className="dishes-arc overflow-hidden lg:items-end top-[-10%] items-end   h-[250px] lg:h-[400px]">
                {FoodItem.map((dish, index) => {
                  const angle = (index - currentDish) * (360 / FoodItem.length); // توزيع الأطباق في دائرة كاملة
                  const x = 280 * Math.cos((angle * Math.PI) / 180); // إحداثي X
                  const y = -280 * Math.sin((angle * Math.PI) / 180); // إحداثي Y
                  const transformX =
                    window.innerWidth < 640
                      ? 110 * Math.cos((angle * Math.PI) / 180)
                      : window.innerWidth < 1023
                      ? 120 * Math.cos((angle * Math.PI) / 180)
                      : x;
                  const transformY =
                    window.innerWidth < 640
                      ? -110 * Math.sin((angle * Math.PI) / 180)
                      : window.innerWidth < 1023
                      ? -120 * Math.sin((angle * Math.PI) / 180)
                      : y;

                  return (
                    <img
                      onClick={() => setCurrentDish(index)}
                      key={dish.id}
                      src={dish.image}
                      alt={`dish ${index + 1}`}
                      className={`dish ${
                        currentDish === index ? "active" : ""
                      } lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] `}
                      style={{
                        transform: `translate(${transformX}px, ${transformY}px) `,
                        opacity: currentDish === index ? 1 : 0.6,
                        transition: "transform 0.5s, opacity 0.5s",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
