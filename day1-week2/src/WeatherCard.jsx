import React from "react";
import { useWeather } from "./WeatherContext";



function Info({ label, value }) {
return (
<div className="info">
<div className="label">{label}</div>
<div className="value">{value}</div>
</div>
);
}


export default function WeatherCard() {
const { city, data, loading, error } = useWeather();


if (!city) return <p className="muted">Gõ tên thành phố để bắt đầu…</p>;
if (loading) return <p className="muted loading">Đang tải dữ liệu…</p>;
if (error) return <p className="error">{error}</p>;
if (!data) return null;


const icon = data.weather?.[0]?.icon;
const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : "";


return (
<section className="card">
<div className="header">
<div>
<div className="city">{data.name}, {data.sys?.country}</div>
<div className="desc">{data.weather?.[0]?.description}</div>
</div>
{iconUrl && <img src={iconUrl} alt="icon" width={72} height={72} />}
</div>


<div className="grid">
<Info label="Nhiệt độ" value={`${Math.round(data.main.temp)}°C`} />
<Info label="Cảm nhận" value={`${Math.round(data.main.feels_like)}°C`} />
<Info label="Độ ẩm" value={`${data.main.humidity}%`} />
<Info label="Gió" value={`${Math.round(data.wind.speed)} m/s`} />
<Info label="Áp suất" value={`${data.main.pressure} hPa`} />
<Info label="Mây" value={`${data.clouds?.all ?? 0}%`} />
</div>
</section>
);
}