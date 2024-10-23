import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
export default function UseMeals() {
  async function getMeals(term) {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((response) => response.data);
  }

  async function getAllCategory() {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((response) => response.data);
  }

  async function Area() {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      .then((response) => response.data);
  }

  const [term, setTerm] = useState("");
  const [cat, setCat] = useState("");

  let Meals = useQuery({
    queryKey: ["PopularMeals", term],
    queryFn: () => getMeals(""),
    select: (data) => data?.meals,
  });
  let Category = useQuery({
    queryKey: ["AllCategory"],
    queryFn: getAllCategory,
    select: (data) => data?.categories,
  });
  let AllArea = useQuery({
    queryKey: ["AllArea"],
    queryFn: Area,
    select: (data) => data?.meals,
  });

  async function mealsByCat(cat) {
    return axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`,
    );
  }
  let MealsCategory = useQuery({
    queryKey: ["MealsCategory", cat],
    queryFn: () => mealsByCat(cat),
    select: (data) => data?.meals,
    enabled: !!cat,
  });
  return {
    mealsByCat,
    meals: Meals.data,
    mealsLoading: Meals.isLoading,
    category: Category.data,
    area: AllArea.data,
  };
}
