import React, { useState } from "react";
import { useWeather } from "./WeatherContext";
 

export default function SearchBar() {
const { city, setCity } = useWeather();
const [q, setQ] = useState(city);


const submit = (e) => {
e.preventDefault();
setCity(q.trim());
};


return (
<form className="row" onSubmit={submit} autoComplete="off">
<input
className="input"
value={q}
onChange={(e) => setQ(e.target.value)}
placeholder="Nhập thành phố (vd: Ha Noi, Da Nang, London)"
/>
<button className="btn" type="submit" disabled={!q.trim()}>
Tìm
</button>
</form>
);
}