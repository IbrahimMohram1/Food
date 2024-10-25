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
      <div className="backGround p-8 h-vh-100">
        <div className="flex justify-center items-center flex-wrap">
          <div className="w-full lg:w-1/2">
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

          <div className="w-full lg:w-1/2">
            <div className="dish-container">
              <button
                className="arrow left-arrow lg:left-36 left-[-30px]  bg-[#629584] p-2 rounded-md"
                onClick={handlePrevious}
              >
                <FaArrowDown />
              </button>
              <div className="main-dish">
                <img
                  src={FoodItem[currentDish].image}
                  alt="Main Dish"
                  className="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px]"
                />
              </div>
              <button
                className="arrow right-arrow lg:right-36 right-[-30px] bg-[#629584] p-2 rounded-md"
                onClick={handleNext}
              >
                <FaArrowDown />
              </button>

              <div className="dishes-arc overflow-hidden items-center lg:items-end lg:top-0 h-[250px] lg:h-[400px]">
                {FoodItem.map((dish, index) => {
                  const angle = (index - currentDish) * (360 / FoodItem.length); // توزيع الأطباق في دائرة كاملة
                  const x = 230 * Math.cos((angle * Math.PI) / 180); // إحداثي X
                  const y = -230 * Math.sin((angle * Math.PI) / 180); // إحداثي Y
                  const transformX =
                    window.innerWidth < 640
                      ? 100 * Math.cos((angle * Math.PI) / 180)
                      : x;
                  const transformY =
                    window.innerWidth < 640
                      ? -100 * Math.sin((angle * Math.PI) / 180)
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
