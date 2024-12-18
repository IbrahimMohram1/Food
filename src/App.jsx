import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import FoodContextProvider from "./Context/FoodContext";
import Meals from "./Components/Meals/Meals";
import MealDetails from "./Components/MealDetails/MealDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import AllMeals from "./Components/AllMeals/AllMeals";
import AllDrinks from "./Components/AllDrinks/AllDrinks";
import DrinkDetails from "./Components/DrinkDetails/DrinkDetails";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <div className="container overflow-hidden">
        <QueryClientProvider client={queryClient}>
          <FoodContextProvider>
            <BrowserRouter>
              <Navbar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="allmeals" element={<AllMeals />} />
                <Route path="alldrinks" element={<AllDrinks />} />
                <Route path="/meals/:cat" element={<Meals />} />
                <Route path="/drink/:id" element={<DrinkDetails />} />
                <Route path="/meal/:id" element={<MealDetails />} />
              </Routes>
            </BrowserRouter>
          </FoodContextProvider>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
