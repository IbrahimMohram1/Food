import React, { useState } from "react";
import animate from "../../assets/Group5.png";
import animate1 from "../../assets/Group6.png";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

import "./animate.css";
const FoodItem = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?t=st=1729551645~exp=1729555245~hmac=74d409e28c135a3d09a30e5c8a205843e0937d6acc0b071a90b01e4ed0efe99b&w=740",
    angle: 45,
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?t=st=1729551678~exp=1729555278~hmac=b6808cb131628cedb7fe3dbd54360e6090540bc5bef4907d7be1171e9e5aae93&w=740",
    angle: 135,
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1729551698~exp=1729555298~hmac=ea6e6f6efa75ce49ef22e5babb7856f079ee2f716f54c50874d6856d92a11b2e&w=996",
    angle: 225,
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/top-view-kebab-platter-with-ribs-chicken-lula-tikka-vegetables-kebab_140725-8874.jpg?t=st=1729551737~exp=1729555337~hmac=a5715296b857dce8c39865358afeb202160da28ec6541c77c7223928335ecdbb&w=360",
    angle: 315,
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/free-photo/chicken-kebab-set-table_140725-8210.jpg?t=st=1729551756~exp=1729555356~hmac=f006b2c28bbd2b4a625df2872cd1e1027258a5d45251551cf1ad3b8eb2e04d44&w=740",
    angle: 400,
  },
  {
    id: 6,
    image:
      "https://img.freepik.com/free-photo/chicken-kebab-set-table_140725-8210.jpg?t=st=1729551756~exp=1729555356~hmac=f006b2c28bbd2b4a625df2872cd1e1027258a5d45251551cf1ad3b8eb2e04d44&w=740",
    angle: 400,
  },
  {
    id: 7,
    image:
      "https://img.freepik.com/free-photo/chicken-kebab-set-table_140725-8210.jpg?t=st=1729551756~exp=1729555356~hmac=f006b2c28bbd2b4a625df2872cd1e1027258a5d45251551cf1ad3b8eb2e04d44&w=740",
    angle: 400,
  },
  {
    id: 8,
    image:
      "https://img.freepik.com/free-photo/chicken-kebab-set-table_140725-8210.jpg?t=st=1729551756~exp=1729555356~hmac=f006b2c28bbd2b4a625df2872cd1e1027258a5d45251551cf1ad3b8eb2e04d44&w=740",
    angle: 400,
  },
  {
    id: 9,
    image:
      "https://img.freepik.com/free-photo/chicken-kebab-set-table_140725-8210.jpg?t=st=1729551756~exp=1729555356~hmac=f006b2c28bbd2b4a625df2872cd1e1027258a5d45251551cf1ad3b8eb2e04d44&w=740",
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
      <div className="flex justify-center items-center">
        <div className="dish-container">
          <button
            className="arrow left-arrow left-36  bg-[#629584] p-2 rounded-md"
            onClick={handlePrevious}
          >
            <FaArrowDown />
          </button>
          <div className="main-dish">
            <motion.div>
              <img src={FoodItem[currentDish].image} alt="Main Dish" />
            </motion.div>
          </div>
          <button
            className="arrow right-arrow right-36 bg-[#629584] p-2 rounded-md"
            onClick={handleNext}
          >
            <FaArrowDown />
          </button>

          <div className="dishes-arc overflow-hidden">
            {FoodItem.map((dish, index) => {
              const angle = (index - currentDish) * (360 / FoodItem.length); // توزيع الأطباق في دائرة كاملة
              const x = 230 * Math.cos((angle * Math.PI) / 180); // إحداثي X
              const y = -230 * Math.sin((angle * Math.PI) / 180); // إحداثي Y
              return (
                <img
                  onClick={() => setCurrentDish(index)}
                  key={dish.id}
                  src={dish.image}
                  alt={`dish ${index + 1}`}
                  className={`dish ${currentDish === index ? "active" : ""}`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    opacity: currentDish === index ? 1 : 0.6,
                    transition: "transform 0.5s, opacity 0.5s",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
