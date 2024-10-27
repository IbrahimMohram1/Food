import axios from "axios";
import { details } from "framer-motion/client";
import React, { useState } from "react";
import { useQuery } from "react-query";

export default function UseDrinks() {
  const [id, setId] = useState("");
  const [cat, setCat] = useState("");

  async function getDrinks() {
    return axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`,
      )
      .then((response) => response.data);
  }
  let Drinks = useQuery({
    queryKey: ["drinks"],
    queryFn: getDrinks,
    select: (data) => data?.drinks,
  });
  async function DrinkDetails(id) {
    return axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.data);
  }
  async function DrinksByCat(cat) {
    return axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cat}`)
      .then((response) => response.data);
  }

  async function AllCategory() {
    return axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
      .then((response) => response.data);
  }

  let DrinkDetail = useQuery({
    queryKey: ["drinkDetails", id],
    queryFn: () => DrinkDetails(id),
    select: (data) => data.drinks,
    enabled: false,
  });
  let MealsCat = useQuery({
    queryKey: ["DrinksCat", cat],
    queryFn: () => DrinksByCat(cat),
    select: (data) => data.drinks,
    enabled: false,
  });
  let AllCategoryData = useQuery({
    queryKey: ["AllCat"],
    queryFn: AllCategory,
    select: (data) => data.drinks,
  });
  return {
    DrinkDetails,
    DrinksByCat,
    getDrinks,
    drinks: Drinks.data,
    drinksLoading: Drinks.isLoading,
    allCat: AllCategoryData.data,
  };
}
