import React, { createContext, useContext, useEffect, useState } from "react";


const WeatherContext = createContext(null);


export function WeatherProvider({ children }) {
const [city, setCity] = useState(""); 
const [data, setData] = useState(null); 
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");


useEffect(() => {
if (!city.trim()) {
setData(null);
setError("");
setLoading(false);
return;
}




async function fetchWeather() {
try {
setLoading(true);
setError("");
const apiKey = import.meta.env.VITE_OWM_KEY || "";
const url =
  `https://api.openweathermap.org/data/2.5/weather` +
  `?q=${encodeURIComponent(city)}` +
  `&appid=${encodeURIComponent(apiKey)}` +
  `&units=metric` +
  `&lang=vi`;


const res = await fetch(url);
if (!res.ok) {
const msg = res.status === 404 ? "Không tìm thấy thành phố" : `Lỗi ${res.status}`;
throw new Error(msg);
}
const json = await res.json();
setData(json);
} catch (e) {
if (e.name !== "AbortError") {
setError(e.message || "Có lỗi xảy ra");
setData(null);
}
} finally {
setLoading(false);
}
}


fetchWeather();
return () => controller.abort();
}, [city]);


const value = { city, setCity, data, loading, error };
return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
}


export function useWeather() {
const ctx = useContext(WeatherContext);
if (!ctx) throw new Error("useWeather phải dùng bên trong <WeatherProvider>");
return ctx;
}