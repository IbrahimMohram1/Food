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
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <FoodContextProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div className="container overflow-hidden">
              <Navbar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/meals/:cat" element={<Meals />} />
                <Route path="/meal/:id" element={<MealDetails />} />
              </Routes>
            </div>
          </BrowserRouter>
        </QueryClientProvider>
      </FoodContextProvider>
    </>
  );
}

export default App;
