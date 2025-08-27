import React from "react";
import { WeatherProvider } from "./WeatherContext";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import "./App.css";


export default function App() {
return (
<WeatherProvider>
<main className="wrap">
<h1> Weather App</h1>
<SearchBar />
<WeatherCard />
 </main>
</WeatherProvider>
);
}